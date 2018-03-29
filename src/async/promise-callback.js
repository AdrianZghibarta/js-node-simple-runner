function getUser() {
    return new Promise(function (resolver, rejecter) {
        setTimeout(function () {
            try {
                resolver({firstName: "Gavril", lastName: "Ionesco", postCount: 1});
            }
            catch(error) {
                rejecter(error);
            }
        }, 500);
    });
}

function updatePostCount(user) {
    return new Promise(function (resolver, rejecter) {
        setTimeout(function () {
            try {
                var newUser = Object.assign(user);
                newUser.postCount++;
                resolver(newUser);
            }
            catch(error) {
                rejecter(error);
            }
        }, 500);
    });
}

getUser()
.then(function (user) {
    console.log("Did get user information: ", user);
    updatePostCount(user)
    .then(function (newUser) {
        console.log("Did update user, new info: ", newUser);
    })
    .catch(function (error) {
        console.log("Error while updating user: ", error);
    });
})
.catch(function (error) {
    console.log("Error while fetching user: ", error);
});

console.log("Starting execution...");