# Generated by Django 4.0.4 on 2022-06-02 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('epic', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='owner',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
