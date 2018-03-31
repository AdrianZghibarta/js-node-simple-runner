const Info = {
    version: 1,
    release: "12/12/2012"
};

export default Info;

export function logInfo() {
    console.log(Info);
}

export function sayHello(name) {
    console.log("Hello ", name);
}