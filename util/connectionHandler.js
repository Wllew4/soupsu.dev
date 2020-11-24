exports.connectionHandler = {
    onConnect: (addr, port) => {
        console.log(`* Connected to ${addr}:${port}`);
    },
    onDisconnect: (reason) => {
        console.log(`* Disconnected because ${reason}`);
    }
};