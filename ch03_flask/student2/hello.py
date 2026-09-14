from flask import Flask
import config

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello World!"


@app.route("/hello")
def hello():
    return "hello world"


@app.route("/hi")
def hi():
    return "hi world"

@app.route("/sum/<int:a>/<int:b>")
def sums(a,b):
    return f"{a} + {b} = {a+b}"

@app.route("/greet/<name>")
def greet(name):
    return f"안녕하세요, {name}님"

@app.route("/info")
def information():
    return f"포트: {config.PORT} / 데이터베이스: {config.DB_NAME}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=config.PORT, debug=True)
