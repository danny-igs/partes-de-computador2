document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    if (name.trim() === '' || comment.trim() === '') {
        alert('Por favor ingresa tu nombre y comentario');
        return;
    }
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = '<strong>' + name + ':</strong> ' + comment;
    document.getElementById('comments').appendChild(commentElement);
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});