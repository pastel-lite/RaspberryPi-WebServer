from flask import Flask
import config

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/hello/<name>")
def hello_name(name):
    return "Hello, " + name + "!"

@app.route("/hello")
def hello():
    return "aokumo rin"

@app.route("/double/<int:num>")
def double(num):
    return "결과는 " + str(num * 2)

@app.route("/hi")
def hi():
    return "kurimi"

@app.route("/hello/<name>")
def hello_name(name):
    return "Hello, " + name + "!"

@app.route("/double/<int:num>")
def double(num):
    return "결과는 " + str(num * 2)

@app.route("/sum/<int:a>/<int:b>")
def sum_two(a, b):
    return "{0} + {1} = {2}".format(a, b, a + b)


@app.route("/greet/<name>")
def greet(name):
    return "안녕하세요, {0}님".format(name)

@app.route("/info")
def info():
    return "포트 : {0} / 데이터베이스 : {1}".format(config.PORT, config.DB_NAME)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=config.PORT, debug=True)
