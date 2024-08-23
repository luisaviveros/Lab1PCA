import students from './data/students.js';
import { printStudents } from './utils/PrintStudents.js';
import { calculateMeanGrade } from './utils/calculateMeanGrade.js';
import { organizeByCourse } from './utils/organizeByCourse.js';
import { filterHighGrade } from './utils/filterHighGrade.js';
import { orderByName } from './utils/orderByName.js';

const container = document.querySelector('.student-container');

const orderedStudents = orderByName(students);
orderedStudents.forEach(student => {
    const studentElement = printStudents(student.id, student.name, student.age, student.grade, student.course);
    container.appendChild(studentElement);
});

const meanGrade = calculateMeanGrade(students);
const meanElement = document.createElement('p');
meanElement.textContent = `Average Grade: ${meanGrade}`;
container.appendChild(meanElement);
