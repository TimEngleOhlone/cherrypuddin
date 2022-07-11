'use strict';

const navToggleBtn = document.querySelector('#toggleButton');

navToggleBtn.addEventListener('click', function () {
  // console.log('hi');
  const navbarContentEl = document.querySelector('#navbarContent');
  navbarContentEl.classList.toggle('hidden');
  const headerLogo = document.querySelector('.header-logo');
  headerLogo.style.transition = 'null';
  setTimeout(() => {
    headerLogo.style.transition = 'ease-in-out 350ms';
  }, '1000');
});

const eventLinks = document.querySelectorAll('a');
const smLinks = document.querySelectorAll('.sm-icon');
// const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('resize', function () {
  for (let eventLink of eventLinks) {
    eventLink.style.transition = 'null';
    this.setTimeout(() => {
      eventLink.style.transition = 'ease-in-out 350ms';
    }, '2000');
  }
  for (let smLink of smLinks) {
    smLink.style.transition = 'null';
    this.setTimeout(() => {
      smLink.style.transition = 'ease-in-out 350ms';
    }, '2000');
  }
  this.document.querySelector('h1').style.transition = 'null';
  this.setTimeout(() => {
    this.document.querySelector('h1').style.transition = 'ease-in-out 350ms';
  }, '2000');
});
