
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from .models import Service, Client, Subscription
from .serializers import ServiceSerializer, ClientSerializer, SubscriptionSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from .forms import ContactForm


class HomeView(TemplateView):
    template_name = 'main/home.html'

class ServicesView(TemplateView):
    template_name = 'main/services.html'

class AboutUsView(TemplateView):
    template_name = 'main/about_us.html'



def contact_us(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            phone_number = form.cleaned_data['phone_number']
            message = form.cleaned_data['message']
            
            full_message = f'Message from {first_name} {last_name} ({email}, {phone_number}):\n\n{message}'
            
            send_mail(
                'Contact Form Submission',
                full_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
            )
            return HttpResponse('Thank you for your message.')
    else:
        form = ContactForm()
    return render(request, 'main/contact_us.html', {'form': form})


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer


