// Optional: Handle dropdown interactions dynamically
document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
