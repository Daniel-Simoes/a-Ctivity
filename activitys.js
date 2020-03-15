var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var activitys = [
    'Estudy JAvaScript',
    'Estudy JAvaScript',
    'Estudy JAvaScript'
]; 

function renderActivitys () {
    listElement.innerHTML = '';
    
    for (activity of activitys) {
        var activityElement = document.createElement('li');
        var activityText = document.createTextNode(activity);

        activityElement.appendChild(activityText);
        listElement.appendChild(activityElement);
    }
}

renderActivitys();

function addActivity() {
    var activityText = inputElement.value;

    activitys.push(activityText);
    //inputElement.value = '';
    renderActivitys();
}

buttonElement.onclick = addActivity;