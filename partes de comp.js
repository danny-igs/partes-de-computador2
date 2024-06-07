document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var header = section.querySelector('h2');
        header.addEventListener('click', function() {
            section.classList.toggle('active');
        });
    });
});