var typed = new Typed('#element', {
    strings: ['Web Developer.', '&amp; a Problem Solver'],
    typeSpeed: 50,
});


let tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname, idname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-links');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    document.getElementById(idname).classList.add('active-links');
    document.getElementById(tabname).classList.add("active-tab");

}



const close = document.getElementsByClassName("fa-solid")[0];
const Sides = document.getElementById("Sidemenu");


function Openmenu() {
    Sides.style.right = "0";

}
function Closemenu() {
    Sides.style.right = "-200px";

}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwFTGpITybbnAKRjDReiLpQi-7SRZf-ybISzLWNSYId7zpAnyeR43nbzGpyyl1iY6lI/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.style.display = "block";
            msg.innerHTML = "Message Sent Sucessfully";
            setTimeout(function () {
                msg.innerHTML = "";
                msg.style.display = "none";
            }, 5000);

            form.reset();

        })
        .catch(error => console.error('Error!', error.message))
})


