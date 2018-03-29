function getUser(callback) {
    setTimeout(function onUserGetInfo() {
        callback({firstName: "Gavril", lastName: "Ionesco", postCount: 1});
    }, 500);
}

function updatePostCount(user, callback) {
    setTimeout(function onUpdatePostCount() {
        var newUser = Object.assign(user);
        newUser.postCount++;
        callback(newUser);
    }, 500);
}

getUser(function processUser(user) {
    console.log("Did get user: ", user);
    updatePostCount(user, function processPostCountUpdate(newUser) {
        console.log("Did update post count, new user: ", user);
    });
});

console.log("Starting execution...");