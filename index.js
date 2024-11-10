var resumeform = document.getElementById('resumeform');
var resumeoutput = document.getElementById('resumeoutput');
if (resumeform && resumeoutput) {
    resumeform.addEventListener('submit', function (event) {
        var _a;
        event === null || event === void 0 ? void 0 : event.preventDefault();
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var location = document.getElementById('location').value;
        var Education = document.getElementById('Education').value;
        var Skills = document.getElementById('Skills').value;
        var Experience = document.getElementById('Experience').value;
        var imageInput = document.getElementById("image");
        var imagefile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var image = imagefile ? URL.createObjectURL(imagefile) : "";
        var resumeHTML = "\n        <h2><b>Congrats your First Generated!</b></h2>\n\n\n      \n".concat(image
            ? "<img src=\"".concat(image, "\" alt=\"image\" width=\"150px\"  border: 2px solid black;\n    object-fit: cover; height=\"150px\" class=\"image\">")
            : "", "\n      \n        <p><strong>FirstName:</strong> ").concat(firstname, "</p><br>\n        <p><strong>LastName:</strong> ").concat(lastname, "</p><br>\n        <p><strong>Email:</strong> ").concat(email, "</p><br>\n        <p><strong>Phone Number:</strong> ").concat(number, "</p><br>\n        <p><strong>Location:</strong> ").concat(location, "</p><br>\n        <p><strong>Education:</strong> ").concat(Education, "</p><br>\n        <p><strong>Skills:</strong> ").concat(Skills, "</p><br>\n        <p><strong>Experience:</strong> ").concat(Experience, "</p><br>\n   ");
        resumeoutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
