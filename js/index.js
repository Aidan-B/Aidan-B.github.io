function scrollToId(id) {    
    window.scrollTo({
        top: document.getElementById(id).offsetTop - document.getElementById('navbar').offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
}

//TODO: there is a bug that means the contact item doesn't get the correct colouring updates.
function updateNavHighlight() {
    let position = document.getElementsByTagName("html")[0].scrollTop;
    let sections = document.getElementsByClassName("section-link");

    for (let element of sections) {
        //have we passed the section yet?
        if (element.offsetHeight + element.offsetTop - document.getElementById('navbar').offsetHeight - (window.innerHeight / 3) > position) { 
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

//Calculate "active" class on nav links
document.onscroll = (event) => {
    updateNavHighlight()
}

window.addEventListener("DOMContentLoaded", function() {
    
    let form = document.getElementById('contactForm')
    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        //TODO: Need to do form validation
        sendContactEmail(form);
    });    

    function sendContactEmail(form) {
        
        let xhr = new XMLHttpRequest();
        let url = "https://formspree.io/xaypwzak"
        let data = new FormData(form)
        
        xhr.open("POST", url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                //Might be cool to hide the button on success
                //TODO: Provide proper user feedback on success/fail
                //button.style = "display: none ";
                console.log(xhr.status, xhr.response, xhr.responseType);
                alert("success");
            } else {
                console.log(xhr.status, xhr.response, xhr.responseType);
                alert("fail, see console for more details");
            }
        };
        console.log(data)
        xhr.send(data);
    }
    updateNavHighlight()

    for (let element of document.getElementsByClassName('contact-card')) {
        element.addEventListener("mouseover", () => {
            element.classList.add("shadow");
        });
        element.addEventListener("mouseout", () => {
            element.classList.remove("shadow");
        });
    }

});