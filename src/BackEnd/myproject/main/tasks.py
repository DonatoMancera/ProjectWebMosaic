from celery import shared_task
from django.core.mail import send_mail
from .models import Client, Service

@shared_task
def send_weekly_services_email():
    clients = Client.objects.filter(subscribed=True)
    services = Service.objects.all()
    for client in clients:
        service_list = "\n".join([service.name for service in services])
        send_mail(
            'Servicio de actualizacion semanal',
            f'Hola {client.name},\n\nEstos son nuestros servicios:\n{service_list}',
            'from@example.com',
            [client.email],
        )
