document.getElementById("menu").addEventListener("click", (e) => {
  document.getElementById("navbar").style.display = "initial"
  document.getElementById("navbar").classList.add("navbar");
});

document.getElementById("cross").addEventListener("click", (e) => {
    document.getElementById("navbar").classList.remove("navbar");
    document.getElementById("navbar").style.display = "none"
  });
  
  document.querySelectorAll('.mainHeader a').forEach(link => {
    link.addEventListener('click', (e) => {
      let targetId = e.target.getAttribute('href');
      let targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault(); // Prevent the default navigation behavior
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
      document.getElementById("navbar").classList.remove("navbar");
      document.getElementById("navbar").style.display = "none";
    });
  });
  