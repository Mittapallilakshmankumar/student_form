


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer, AcademicInfoSerializer,StudentInterestSerializer,StudentFuturePlanSerializer,StudentAdditionalInfoSerializer


class StudentCreateView(APIView):

    def post(self, request):

        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():

            student = serializer.save()

            return Response(
                {
                    "message": "Student data saved successfully",
                    "student_id": student.id,
                    "data": serializer.data
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            {
                "message": "Validation Error",
                "errors": serializer.errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )

class AcademicInfoCreateView(APIView):

    def post(self, request):

        serializer = AcademicInfoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "message": "Academic data saved",
                "data": serializer.data
            })

        # show real error
        return Response({
            "message": "Validation Error",
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

class StudentInterestCreateView(APIView):

    def post(self, request):

        serializer = StudentInterestSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "message": "Interest data saved",
                "data": serializer.data
            })

        return Response(serializer.errors, status=400)
    


class StudentFuturePlanCreateView(APIView):

    def post(self, request):

        serializer = StudentFuturePlanSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "message": "Future plan saved",
                "data": serializer.data
            })

        return Response(serializer.errors, status=400)
    
class StudentAdditionalInfoCreateView(APIView):

    def post(self, request):

        serializer = StudentAdditionalInfoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({
                "message": "Additional info saved",
                "data": serializer.data
            })

        return Response(serializer.errors, status=400)