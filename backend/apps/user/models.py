from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
def user_image(instance, filename):
    return f"user/{instance.id}/{filename}"

class User(AbstractUser);
    email = models.EmailField(unique=True, blank=False, null=False)
    image = models.ImageField(upload_tp=user_image, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username
    