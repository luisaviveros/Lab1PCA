export const organizeByCourse = (students) => {
    return students.reduce((courses, student) => {
        if (!courses[student.course]) {
            courses[student.course] = [];
        }
        courses[student.course].push(student);
        return courses;
    }, {});
};
