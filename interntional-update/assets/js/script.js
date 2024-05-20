$("#scroll-icon").click(()=>{
    $('html, body').animate({
        scrollTop: $(".info-row").offset().top,
    })
})


const mobileNav = document.querySelector('.mobile-nav ul');

document.querySelector('.mobile-nav i').addEventListener('click', ()=>{
    mobileNav.classList.contains('show') ? mobileNav.classList.remove('show') : mobileNav.classList.add( 'show');

});

scrollReveal().reveal(".info-row")