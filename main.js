var $addEntryBtn = document.querySelector('.add-entry-btn');
var $xBtn = document.querySelector('.x-btn');
var $overlay = document.querySelector('.overlay');

$addEntryBtn.addEventListener('click', openModal);

$xBtn.addEventListener('click', closeModal);

function openModal(event) {
  $overlay.style.display = 'flex';
}

function closeModal(event) {
  $overlay.style.display = 'none';
}
