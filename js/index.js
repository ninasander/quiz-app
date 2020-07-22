"use strict";

var buttonIndex = document.querySelector('.nav__home');
var buttonBookmarks = document.querySelector('.nav__bookmarks');
var buttonCreate = document.querySelector('.nav__create');
var buttonProfile = document.querySelector('.nav__profile');
var pageIndex = document.querySelector('.page__index');
var pageBookmarks = document.querySelector('.page__bookmarks');
var pageCreate = document.querySelector('.page__create');
var pageProfile = document.querySelector('.page__profile'); // buttonNav.addEventListener('click', () => {
//     pageBookmarks.classList.add('hidden')
//     pageCreate.classList.add('hidden')
//     pageProfile.classList.add('hidden')
//     pageIndex.classList.remove('hidden')
//   })

buttonIndex.addEventListener('click', function () {
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  pageIndex.classList.remove('hidden');
});
buttonBookmarks.addEventListener('click', function () {
  pageBookmarks.classList.remove('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');
  pageIndex.classList.add('hidden');
});
buttonCreate.addEventListener('click', function () {
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.remove('hidden');
  pageProfile.classList.add('hidden');
  pageIndex.classList.add('hidden');
});
buttonProfile.addEventListener('click', function () {
  pageBookmarks.classList.add('hidden');
  pageCreate.classList.add('hidden');
  pageProfile.classList.remove('hidden');
  pageIndex.classList.add('hidden');
});