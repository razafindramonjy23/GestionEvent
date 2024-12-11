from django.contrib import admin
from django.urls import path
from . import views as v

urlpatterns = [
    # Liste des événements
    path("liste/evenement/", v.liste_evenement, name="liste_evenement"),

    # Ajouter un événement (vue pour afficher le formulaire)
    path("ajouter/evenement/", v.ajouter_evenement_view, name="ajouter_evenement_view"),
    # Ajouter un événement (logiciel pour gérer la soumission)
    path("ajouter_evenement/", v.ajouter_evenement_logic, name="ajouter_evenement"),

    # Modifier un événement
    path("modifier/evenement/<int:id_evenement>/", v.modifier_evenement_view, name="modifier_evenement_view"),
]