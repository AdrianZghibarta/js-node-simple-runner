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

async function userFlow() {
    try {
        var user = await getUser();
        console.log("Did get user information: ", user);
        var newUser = await updatePostCount(user);
        console.log("Did update user, new info: ", newUser);
    }
    catch (error) {
        console.log("User flow error: ", error);
    }
}

userFlow();

console.log("Starting execution...");