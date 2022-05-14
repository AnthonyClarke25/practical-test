const locations = [{
        title: 'City of york',
        image: 'images\card-1.jpg',
        description: 'Go See the old Cathedral city. Our guide Mollie will be happy to tell you stories of the old streets on one of out walking tours',
        showButton: true
    }, {
        title: null,
        image: 'images\card-2.jpg',
        description: null,
        showButton: false
    },
    {
        title: null,
        image: 'images\card-3.jpg',
        description: null,
        showButton: false
    },
    {
        title: null,
        image: 'images\card-4.jpg',
        description: null,
        showButton: false
    },
    {
        title: null,
        image: 'images\card-5.jpg',
        description: null,
        showButton: false
    },
    {
        title: 'Cornwall',
        image: 'images\card-6.jpg',
        description: 'Go take a dip in the bliss that is the English Sea, and enjoy all Cornwall has to offer',
        showButton: true
    }
]

const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".location__details__container__btn");
const closeModal = document.querySelectorAll(".modal__form__close");

openModal.forEach(button => {
    button.addEventListener("click", () => {
        modal.showModal();
    })
});

closeModal.forEach(button => {
    button.addEventListener("click", () => {
        modal.close();
    })
});

function nameFunction(input) {
    let elementValue;
    if (input) {
        if (input.value.length > 0) {
            elementValue = input.value;
        } else {
            elementValue = '[enter name]';
        }

        document.querySelector(".modal__form__title__name").innerHTML = elementValue;
    }
}