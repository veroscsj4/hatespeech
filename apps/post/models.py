from django.db import models
from datetime import datetime

class Post(models.Model):
  img = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
  description = models.TextField(blank=True)
  date = models.DateTimeField(default=datetime.now, blank=True)