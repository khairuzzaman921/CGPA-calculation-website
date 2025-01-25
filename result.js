<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marks and CGPA Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
    }
    th {
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: auto;
    }
    .form-group {
      margin-bottom: 15px;
    }
    button {
      padding: 10px 20px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .result {
      margin-top: 20px;
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Marks and CGPA Calculator</h1>
    <table id="marksTable">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
          <th>Grade Point</th>
        </tr>
      </thead>
      <tbody id="marksBody">
        <tr>
          <td>Math</td>
          <td><input type="number" min="0" max="100" placeholder="Enter marks" class="marks"></td>
          <td class="grade-point">-</td>
        </tr>
        <tr>
          <td>Science</td>
          <td><input type="number" min="0" max="100" placeholder="Enter marks" class="marks"></td>
          <td class="grade-point">-</td>
        </tr>
        <tr>
          <td>English</td>
          <td><input type="number" min="0" max="100" placeholder="Enter marks" class="marks"></td>
          <td class="grade-point">-</td>
        </tr>
      </tbody>
    </table>
    <button onclick="calculateCGPA()">Calculate CGPA</button>
    <div class="result" id="result"></div>
  </div>

  <script>
    function calculateGradePoint(marks) {
      if (marks >= 90) return 10;
      if (marks >= 80) return 9;
      if (marks >= 70) return 8;
      if (marks >= 60) return 7;
      if (marks >= 50) return 6;
      if (marks >= 40) return 5;
      return 0; // Fail
    }

    function calculateCGPA() {
      const marksElements = document.querySelectorAll('.marks');
      const gradePoints = document.querySelectorAll('.grade-point');
      let totalGradePoints = 0;
      let validSubjects = 0;

      marksElements.forEach((marksElement, index) => {
        const marks = parseFloat(marksElement.value);
        if (!isNaN(marks)) {
          const gradePoint = calculateGradePoint(marks);
          gradePoints[index].textContent = gradePoint;
          totalGradePoints += gradePoint;
          validSubjects++;
        } else {
          gradePoints[index].textContent = '-';
        }
      });

      const cgpa = validSubjects > 0 ? (totalGradePoints / validSubjects).toFixed(2) : 'N/A';
      document.getElementById('result').textContent = `Your CGPA is: ${cgpa}`;
    }
  </script>
</body>
</html>
