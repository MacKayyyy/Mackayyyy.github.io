// Function to display the result of the form submission
function displayResult() {
    const resultContainer = document.getElementById('result-container');
    const resultDiv = document.getElementById('result');
    
    // Gather form data
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0];
    const caption = document.getElementById('caption').value;
    const personalBackground = document.getElementById('personal-background').value;
    const professionalBackground = document.getElementById('professional-background').value;
    const academicBackground = document.getElementById('academic-background').value;
    const webDevelopment = document.getElementById('web-development').value;
    const computerPlatform = document.getElementById('computer-platform').value;
    
    // Gather courses
    const courses = [...document.querySelectorAll('.course')].map((course) => course.value).filter((course) => course);
    
    const funnyThing = document.getElementById('funny-thing').value;
    const anythingElse = document.getElementById('anything-else').value;

    // Format result
    resultDiv.innerHTML = `
        <h4>Name: ${name}</h4>
        <h4>Mascot: ${mascot}</h4>
        <h4>Image:</h4>
        <img src="${URL.createObjectURL(image)}" alt="${caption}" style="width: 200px;">
        <p>Caption: ${caption}</p>
        <h4>Personal Background:</h4>
        <p>${personalBackground}</p>
        <h4>Professional Background:</h4>
        <p>${professionalBackground}</p>
        <h4>Academic Background:</h4>
        <p>${academicBackground}</p>
        <h4>Background in Web Development:</h4>
        <p>${webDevelopment}</p>
        <h4>Primary Computer Platform:</h4>
        <p>${computerPlatform}</p>
        <h4>Courses Currently Taking:</h4>
        <p>${courses.join(', ')}</p>
        <h4>Funny Thing:</h4>
        <p>${funnyThing}</p>
        <h4>Anything Else:</h4>
        <p>${anythingElse}</p>
    `;
    
    // Hide form and show result
    document.getElementById('intro-form').style.display = 'none';
    resultContainer.style.display = 'block';
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission
    const inputs = document.querySelectorAll('#intro-form input[required], #intro-form textarea[required]');
    for (const input of inputs) {
        if (!input.value) {
            alert("Please fill in all required fields.");
            return false;
        }
    }
    displayResult();
}

// Function to add a course input field
function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.className = 'course';
    courseInput.placeholder = 'Enter a course';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = () => courseContainer.removeChild(courseInput);

    courseContainer.appendChild(courseInput);
    courseContainer.appendChild(deleteButton);
}

// Function to reset the form
function resetForm() {
    document.getElementById('intro-form').reset();
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('intro-form').style.display = 'block';
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners
    const form = document.getElementById('intro-form');
    form.addEventListener('submit', validateForm);
    
    const addCourseButton = document.getElementById('add-course-button');
    addCourseButton.addEventListener('click', addCourse);

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetForm);
});
