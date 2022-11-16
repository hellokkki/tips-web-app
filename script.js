
// // alphabet

  


// // DOM elements
const firstSection = document.querySelector('.section');
const createPersonalBlock = document.querySelector('.block.block--create-personal');
const createOnePersonBlock = document.querySelector('.block.block--create-personal__once.hidden');


const createPersonalFormMain = document.querySelector('.form--create-personal__main')
const createPersonalFormOnce = document.querySelector('.form--create-personal__once');
// const personNameInput = document.querySelector('.person--name');
// const personRoleOptions = document.querySelector('.person--role');

const closeCreateFormButton = document.querySelector('.btn.btn--close-create-form');
const addOnePersonButton = document.querySelector('.btn.btn--add-one-person');

//classes

class Person {


  constructor(name, role) {
    
    this.name = name;
    this.role = role;
  }

  nameValidation(name) {
   var reg = /^[a-z ,.'-]+$/i;
   if (reg.test(String(name).toLocaleLowerCase()))
   return name;
   if (!reg.test(String(name).toLocaleLowerCase())) {
     alert('only humans english names')
     return
   };
  }


}




// class Restaraunt extends Person {
//   officiants = new Array();
//   barmen = new Array();
//   hostes = new Array();

  // constructor() {
  //   super();
  //   createPersonalFormMain.addEventListener('submit', this._createPerson.bind(this));
  //   document.addEventListener('DOMContentLoaded', this.renderCreatePersonalForm);
  //   closeCreateFormButton.addEventListener('click',  this.сloseCreatePersonalForm);
  //   addOnePersonButton.addEventListener('click', this._addOnePerson);

  // }
 
  // _createPerson(e) {
  //   e.preventDefault();
  // const name = personNameInput.value;
  // const role = personRoleOptions.value;
  // let person = this.person;

  // this.person = new Person(name, role);
  // console.log(person);
    
  //   const sorting = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // this.sortPersonal(this.person)
  //       if (this.person.role === 'officiant') this.officiants.push(this.person);
  //       if (this.person.role === 'hostes') this.hostes.push(this.person);
  //       if (this.person.role === 'barmen') this.barmen.push(this.person);
  //       resolve()
  //     }, 2000)
  //   });

  // sorting.then(() => {
  //    console.log(this.officiants);
  //    console.log(this.hostes);
  //   console.log(this.barmen);
  //   })

  // }
  
  // renderCreatePersonalForm() {
  //   createPersonalBlock.classList.remove('hidden');
  // }

  // сloseCreatePersonalForm() {
  //   createPersonalBlock.classList.add('hidden');
  // }

  // _addOnePerson() {
  //   createOnePersonBlock.classList.remove('hidden');

  //   const addOneNew = new Promise((resolve, reject) => {
  //    setTimeout(() => {
  //     createPersonalForm.addEventListener('submit', this._createPerson);
  //     resolve();
  //    }, 5000)
  //   })
  //   addOneNew.then((result) => {
  //     createOnePersonBlock.classList.add('hidden');
  // }, (error) => {
  //    alert(`${error} fuck up`)
  // })
  // }

  // }

  class Restaraunt extends Person {
    constructor() {
      super();
      document.addEventListener('DOMContentLoaded', this._openCreatePersonalForm);
      closeCreateFormButton.addEventListener('click', this._closeCreatePersonalForm);
      createPersonalFormMain.addEventListener('submit', this._createPerson.bind(this));
      addOnePersonButton.addEventListener('click', this._createPersonOnce);
    }

    _openCreatePersonalForm() {
     createPersonalBlock.classList.remove('hidden');
    }

    _closeCreatePersonalForm() {
      createPersonalBlock.classList.add('hidden');
    }

    _createPerson(e) {
      
        e.preventDefault();

        const name = document.querySelector('.person-name').value;
        const validName = this.nameValidation(name);
        // if(validName === undefined) {
        //   alert('only humans english names')
        //   return
        // };

        const role = (document.querySelector('.person-role')).value;
        let person;

        person = new Person (validName, role);
        console.log(person)
     
    }
   
    _createPersonOnce () {
  
        const div = document.createElement('div');
        div.classList.add('block', 'block--create-personal__once');
        div.innerHTML +=  `<form action="" class="form--create-personal__once">
        <input type="text" class="person-name" id="person-name__once"> 
        <select name="person-role" id="person-role__once" class="person-role">
            <option value="officiant">officiant</option>
            <option value="barmen">barmen</option>
            <option value="hostes">hostes</option>
        </select>
       </form>`
       firstSection.append(div);

       console.log(document.querySelector('.form--create-personal__once'))
      
      const creating = new Promise((resolve, reject) => {
        setTimeout(() => {
         
          document.querySelector('.form--create-personal__once')
          .addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.querySelector('.person-name').value;
            const validName = this.nameValidation(name);
         
    
            const role = (document.querySelector('.person-role')).value;
            let person;
    
            person = new Person (validName, role);
            console.log(person)
          });
          resolve()
        }, 15000),
        reject = new Error;
      })
      creating.then(
        () => {
          this.div.remove()
        }
      )
    }
   
  }

const dzamiko = new Restaraunt();




