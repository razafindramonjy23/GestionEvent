# evenement/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Evenement, Type_Evenement
from django.http import HttpResponse

# Liste des événements
def liste_evenement(request):
    evenements = Evenement.objects.all()
    return render(request, 'evenement/liste_evenement.html', {'evenements': evenements})

def ajouter_evenement_view(request):
    types = Type_Evenement.objects.all()
    return render(request, 'evenement/ajouter_evenement.html', {'types' : types})

def ajouter_evenement_logic(request):
    if request.method == "POST":
        # Récupérer les données du formulaire
        nom = request.POST.get('titre')
        type_evenement_id = request.POST.get('type_evenement')
        description = request.POST.get('description')
        nombre_participant = request.POST.get('nombre_participant')
        date_debut = request.POST.get('date_debut')
        date_fin = request.POST.get('date_fin')
        heure = request.POST.get('heure')
        lieu = request.POST.get('lieu')
        image_evenement = request.FILES.get('image_evenement')  # Récupère l'image uploadée

        # Trouver le type d'événement correspondant
        type_evenement = Type_Evenement.objects.get(id_type_evenement=type_evenement_id)

        # Créer et sauvegarder l'événement
        event = Evenement(
            nom=nom,
            type_evenement=type_evenement,
            description=description,
            nombre_participant=nombre_participant,
            date_debut=date_debut,
            date_fin=date_fin,
            heure=heure,
            lieu=lieu,
            image_evenement=image_evenement
        )
        event.save()

        # Rediriger ou afficher un message de succès
        return redirect('liste_evenement')

    types = Type_Evenement.objects.all()
    return render(request, 'ajouter_evenement.html', {'types': types})


def modifier_evenement_view(request, id_evenement):
    evenement = get_object_or_404(Evenement, id_evenement=id_evenement)
    types = Type_Evenement.objects.all()

    if request.method == "POST":
        # Mise à jour des données
        evenement.nom = request.POST.get("nom")
        evenement.type_evenement_id = request.POST.get("type_evenement")
        evenement.description = request.POST.get("description")
        evenement.nombre_participant = request.POST.get("nombre_participant")
        evenement.date_debut = request.POST.get("date_debut")
        evenement.date_fin = request.POST.get("date_fin")
        evenement.heure = request.POST.get("heure")
        evenement.lieu = request.POST.get("lieu")
        
        if "image_evenement" in request.FILES:
            evenement.image_evenement = request.FILES["image_evenement"]

        evenement.save()
        return redirect("liste_evenement")

    return render(request, "evenement/modifier_evenement.html", {"evenement": evenement, "types": types})

'''def modifier_evenement(request, evenement_id):
    
    evenement = get_object_or_404(Evenement, id=evenement_id)

    if request.method == "POST":
        # Mise à jour des champs avec les données soumises
        evenement.nom = request.POST.get('titre')
        evenement.type_evenement = Type_Evenement.objects.get(id_type_evenement=request.POST.get('type_evenement'))
        evenement.description = request.POST.get('description')
        evenement.nombre_participant = request.POST.get('nombre_participant')
        evenement.date_debut = request.POST.get('date_debut')
        evenement.date_fin = request.POST.get('date_fin')
        evenement.heure = request.POST.get('heure')
        evenement.lieu = request.POST.get('lieu')

        if 'image_evenement' in request.FILES:
            evenement.image_evenement = request.FILES['image_evenement']

        evenement.save()  # Sauvegarder les modifications
        return redirect('liste_evenements')  # Rediriger vers la liste des événements

    # Charger les types d'événements pour le formulaire
    types = Type_Evenement.objects.all()

    # Renvoyer le formulaire pré-rempli
    return render(request, 'modifier_evenement.html', {'evenement': evenement, 'types': types})
    '''