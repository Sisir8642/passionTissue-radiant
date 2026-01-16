from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name
    

class Product(models.Model):
    id = models.CharField(max_length=200, primary_key=True)  # same as your TS id
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    short_desc = models.TextField()
    description = models.TextField()
    image = models.ImageField(upload_to="products/")
    
    def __str__(self):
        return self.name

class ProductHighlight(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="highlights")
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text

class ProductSpecification(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="specifications")
    pack = models.CharField(max_length=100, blank=True, null=True)
    sheets = models.CharField(max_length=100, blank=True, null=True)
    pulls = models.CharField(max_length=100, blank=True, null=True)
    ply = models.CharField(max_length=50, blank=True, null=True)
    color = models.CharField(max_length=50, blank=True, null=True)


class ProductVariant(models.Model):
    id = models.CharField(max_length=200, primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="variants")
    label = models.CharField(max_length=100)
    rolls = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.product.name} - {self.label}"


class VariantImage(models.Model):
    variant = models.ForeignKey(
        ProductVariant,
        on_delete=models.CASCADE,
        related_name="images"
    )
    image = models.ImageField(upload_to="variants/")

    def __str__(self):
        return f"{self.variant.label} image"

