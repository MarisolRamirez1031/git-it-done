var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// getUserRepos function 

var getUserRepos = function(user) {
    // format the github api url
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // make a get request to the url
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};


// formSubmitHandler function

var formSubmitHandler = function(event) {
    event.preventDefault();

    // get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
    console.log(event);
};


userFormEl.addEventListener("submit", formSubmitHandler);