
class Personal {
    constructor (name, role) {
      this.name = name;
      this.role = role;
    }

}

// DOM elements

const createPersonalForm = document.querySelector('.create--personal__form');
const personNameInput = document.querySelector('.person--name');
const personRoleOptions = document.querySelector('.person--role');
const closeCreateFormButton = document.querySelector('.btn.close-create-form');
// console.log(createPersonalForm, personNameInput, personRoleOptions, closeCreateFormButton)