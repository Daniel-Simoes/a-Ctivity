var listElement = document.querySelector('body ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var activitys = JSON.parse(localStorage.getItem('list_activitys')) || [];

function renderActivitys () {
listElement.innerHTML = '';

    for (activity of activitys) {
        var activityElement = document.createElement('li');
        var activityText = document.createTextNode(activity);
       
        var linkElement = document.createElement('button');


        var btn = document.getElementById('foi');
        btn.onclick = function deleteActivity(pos) {
            activitys.splice(pos, 1);
        renderActivitys();
            saveToStorage();
        }


        var btn = document.getElementById('foijj');
        btn.onclick = function deleteActivity(pos) {
            activitys.splice(pos, 100);
        renderActivitys();
            saveToStorage();
        }


        
        
        var linkText = document.createTextNode('Done');
        linkElement.setAttribute('href', '#');

        var pos = activitys.indexOf(activity);
        linkElement.setAttribute('onclick', 'deleteActivity (' + pos +')');

        linkElement.appendChild(linkText);

        activityElement.appendChild(activityText);
        activityElement.appendChild(linkElement);

        

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

var input = document.querySelector('#app input');
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector('#app button').click();
  }
});

function deleteActivity(pos) {
    activitys.splice(pos, 1);
renderActivitys();
    saveToStorage();
}

function saveToStorage() {
   localStorage.setItem('list_activitys',JSON.stringify(activitys));
}