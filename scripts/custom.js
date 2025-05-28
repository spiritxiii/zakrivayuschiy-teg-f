document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('[data-target]').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('#' + item.dataset.target).showModal();
    });
  });

  document.querySelectorAll('.close-button').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('.dialog[open]').close();
    });
  });

});