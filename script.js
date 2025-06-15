// Example JavaScript for handling form data (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const educationForm = document.getElementById("education-form");
    const internshipForm = document.getElementById("internship-form");

    educationForm.addEventListener("change", () => {
        const data = new FormData(educationForm);
        console.log("Education Data:", Object.fromEntries(data.entries()));
    });

    internshipForm.addEventListener("change", () => {
        const data = new FormData(internshipForm);
        console.log("Internship Data:", Object.fromEntries(data.entries()));
    });

    // Add more interactivity as needed, like saving to localStorage
});