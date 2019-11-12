// create a github object
const github = new Github();

const ui = new UI();

// search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    // get the value of the input
    const userText = e.target.value;

    if (userText !== '') {
        // make HTTP called using async and await
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // show alert
                    ui.showAlert("User Not Found", 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
                
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
})