"""
URL configuration for event project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path,include
from . import views as v

urlpatterns = [
        # Liste des événements
    path("liste_utilisateur", v.liste_utilisateur, name="liste_utilisateur"),

    # Ajouter un événement (vue pour afficher le formulaire)
    #path("ajouter/utilisateur/", v.ajouter_utilisateur_view, name="ajouter_utilisateur_view"),

    # Ajouter un événement (logiciel pour gérer la soumission)
    #path("ajouter_utilisateur/", v.ajouter_utilisateur_logic, name="ajouter_utilisateur"),
]