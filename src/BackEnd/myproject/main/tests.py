from django.test import TestCase

from django.test import TestCase
from .models import Service

class ServiceModelTest(TestCase):

    def setUp(self):
        Service.objects.create(name="Web Development", description="Full stack web development services")

    def test_service_creation(self):
        service = Service.objects.get(name="Web Development")
        self.assertEqual(service.name, "Web Development")
        self.assertEqual(service.description, "Full stack web development services")
