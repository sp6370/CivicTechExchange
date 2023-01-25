# Generated by Django 3.1.14 on 2022-12-01 18:42

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import timezone_field.fields


class Migration(migrations.Migration):

    dependencies = [
        ('civictechprojects', '0060_auto_20220713_0309'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventproject',
            name='is_remote',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='rsvpvolunteerrelation',
            name='is_remote',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name='EventLocationTimeZone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location_name', models.CharField(blank=True, max_length=100)),
                ('address_line_1', models.CharField(blank=True, max_length=200)),
                ('address_line_2', models.CharField(blank=True, max_length=200)),
                ('location_coords', django.contrib.gis.db.models.fields.PointField(blank=True, default='POINT EMPTY', null=True, srid=4326)),
                ('country', models.CharField(blank=True, max_length=100)),
                ('state', models.CharField(blank=True, max_length=100)),
                ('city', models.CharField(blank=True, max_length=100)),
                ('time_zone', timezone_field.fields.TimeZoneField(null=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_time_zones', to='civictechprojects.event')),
            ],
        ),
        migrations.AddField(
            model_name='eventproject',
            name='event_time_zone',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='time_zone_event_projects', to='civictechprojects.eventlocationtimezone'),
        ),
        migrations.AddField(
            model_name='rsvpvolunteerrelation',
            name='time_zone',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='time_zone_volunteers', to='civictechprojects.eventlocationtimezone'),
        ),
    ]
