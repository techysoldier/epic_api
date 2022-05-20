from django.db import models
from authentication.models import User

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

class MemberCenter(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    locationid = models.CharField(max_length=255)
    text = models.CharField(max_length=255)

