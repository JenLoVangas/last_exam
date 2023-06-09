import { addInputs, addAttributes, addButtons, form } from "../form/form.js";
import { savePlayer } from "../../commons/requests.js";

const heading = document.createElement("h2");
heading.textContent = "Registration to tournament!";
form.appendChild(heading);

addInputs();
addAttributes();
addButtons();

const handleFormSubmit = async (form) => {
    const player = {
        firstname: form.firstnameInput.value,
        lastname: form.lastnameInput.value,
        email: form.emailInput.value,
        personalCode: form.personalCodeInput.value,
        chessStartDate: form.startDateInput.value,
    };
    await savePlayer(player);
    window.history.back();
};

const submitButton = document.getElementById("addSubmitButton");
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    if (form.checkValidity()) {
        await handleFormSubmit(form);
    } else {
        form.reportValidity();
    }
});

const cancelButton = document.getElementById("addCancelButton");
cancelButton.addEventListener("click", async (e) => {
    e.preventDefault();
    window.history.back();
});