import nested_admin
from django.contrib import admin
from .models import (
    Category,
    Product,
    ProductVariant,
    VariantImage,
    ProductHighlight,
    ProductSpecification,
)

# ----------------------------
# Variant Image Inline (nested under Variant)
# ----------------------------
class VariantImageInline(nested_admin.NestedTabularInline):
    model = VariantImage
    extra = 1


# ----------------------------
# Variant Inline (nested under Product)
# ----------------------------
class ProductVariantInline(nested_admin.NestedTabularInline):
    model = ProductVariant
    extra = 1
    inlines = [VariantImageInline]


# ----------------------------
# Product Other Inlines
# ----------------------------
class ProductHighlightInline(nested_admin.NestedTabularInline):
    model = ProductHighlight
    extra = 1


class ProductSpecificationInline(nested_admin.NestedTabularInline):
    model = ProductSpecification
    extra = 1


# ----------------------------
# Product Admin (MAIN)
# ----------------------------
@admin.register(Product)
class ProductAdmin(nested_admin.NestedModelAdmin):
    list_display = ("id", "name", "category")
    search_fields = ("name", "category__name")
    list_filter = ("category",)

    inlines = [
        ProductSpecificationInline,
        ProductVariantInline,
        ProductHighlightInline,
    ]


# ----------------------------
# Category Admin
# ----------------------------
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}
