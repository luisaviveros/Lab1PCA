export const calculateMeanGrade = (students) => {
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return total / students.length;
};
