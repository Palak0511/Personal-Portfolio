document.querySelector(".cross").style.display = "none";

document.querySelector(".hamburger").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  const ham = document.querySelector(".ham");
  const cross = document.querySelector(".cross");
  
  sidebar.classList.toggle("sidebarGo");

  if (sidebar.classList.contains("sidebarGo")) {
    ham.style.display = "inline";
    cross.style.display = "none";
  } else {
    ham.style.display = "none";
    setTimeout(() => {
      cross.style.display = "inline";
    }, 300); // Adjust the timeout to match the CSS transition duration
  }
});

