# products/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all().prefetch_related("variants__images", "specifications")
        serializer = ProductSerializer(products, many=True, context={"request": request})
        return Response(serializer.data)


class ProductDetailAPIView(APIView):
    def get(self, request, category, id):
        product = Product.objects.get(id=id, category__slug=category)
        serializer = ProductSerializer(product, context={"request": request})
        return Response(serializer.data)
