function scrollToId(id) {    
    window.scrollTo({
        top: document.getElementById(id).offsetTop - navHeight,
        left: 0,
        behavior: 'smooth'
    });
}

//Calculate "active" class on nav links
document.onscroll = (event) => {
    let position = document.getElementsByTagName("html")[0].scrollTop;
    let sections = document.getElementsByClassName("section-link");

    for (let element of sections) {
        if (element.offsetHeight + element.offsetTop - navHeight > position) { //just saying if we have not passed the section yet
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

//Account for height of navbar
const navHeight = document.getElementById('navbar').offsetHeight;
document.getElementsByTagName("body")[0].setAttribute("style", "padding-top:"+navHeight+"px;");
