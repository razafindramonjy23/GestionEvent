# Generated by Django 5.1.1 on 2024-12-11 15:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Evenement", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="evenement",
            name="type_evenement",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="Evenement.type_evenement",
            ),
            preserve_default=False,
        ),
    ]
