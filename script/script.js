document.getElementById("menu").addEventListener("click", (e) => {
  document.getElementById("navbar").style.display = "initial"
  document.getElementById("navbar").classList.add("navbar");
});

document.getElementById("cross").addEventListener("click", (e) => {
    document.getElementById("navbar").classList.remove("navbar");
    document.getElementById("navbar").style.display = "none"
  });
  