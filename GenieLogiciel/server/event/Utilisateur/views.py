# utilisateur/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Utilisateur

from django.http import HttpResponse

# Liste des utilisateurs
def utilisateur_list(request):
    utilisateurs = Utilisateur.objects.all()
    return render(request, 'utilisateur/utilisateur_list.html', {'utilisateurs': utilisateurs})

