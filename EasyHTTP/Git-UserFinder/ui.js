class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row>
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block"> View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-warning">Public Gist: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Comapny: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    // show alert if the profile is not a github profile
    showAlert(message, className) {
        // clear some alert messages otherwise, all the alert messages will stack up on the screen 
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        // get parent of the div tag
        const container = document.querySelector('.searchContainer');
        // get the search box
        const search = document.querySelector('.search');
        // insert alert message
        container.insertBefore(div, search);

        // clear alert message once the users are found
        setTimeout(() => {
            this.clearAlert();
        }, 1500);
    }

    // clear the alert message 
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-warning">Stars: ${repo.forms_count}</span>
                        </div>
                </div>
            `;
        });
     
        document.getElementById('repos').innerHTML = output;
    }

}