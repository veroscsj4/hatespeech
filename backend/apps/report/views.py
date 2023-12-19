import os
import subprocess
from django.http import  HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Platform, Label
from .serializers import *
from .utils import ExportReportDBtoCSV, UploadImageToMinio

PLATFORMS = Platform.objects.all()
LABELS = Label.objects.all()

@api_view(['GET'])
def get_reports(request):
    data = Post.objects.all()
    serializer = PostSerializer(data, context={'request': request}, many=True)
    print('Report post')
    return Response(serializer.data)


@api_view(['POST'])
def post_report(request):
    # Create list with data
    report = {'post_content': request.data['post_content']}

    # LINK - TODO Ahmed
    report['post_link'] = request.data['post_link']

    # NOT WORKING ON JSON, see REST Framework documentation
    # IMAGE: Get image from request and upload to minIO. Only its id is saved in DB
    # file = request.data['post_image'] 
    # if file and file != 'undefined':
    #     # Handle image upload
    #     id = UploadImageToMinio(file)
    #     report['post_image'] = id
    # else:
    #     report['post_image'] = 1
    report['post_image'] = None

    # USER PREDICTION
    report['user_prediction'] = create_prediction_str(request.data['user_prediction'])

    # PLATFORM 
    report['post_platform'] = get_platform_id(request.data['platform'])

    # CLASSIFIER    
    hate_class_id, report_class = classify_report(request.data['post_content'])
    if hate_class_id != None:
        report['classifier_response'] = hate_class_id
    else:
        report['classifier_response'] = 1 #default 

    print(report)

    #Serialize and save in DB
    serializer = PostSerializer(data=report)
    if serializer.is_valid():
        serializer.save()
        print('Report gespeichert')
        
        return Response(data=report_class, status=status.HTTP_201_CREATED)
    else:
        print('Report nicht gespeichert')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def get_platform_id(name):
    p = PLATFORMS.filter(platform_name=name).first()
    if p:
        return p.pk
    else:
        return 1 #default

def get_label(id):
    l = LABELS.filter(pk=id).first()
    if l:
        return l.label_name
    else:
        return 1 #default

def classify_report(content):
    script_path = os.path.abspath('../backend/classifier/hate_speech_service/svm.py')
    script_command = f'python {script_path} "{content}"'

    try:
        output = subprocess.check_output(script_command, shell=True, text=True)
        #TODO get class and save in DB with label id (like platform)
        class_resp = {'Label': output}
        serializer = ClassifierResponseSerializer(data=class_resp)
        if serializer.is_valid():
            serializer.save()
            return ClassifierResponse.objects.all().last().pk, get_label(output)
        else:
            print('Response nicht gespeichert')
            return None, None
    except subprocess.CalledProcessError as e:
        print(f"Script failed with error: {e}")  
        return None, None

def create_prediction_str(predictions):
    pred_list = ''
    for p in predictions:
        pred_list += p
    return pred_list




@api_view(['GET'])
def download_reports_csv(request):
    if request.method == 'GET':
        print('GET request')
        response = HttpResponse(
            content_type="text/csv",
        )
        response['Content-Disposition'] = 'attachment; filename=reports.csv'
        response.content = ExportReportDBtoCSV()
        return response
