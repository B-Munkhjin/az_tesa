from flask import Flask, render_template

app = Flask(__name__)
app.config["SECRET_KEY"] = "dev-secret"


@app.route("/")
def index():
    clinic = {
        "name": "AZ TESA",
        "tagline": "Сэтгэц, мэдрэл, донтолтын эмнэлэг",
        "hours_weekday": "09:00 – 17:00",
        "hours_saturday": "10:00 – 15:00",
        "phones": ["89333503", "88074737"],
        "address": "Улаанбаатар хот, БГД, 3-р хороо, Грэйс төв, 5-р давхар",
    }
    return render_template("index.html", clinic=clinic)


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
