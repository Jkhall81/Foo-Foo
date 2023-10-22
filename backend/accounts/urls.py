from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.RegistrationView.as_view(), name='register'),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('api/logout/', views.LogoutView.as_view(), name='logout'),
]
