from flask import Flask, render_template
import RPi.GPIO as GPIO                     # 추가
import config
from model.led_db import LedDB

app = Flask(__name__)
led_db = LedDB()
LED = config.LED_PIN                        # 추가

# LED 핀 준비 (test_led.py 와 같음)         # 추가
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(LED, GPIO.OUT, initial=GPIO.LOW)


@app.route("/")
def home():
    logs = led_db.get_all()
    return render_template("index.html", logs=logs)

@app.route("/on", methods=["POST"])
def led_on():
    try:
        GPIO.output(LED, GPIO.HIGH)
        led_db.add(LED, 1)
        return "ok"
    except:
        return "fail", 500


@app.route("/off", methods=["POST"])
def led_off():
    try:
        GPIO.output(LED, GPIO.LOW)
        led_db.add(LED,0)
        return "ok"
    except:
        return "fail", 500

@app.route("/get_last", methods=["GET"])
def get_last():
    return led_db.get_last_data()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=config.PORT)
