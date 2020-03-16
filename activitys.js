var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var activitys = JSON.parse(localStorage.getItem('list_activitys')) || []; 

function renderActivitys () {
    listElement.innerHTML = '';

    for (activity of activitys) {
        var activityElement = document.createElement('li');
        var activityText = document.createTextNode(activity);

        var buttonElement = document.createElement('button');

        var pos = activitys.indexOf(activity);
        buttonElement.setAttribute('onclick', 'deleteActivity(' + pos +')');

        var linkText = document.createTextNode('Done');

        buttonElement.appendChild(linkText);

        activityElement.appendChild(activityText);
        activityElement.appendChild( buttonElement);

        listElement.appendChild(activityElement);
    }
}

renderActivitys();

function addActivity() {
    var activityText = inputElement.value;

    activitys.push(activityText);
    inputElement.value = '';
    renderActivitys();
    saveToStorage();
}

buttonElement.onclick = addActivity;

function deleteActivity(pos) {
    activitys.splice(pos, 1);
    renderActivitys();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_activitys',JSON.stringify(activitys));
}