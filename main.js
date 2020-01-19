const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

//set the first image opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1))

    //change current image to src on clicked
    current.src = e.target.src;

    //Add fade in class
    current.classList.add('fade-in');



    //Remove fade in class after 6 seconds
    setTimeout(() => current.classList.remove('fade-in'), 600);

    e.target.style.opacity = opacity;
}