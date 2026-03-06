
from django.contrib import admin
from .models import (
    Student,
    AcademicInfo,
    StudentInterest,
    StudentFuturePlan,
    StudentAdditionalInfo
)


# ---------------- STUDENT ----------------
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "father_name", "email", "mobile")
    search_fields = ("full_name", "father_name", "email", "mobile")
    list_per_page = 20


# ---------------- ACADEMIC INFO ----------------
@admin.register(AcademicInfo)
class AcademicInfoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "student",
        "college_code",
        "course",
        "academic_year",
        "study_year",
        "cgpa"
    )
    search_fields = ("student__full_name", "college_code", "course")
    list_filter = ("course", "academic_year", "study_year")


# ---------------- STUDENT INTEREST ----------------
@admin.register(StudentInterest)
class StudentInterestAdmin(admin.ModelAdmin):
    list_display = ("id", "student", "reasons", "interests", "skills")
    search_fields = ("student__full_name",)


# ---------------- FUTURE PLAN ----------------
@admin.register(StudentFuturePlan)
class StudentFuturePlanAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "student",
        "plan_after_graduation",
        "abroad_interest",
        "preferred_country",
        "career_goal"
    )
    search_fields = ("student__full_name", "career_goal")
    list_filter = ("abroad_interest",)


# ---------------- ADDITIONAL INFO ----------------
@admin.register(StudentAdditionalInfo)
class StudentAdditionalInfoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "student",
        "internship_completed",
        "internship_interest",
        "certification"
    )
    search_fields = ("student__full_name",)