const body = document.body;

function DarkMode() {
    
    body.classList.toggle("dark-mode");

    const icon = document.querySelector(".icon");

    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } 
    
    else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}