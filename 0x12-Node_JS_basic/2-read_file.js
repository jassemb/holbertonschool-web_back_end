const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line global-require
    const fs = require('fs');
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
    });
  });
}
const data = fs.readFileSync('database.csv', 'utf8');
const dataSet = data.split('\n').slice(1);
const normalized = dataSet.map((line) => line.split(','))
  .filter((student) => student.length === 4);
const students = normalized.map((student) => ({
  firstname: student[0],
  lastname: student[1],
  age: student[2],
  field: student[3],
}));
const csStudents = students.filter((student) => student.field === 'CS')
  .map((s) => s.firstname);
const sweStudents = students.filter((student) => student.field === 'SWE')
  .map((s) => s.firstname);
console.log(`Number of students: ${students.length}`);
console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

module.exports = countStudents;
