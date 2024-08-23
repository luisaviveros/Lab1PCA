export const printStudents = (id, name, age, grade, course) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');
    studentCard.innerHTML = `
        <h2>${name}</h2>
        <ul>
            <li>ID: ${id}</li>
            <li>Age: ${age}</li>
            <li>Grade: ${grade}</li>
            <li>Course: ${course}</li>
        </ul>
    `;
    return studentCard;
};
