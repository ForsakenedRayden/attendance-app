document.addEventListener("DOMContentLoaded", function() {
    var studentElements = document.querySelectorAll(".student");
    studentElements.forEach(function(studentElement) {
        studentElement.addEventListener("dblclick", function() {
            var confirmDelete = confirm("Are you sure you want to delete this student?");
            if (confirmDelete) {
                studentElement.remove();
            }
        });
    });
});