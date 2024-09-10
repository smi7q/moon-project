let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mounrains3');
let mountains4 = document.getElementById('mounrains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mounrains7');
let novil = document.querySelector('.novil');

window.onscroll = function () {
    let value = window.scrollY; // Correct usage of window.scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';

    // Set the font size and position of novil
    novil.style.fontSize = value + 'px';
    if (value >= 67) {
        novil.style.fontSize = 67 + 'px'; // Limit the font size to 67px
        novil.style.position = 'fixed'; // Fix novil's position
        if (value >= 400) {
            novil.style.display = 'none'; // Hide novil after scrollY reaches 400
        } else {
            novil.style.display = 'block'; // Show novil again if scrollY is less than 400
        }
    }

    // Change background based on scroll position
    if (value >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)';
    } else {
        document.querySelector('.main').style.background = 'linear-gradient(to top, #200016, transparent)';
    }
};
