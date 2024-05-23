from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Proyecto.settings')

app = Celery('Proyecto')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()


app.conf.beat_schedule = {
    'send-weekly-email': {
        'task': 'main.tasks.send_weekly_services_email',
        'schedule': crontab(day_of_week=1, hour=8, minute=0),
    },
}

