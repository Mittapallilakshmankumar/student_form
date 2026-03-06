from rest_framework import serializers
from .models import Student, AcademicInfo,StudentInterest,StudentFuturePlan,StudentAdditionalInfo



class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'


class AcademicInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = AcademicInfo
        fields = '__all__'


class StudentInterestSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentInterest
        fields = '__all__'

class StudentFuturePlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentFuturePlan
        fields = '__all__'

class StudentAdditionalInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentAdditionalInfo
        fields = '__all__'