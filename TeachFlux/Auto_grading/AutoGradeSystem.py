import csv
import os

class AutoGradeSystem:
    def __init__(self, root=None):  # Allow None for non-GUI use
        self.root = root
        self.grade_scale = {
            80: 'A',
            70: 'B',
            55: 'C',
            40: 'D',
            0: 'F'
        }
        self.grades = []

    def calculate_grade(self, score):
        for threshold, grade in sorted(self.grade_scale.items(), reverse=True):
            if score >= threshold:
                return grade
        return 'F'