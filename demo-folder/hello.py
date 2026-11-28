
# Simple Student Grade Calculator

def calculate_average(grades):
    total = sum(grades)
    average = total / len(grades)
    return average


def get_grade_status(average):
    if average >= 90:
        return "Excellent"
    elif average >= 75:
        return "Passed"
    else:
        return "Failed"


# Student information
student_name = "John"
student_grades = [85, 92, 78, 88, 95]

# Calculate results
average = calculate_average(student_grades)
status = get_grade_status(average)

# Display results
print("Student:", student_name)
print("Grades:", student_grades)
print("Average:", round(average, 2))
print("Status:", status)
