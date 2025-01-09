from django.shortcuts import render
from django.http import HttpResponse
from .models import Feature

# Create your views here.
def index(request):
    
    feature1 = Feature()
    feature1.id = 0
    feature1.name = 'Fast4'
    feature1.details = 'Our Application is very Fast'

    feature2 = Feature()
    feature2.id = 0
    feature2.name = 'Fast1'
    feature2.details = 'Our Application is very Fast'

    feature3 = Feature()
    feature3.id = 0
    feature3.name = 'Fast2'
    feature3.details = 'Our Application is very Fast'

    feature4 = Feature()
    feature4.id = 0
    feature4.name = 'Fast3'
    feature4.details = 'Our Application is very Fast'

    return render(request,'index.html', {'feature1':feature1, 'feature2':feature2, 'feature3':feature3, 'feature4':feature4})

def counter(request):
    text = request.POST['text']
    number_of_words = len(text.split())
    return render(request, 'counter.html', {'number': number_of_words})