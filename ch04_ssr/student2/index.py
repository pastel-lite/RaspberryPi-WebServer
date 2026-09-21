from flask import Flask, render_template, redirect, request
import config
import db

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/<int:num>")
def save(num):
	print("Number:", num)

	db.add_count(int(num))

	return redirect("/")

@app.route("/submit", methods=["POST"])
def save_num_post():
	data = request.get_json()

	print("Number:", data.get("value"))

	db.add_count(int(data.get("value")))

	return "200"

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=config.PORT, debug=True)
