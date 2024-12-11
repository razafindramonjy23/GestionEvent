# evenement/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Evenement
from django.http import HttpResponse

# Liste des événements
def liste_evenement(request):
    evenements = Evenement.objects.all()
    return render(request, 'evenement/liste_evenement.html', {'evenements': evenements})

# Détails d'un événement