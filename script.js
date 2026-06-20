const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const screen=document.getElementById("welcome-screen");

const music=document.getElementById("music");

screen.addEventListener("click",()=>{

music.play();

screen.style.display="none";

});