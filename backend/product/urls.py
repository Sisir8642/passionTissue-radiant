# products/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path("products/", ProductListAPIView.as_view()),
    path("products/<slug:category>/<str:id>/", ProductDetailAPIView.as_view()),
]
