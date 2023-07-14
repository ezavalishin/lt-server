module.exports = {
    apps : [{
        name   : "lt-server",
        script : "./bin/server",
        args: "--port 8000 --domain lt.mini-team.ru --max-sockets 100",
        interpreter: "node -r esm"
    }]
}
