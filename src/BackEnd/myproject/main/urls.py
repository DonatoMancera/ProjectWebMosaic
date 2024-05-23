from django.urls import path
from .views import HomeView, ServicesView, AboutUsView, contact_us
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, ClientViewSet, SubscriptionViewSet


urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('services/', ServicesView.as_view(), name='services'),
    path('about-us/', AboutUsView.as_view(), name='about_us'),
    path('contact-us/', contact_us, name='contact_us'),
]

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'subscriptions', SubscriptionViewSet)

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('services/', ServicesView.as_view(), name='services'),
    path('contact-us/', contact_us, name='contact_us'),
    path('about-us/', AboutUsView.as_view(), name='about_us'),
    path('api/', include(router.urls)),
]
