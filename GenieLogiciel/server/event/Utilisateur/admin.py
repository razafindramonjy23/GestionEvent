from django.contrib import admin
from .models import Utilisateur, Type_Utilisateur
# Register your models here.


admin.site.register(Utilisateur)
admin.site.register(Type_Utilisateur)
