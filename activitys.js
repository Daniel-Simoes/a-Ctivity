var listElement = document.getElementById('list');
var inputElement = document.getElementById('input');
var buttonElement = document.getElementById('button');

var activitys = [
    'Estudy JAvaScript',
    'Estudy JAvaScript'
]; 

function renderActivitys () {
    for (activity of activitys) {
        var activityElement = document.createElement('li');
        var activityText = document.createTextNode(activity);

        activityElement.appendChild(activityText);
        listElement.appendChild(activityElement);
    }
}
renderActivitys();