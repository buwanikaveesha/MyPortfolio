/*function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}*/

function opentab(tabname) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var tablinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}


/*------------------toggle icon navbar------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*------------------Scroll section active link------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /*------------------sticky navbar------------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
   /*------------------remove toggle icon and navbar------------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

 /*------------------scroll reveal------------------*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

