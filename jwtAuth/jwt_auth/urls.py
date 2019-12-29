from django.urls import path
from .views import current_user, NewUser

urlpatterns = [
    path('current_user/', current_user),
    path('user/', NewUser.as_view())
]