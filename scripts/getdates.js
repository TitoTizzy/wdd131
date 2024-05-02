// Get current year and update HTML content
function displayCurrentYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Get last modified date of the document and update HTML content
function displayLastModifiedDate() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified;
}

// Call the functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    displayCurrentYear();
    displayLastModifiedDate();
});