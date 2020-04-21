function scrollToId(id) {    
    window.scrollTo({
        top: document.getElementById(id).offsetTop - document.getElementById('navbar').offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
}

//Calculate "active" class on nav links
document.onscroll = (event) => {
    let position = document.getElementsByTagName("html")[0].scrollTop;
    let sections = document.getElementsByClassName("section-link");

    for (let element of sections) {
        //have we passed the section yet?
        if (element.offsetHeight + element.offsetTop - document.getElementById('navbar').offsetHeight > position) { 
            let navLinks = document.getElementsByClassName('nav-item');
            for (let link of navLinks) {
                if (link.id == element.id+"-nav"){
                    
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
            return;
        }
    }
}

for (let element of document.getElementsByClassName('contact-card')) {
    element.addEventListener("mouseover", () => {
        element.classList.add("shadow");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("shadow");
    });
}
