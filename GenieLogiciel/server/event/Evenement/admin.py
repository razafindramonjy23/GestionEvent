from django.contrib import admin

from .models import Evenement, Inscription, Type_Evenement

# Register your models here.

admin.site.register(Evenement)
admin.site.register(Inscription)
admin.site.register(Type_Evenement)