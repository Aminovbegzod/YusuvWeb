// Dark Mode Toggle
const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => { document.body.classList.toggle('light-mode'); });

// Mobile Menu Toggle
const menuIcon = document.querySelector('.mobile-menu-icon');
const navUl = document.querySelector('nav ul');
menuIcon.addEventListener('click', () => { navUl.classList.toggle('active'); });

// Words Animation
const words = ["Bloger","Youtuber","Developer"];
const spans = [document.getElementById('word1'),document.getElementById('word2'),document.getElementById('word3')];
let index = 0;
function showWord(){
    spans.forEach((s,i)=>s.style.display=(i===index)?"inline":"none");
    index=(index+1)%words.length;
}
showWord();
setInterval(showWord,1500);

// Scroll Animation for Cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('show'); }
    });
},{ threshold:0.2 });
cards.forEach(card=>observer.observe(card));
