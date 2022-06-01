"""drf_jwt_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from epic import views


#all paths are appended to localhost:3000/api/epic/
urlpatterns = [

    path('', views.get_comments),
    path('api/', views.get_membercenter),

    # path('api/epic/', views.get_comments),
    path('api/epic/', views.buisness_list),
    # path('get_comments/', views.get_comments),
    path('post_comment/', views.user_comments),
    path('post_business/', views.new_business),
    
]
