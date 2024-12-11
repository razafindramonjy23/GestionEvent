from django.db import models
from django.contrib.auth.models import User

class Type_Evenement(models.Model):
    id_type_evenement = models.AutoField(primary_key=True)
    nom_type_evenement = models.CharField(max_length=50)

class Evenement(models.Model):
    id_evenement = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255)
    type_evenement = models.ForeignKey(Type_Evenement, on_delete=models.CASCADE)
    description = models.TextField()
    nombre_participant = models.PositiveIntegerField()
    date_debut = models.DateField()
    date_fin = models.DateField()
    heure = models.TimeField()
    lieu = models.CharField(max_length=255)
    image_evenement = models.ImageField(upload_to='evenements/')
    
class Inscription(models.Model):
    id_inscription = models.AutoField(primary_key=True)
    utilisateur = models.ForeignKey(User, on_delete=models.CASCADE)
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE)
    est_inscrit = models.BooleanField(default=True)
    date_inscription = models.DateTimeField(auto_now_add=True)