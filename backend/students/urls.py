from django.urls import path
from .views import StudentCreateView,AcademicInfoCreateView,StudentInterestCreateView,StudentFuturePlanCreateView,StudentAdditionalInfoCreateView


urlpatterns = [

    path('students/', StudentCreateView.as_view(), name='student-create'),
     path('academic/', AcademicInfoCreateView.as_view()),
     path('interest/', StudentInterestCreateView.as_view()),
     path('future-plan/', StudentFuturePlanCreateView.as_view(), name='future_plan'),
     path('additional-info/', StudentAdditionalInfoCreateView.as_view(), name='additional_info'),


]