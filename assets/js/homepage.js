var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

// getUserRepos function 

var getUserRepos = function(user) {
    // format the github api url
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // make a get request to the url
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
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

// displayRepos function

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};


userFormEl.addEventListener("submit", formSubmitHandler);