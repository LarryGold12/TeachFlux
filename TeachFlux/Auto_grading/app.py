from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import csv
import os
from AutoGradeSystem import AutoGradeSystem  # Import the class

app = Flask(__name__, static_folder='frontend')
CORS(app)  # Enable CORS for all routes
grade_system = AutoGradeSystem(None)  # Initialize without Tkinter root for API use

@app.route('/', methods=['GET'])
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/add_grade', methods=['POST'])
def add_grade():
    data = request.json
    name = data.get('name')
    score = float(data.get('score'))
    
    try:
        if not (0 <= score <= 100):
            return jsonify({'error': 'Score must be between 0 and 100'}), 400
        if not name:
            return jsonify({'error': 'Name cannot be empty'}), 400
            
        grade = grade_system.calculate_grade(score)
        grade_system.grades.append({'name': name, 'score': score, 'grade': grade})
        
        # Update average
        if grade_system.grades:
            avg = sum(entry['score'] for entry in grade_system.grades) / len(grade_system.grades)
        else:
            avg = 'N/A'
            
        return jsonify({
            'message': 'Grade added',
            'average': f"{avg:.2f}" if avg != 'N/A' else 'N/A',
            'grades': [{'name': g['name'], 'score': g['score'], 'grade': g['grade']} for g in grade_system.grades]
        })
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

@app.route('/save_to_csv', methods=['POST'])
def save_to_csv():
    if not grade_system.grades:
        return jsonify({'warning': 'No grades to save'}), 400
        
    try:
        with open('grades.csv', 'w', newline='') as file:
            writer = csv.DictWriter(file, fieldnames=['name', 'score', 'grade'])
            writer.writeheader()
            writer.writerows(grade_system.grades)
        return jsonify({'message': 'Grades saved to grades.csv'})
    except Exception as e:
        return jsonify({'error': f'Failed to save: {str(e)}'}), 500

@app.route('/clear_all', methods=['POST'])
def clear_all():
    grade_system.grades = []
    return jsonify({'message': 'All grades cleared'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)