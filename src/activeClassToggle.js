export const activeClassToggle = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    let pageLink = window.location.pathname;

    if(pageLink === '/'){
        pageLink = '/index.html';
    }
    pageLink = pageLink.slice(1);

    navLinks.forEach(curLink => {
        const hrefValue = curLink.getAttribute('href');
        if(pageLink === hrefValue){
            curLink.classList.add('active');
        }
    });
};