# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-08-15 21:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('democracylab', '0005_auto_20190503_2237'),
        ('civictechprojects', '0028_auto_20190722_2239'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted', models.BooleanField(default=False)),
                ('event_agenda', models.CharField(blank=True, max_length=4000)),
                ('event_date_created', models.DateTimeField(null=True)),
                ('event_date_end', models.DateTimeField()),
                ('event_date_modified', models.DateTimeField(auto_now_add=True, null=True)),
                ('event_date_start', models.DateTimeField()),
                ('event_description', models.CharField(blank=True, max_length=4000)),
                ('event_location', models.CharField(blank=True, max_length=200)),
                ('event_name', models.CharField(max_length=200)),
                ('event_rsvp_url', models.CharField(blank=True, max_length=2083)),
                ('event_short_description', models.CharField(blank=True, max_length=140)),
                ('is_searchable', models.BooleanField(default=False)),
                ('is_created', models.BooleanField(default=True)),
                ('event_creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_creator', to='democracylab.Contributor')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted', models.BooleanField(default=False)),
                ('group_date_created', models.DateTimeField(null=True)),
                ('group_date_modified', models.DateTimeField(auto_now_add=True, null=True)),
                ('group_description', models.CharField(blank=True, max_length=4000)),
                ('group_location', models.CharField(blank=True, max_length=200)),
                ('group_name', models.CharField(max_length=200)),
                ('group_short_description', models.CharField(blank=True, max_length=140)),
                ('is_searchable', models.BooleanField(default=False)),
                ('is_created', models.BooleanField(default=True)),
                ('group_creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_creator', to='democracylab.Contributor')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ProjectRelationship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('relationship_event', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='relationships', to='civictechprojects.Event')),
                ('relationship_group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='relationships', to='civictechprojects.Group')),
                ('relationship_project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='relationships', to='civictechprojects.Project')),
            ],
        ),
        migrations.AddField(
            model_name='projectfile',
            name='file_event',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='files', to='civictechprojects.Event'),
        ),
        migrations.AddField(
            model_name='projectfile',
            name='file_group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='files', to='civictechprojects.Group'),
        ),
        migrations.AddField(
            model_name='projectlink',
            name='link_group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='links', to='civictechprojects.Group'),
        ),
    ]
