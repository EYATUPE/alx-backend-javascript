const { readFile } = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} fileName The path to the CSV data file.
 * @returns {Promise} A promise that resolves when the counting is done.
 */
function countStudents(fileName) {
  const students = {}; // Object to store student names grouped by field
  const fields = {}; // Object to store the count of students in each field
  let length = 0; // Total number of student records

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            
            // Group students by field
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            
            // Count students in each field
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        
        const l = length - 1; // Adjusting for header
        console.log(`Number of students: ${l}`);
        
        // Display the number of students in each field group and their names
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        
        resolve(data); // Resolve the promise with the read data
      }
    });
  });
}

module.exports = countStudents;
