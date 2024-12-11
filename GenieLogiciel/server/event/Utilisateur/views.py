# utilisateur/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Utilisateur, Type_Utilisateur

from django.http import HttpResponse

# Liste des utilisateurs
def liste_utilisateur(request):
    utilisateurs = Utilisateur.objects.all()
    return render(request, 'utilisateur/liste_utilisateur.html', {'utilisateurs': utilisateurs})

