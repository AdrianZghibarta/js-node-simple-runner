import Http from "http";

function startHttpServer() {
    const server = Http.Server();

    server.listen("6200", () => {
        console.log("Http server started...");
    });
}

startHttpServer();