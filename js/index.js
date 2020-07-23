"use strict";

// Navigation
var buttonIndex = get('.nav__home');
var buttonBookmarks = get('.nav__bookmarks');
var buttonCreate = get('.nav__create');
var buttonProfile = get('.nav__profile');
var pageIndex = get('.page__index');
var pageBookmarks = get('.page__bookmarks');
var pageCreate = get('.page__create');
var pageProfile = get('.page__profile'); // Bookmark Toggle

var bookmark = get('.card__bookmark'); // Show Answer Button

var buttonAnswer = get('.card__button');
var answerText = get('.card__answer'); // Darkmode Switch

var main = get('main');
var header = get('header');
var footer = get('footer');
var svg = get('svg');
var darkmodeSwitch = get('.button__darkmode'); // Darkmode Switch

darkmodeSwitch.addEventListener('click', function () {
  main.classList.toggle('darkmode');
  header.classList.toggle('darkmode');
  footer.classList.toggle('darkmode');
  svg.classList.toggle('svg__darkmode');
}); // Bookmark Toggle

bookmark.addEventListener('click', function () {
  bookmark.classList.toggle('card__bookmark--active');
}); // Show Answer Button

buttonAnswer.addEventListener('click', function () {
  answerText.classList.toggle('hidden');

  if (buttonAnswer.textContent === 'SHOW ANSWER') {
    buttonAnswer.textContent = 'HIDE ANSWER';
  } else {
    buttonAnswer.textContent = 'SHOW ANSWER';
  }
}); // Navigation

buttonIndex.addEventListener('click', function () {
  nav(pageIndex);
});
buttonBookmarks.addEventListener('click', function () {
  nav(pageBookmarks);
});
buttonCreate.addEventListener('click', function () {
  nav(pageCreate);
});
buttonProfile.addEventListener('click', function () {
  nav(pageProfile);
});

function nav(currentPage) {
  pageIndex.classList.add('hidden');
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  currentPage.classList.add('hidden');
}

function get(selector) {
  return document.querySelector(selector);
}