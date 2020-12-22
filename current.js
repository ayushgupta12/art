function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  
    );
    }

///////////////////////
//about nav-item
const about = document.querySelector('#about');
const about_item = document.querySelector('#about_item');
const home_item = document.querySelector('#home_item');
const contact = document.querySelector('#contact');
const contact_item = document.querySelector('#contact_item');
/////////////////
document.addEventListener('scroll', function () {
const status = isInViewport(about) ?
    'yes' :
    'no';
if(status == 'yes'){
    about_item.classList.add('current');
    home_item.classList.remove('current');
}
else{
    about_item.classList.remove('current');
    home_item.classList.add('current');
}
}, {
passive: true
});

    
///////////
document.addEventListener('scroll', function () {
    const status = isInViewport(contact) ?
        'yes' :
        'no';
if(status == 'yes'){
    contact_item.classList.add('current');
    about_item.classList.remove('current');
}
else{
    contact_item.classList.remove('current');
}
}, {
passive: true
});

//////////
contact_item.addEventListener('click', () => {
    about_item.classList.remove('current');
});