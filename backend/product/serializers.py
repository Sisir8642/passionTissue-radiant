from rest_framework import serializers
from .models import (
    Product,
    ProductHighlight,
    ProductSpecification,
    ProductVariant,
    VariantImage,
)

class VariantImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = VariantImage
        fields = ["image"]


class ProductVariantSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = ProductVariant
        fields = ["id", "label", "rolls", "images"]

    def get_images(self, obj):
        request = self.context.get("request")
        return [
            request.build_absolute_uri(img.image.url)
            for img in obj.images.all()
        ]


class ProductSpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSpecification
        exclude = ["product", "id"]


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field="slug",
        read_only=True
    )

    highlights = serializers.SerializerMethodField()
    specifications = ProductSpecificationSerializer(many=True, read_only=True)
    variants = ProductVariantSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "category",
            "short_desc",
            "description",
            "image",
            "highlights",
            "specifications",
            "variants",
        ]

    def get_highlights(self, obj):
        return [h.text for h in obj.highlights.all()]
