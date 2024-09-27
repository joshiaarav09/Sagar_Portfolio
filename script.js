function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// New toggleDetails function for project read more functionality
function toggleDetails(projectId) {
  const details = document.getElementById(projectId);
  if (details.style.display === "none") {
    details.style.display = "block"; // Show the details
  } else {
    details.style.display = "none"; // Hide the details
  }
}