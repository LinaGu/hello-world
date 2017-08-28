var id, parentId;

function drag(e) {
    id = e.target.id;
    parentId = e.target.parentElement.id;
    e.dataTransfer.setData("text", id);
    e.dataTransfer.setDragImage(e.target, 30, 30);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    var element = document.getElementById(id); 
    if (e.target.hasChildNodes()) {
        e.target.removeChild(e.target.firstChild);
    }
    e.target.appendChild(element);
    var steps = document.getElementById('steps');
    var step = document.createElement('div');
    step.innerHTML = parentId + '-' + e.target.id + ';' + ' ';
    steps.appendChild(step);
}

