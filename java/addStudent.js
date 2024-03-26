function addStudent() {
    var studentName = prompt("Enter the student's name:");

    if (studentName !== null && studentName.trim() !== "") {
        var studentNames = localStorage.getItem("studentNames");
        if (studentNames) {
            studentNames = JSON.parse(studentNames);
            studentNames.push(studentName);
        } else {
            studentNames = [studentName];
        }
        localStorage.setItem("studentNames", JSON.stringify(studentNames));

        var studentElement = document.createElement("button");
        studentElement.className = "student student-name";

        var checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.className = "student-checkbox";

        var textNode = document.createTextNode(studentName);

        studentElement.appendChild(checkboxElement);
        studentElement.appendChild(textNode);

        var contentElement = document.querySelector(".content");
        contentElement.appendChild(studentElement);

        studentElement.addEventListener("dblclick", function () {
            var confirmDelete = confirm("Are you sure you want to delete this student?");
            if (confirmDelete) {
                var index = studentNames.indexOf(studentName);
                if (index !== -1) {
                    studentNames.splice(index, 1);
                    localStorage.setItem("studentNames", JSON.stringify(studentNames));
                }
                studentElement.remove();
            }
        });
    } else {

    }
}

function clearAllStudents() {
    var contentElement = document.querySelector(".content");
    contentElement.innerHTML = '';
    localStorage.removeItem("studentNames");
}

function loadStudentNames() {
    var studentNames = localStorage.getItem("studentNames");
    if (studentNames) {

        studentNames = JSON.parse(studentNames);
        studentNames.forEach(function(studentName) {
            var studentElement = document.createElement("button");
            studentElement.className = "student student-name"; 
            
            var checkboxElement = document.createElement("input");
            checkboxElement.type = "checkbox";
            checkboxElement.className = "student-checkbox"; 
            
            var textNode = document.createTextNode(studentName);
            
            studentElement.appendChild(checkboxElement);
            studentElement.appendChild(textNode);
            
            var contentElement = document.querySelector(".content");

            contentElement.appendChild(studentElement);
            studentElement.addEventListener("dblclick", function() {
                var confirmDelete = confirm("Are you sure you want to delete this student?");
                if (confirmDelete) {
                    var index = studentNames.indexOf(studentName);
                    if (index !== -1) {
                        studentNames.splice(index, 1);
                        localStorage.setItem("studentNames", JSON.stringify(studentNames));
                    }
                    studentElement.remove();
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", loadStudentNames);

document.getElementById("clearButton").addEventListener("click", clearAllStudents);