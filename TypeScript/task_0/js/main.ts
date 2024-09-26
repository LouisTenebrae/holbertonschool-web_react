interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}
let student1: Student
let student2: Student
const studentList: Student[] = [student1, student2]

function renderTable(students: Student[]) {
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    headerFirstName.textContent = "First Name";
    const headerLocation = document.createElement("th");
    headerLocation.textContent = "Location";
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);

    students.forEach(student => {
        const row = document.createElement("tr");
        
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        
        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    document.body.appendChild(table);
}

renderTable(studentList);