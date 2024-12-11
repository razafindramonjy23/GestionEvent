from django.db import models

# Create your models here.
class Type_Utilisateur(models.Model):
    id_type_utilisateur = models.AutoField(primary_key=True)
    type_utilisateur = models.CharField(max_length=50)
    role_utilisateur = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)


    def get_id_type_utilisateur(self):
        return self.id_type_utilisateur
    
    def get_type_utilisateur(self):
        return self.type_utilisateur
    
    def get_role_utilisateur(self):
        return self.role_utilisateur
    
    def set_type_utilisateur(self, type_utilisateur):
        self.type_utilisateur = type_utilisateur

    def set_role_utilisateur(self, role_utilisateur):
        self.role_utilisateur = role_utilisateur

class Utilisateur(models.Model):
    id_utilisateur = models.AutoField(primary_key=True)
    type_utilisateur = models.ForeignKey(Type_Utilisateur, on_delete=models.CASCADE)
    nom_utilisateur = models.CharField(max_length=100)
    bio_utilisateur = models.CharField(max_length=200)
    photo_utilisateur = models.ImageField(upload_to="utilisateurs")
