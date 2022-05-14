

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