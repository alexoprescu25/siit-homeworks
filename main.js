const reqField = document.querySelectorAll('.js-required');
const radio = document.querySelectorAll('.js-radio');
const first = document.querySelector('.first');
document.querySelector('form').addEventListener('submit', submit);



function submit(e) {


    for(let i = 0; i < reqField.length; i++) {
        const field  = reqField[i];
    if(field.value === '') {
        console.warn("Nu s-a completat campul!: ", field.name);
        field.classList.add('error');
        field.addEventListener('change',
        () => {
            field.classList.remove('error');
        },
        );
        e.preventDefault();
    }
}

    if(!radio[0].checked && !radio[1].checked) {
        const parent = radio[0].parentElement;

        console.warn("Nu s-a completat sexul!")
        parent.classList.add('error');

        parent.addEventListener('change',
        () => {
            parent.classList.remove('error');
        },
        );
    }
    
    const valoare = first.value;
    console.log(valoare);
}

function showSuccessMessage() {
    if(!document.location.search === '') {
        return;
    }

    const p = document.createElement('p');
    p.classList.add('success-message');

    let x = window.location.search.substring(10).split("=");
    x = x[1].split("&")[0];

    p.innerHTML = 'Thank you for contacting us, ' + x;

    // let x = document.location.search.substring(5).split("=");
    // console.log(x[1].split("")[0]);

    const form = document.querySelector('form');
    form.prepend(p);

    console.log('Success!');

    setTimeout(hideSuccessMessage, 5000);

}

window.addEventListener('DOMContentLoaded', showSuccessMessage);
window.addEventListener('DOMContentLoaded', console.log('DOM Loaded'));

function hideSuccessMessage() {
    document.querySelector('.success-message').classList.add('fade-out');
}



const buttonSubmit = document.querySelector('.js-submit');
buttonSubmit.addEventListener('click', submit);