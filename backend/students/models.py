from django.db import models

class Student(models.Model):

    full_name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    mobile = models.CharField(max_length=10)

    def __str__(self):
        return self.full_name
class AcademicInfo(models.Model):

    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    college_code = models.CharField(max_length=50)
    course = models.CharField(max_length=100)
    academic_year = models.CharField(max_length=20)
    study_year = models.CharField(max_length=20)
    cgpa = models.CharField(max_length=20)

    def __str__(self):
        return self.course

class StudentInterest(models.Model):

    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    reasons = models.JSONField()
    interests = models.JSONField()
    skills = models.JSONField()

    def __str__(self):
        return str(self.student)

class StudentFuturePlan(models.Model):

    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    plan_after_graduation = models.CharField(max_length=100)
    abroad_interest = models.CharField(max_length=20)
    preferred_country = models.CharField(max_length=50, blank=True, null=True)
    career_goal = models.CharField(max_length=100)

    def __str__(self):
        return str(self.student)



class StudentAdditionalInfo(models.Model):

    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    internship_completed = models.CharField(max_length=10)
    internship_interest = models.CharField(max_length=10)
    certification = models.CharField(max_length=10)

    def __str__(self):
        return str(self.student)