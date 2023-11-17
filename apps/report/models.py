from django.db import models

class Platform(models.Model):
    X_TWITTER = 'X'
    FACEBOOK = 'FACEBOOK'
    INSTAGRAM = 'INSTAGRAM'
    REDDIT  = 'REDDIT'
    Platforms = [(X_TWITTER, "X/Twitter"), 
                 (FACEBOOK, 'Facebook'),
                 (INSTAGRAM, "Instagrm"),
                  (REDDIT, "Rddit")]
    platfrom_name = models.CharField(max_length=255, unique=True, choices=Platforms)

    #class Meta:
      #  app_label = 'default_db'

    def __str__(self) -> str:
        return self.plattfrom_name

class Label(models.Model):
    label_name = models.CharField(max_length= 255)

    #class Meta:
      #  app_label = 'default_db'

    def __str__(self) -> str:
        return self.label_name
    
class ClassifierRespoonse(models.Model):
    Label = models.ForeignKey(Label, on_delete=models.SET_NULL, null=True)
    timestamp = models.DateTimeField().auto_created

    #class Meta:
        #app_label = 'default_db'
    def __str__(self) -> str:
        return f"{self.Label.label_name if self.Label else 'No Label'} at {self.timestamp}"
        


class Post(models.Model):
    post_content = models.TextField()
    post_link = models.CharField(max_length=1024, blank=True, null=True)
    post_image = models.CharField(max_length=1024, blank=True, null=True)
    user_prediction = models.CharField(max_length=255)
    platform = models.ForeignKey(Platform, on_delete=models.SET_NULL, null=True)
    classifier_response = models.ForeignKey(ClassifierRespoonse, on_delete=models.SET_NULL, null=True)
    timestamp = models.DateTimeField().auto_created

    #class Meta:
       # app_label = 'default_db'

    def __str__(self) -> str:
        return f"Post on {self.platform.platfrom_name} at {self.timestamp}"