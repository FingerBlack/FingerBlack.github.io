from flask import Flask
from flask import render_template
from markupsafe import escape
from flask import request
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib
import os
import json
from urllib.request import urlopen
app = Flask("HW2")
@app.route("/")
def hello_world():
    return render_template('HW2.html')
@app.route('/calculate', methods=['POST', 'GET'])
def load():
    print("123")
    print(request)
    if request.method == 'POST':
        session = request.get_json()
        print(session)
        x=session["age"]
        y=session["weight"]
        print(x)
        print(os.getcwd())
        clf = joblib.load(urlopen("http://127.0.0.1:5000/static/regr.pkl"))
        age = x
        weight = y
        x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
        prediction = clf.predict(x)[0]
    return {
        "result": prediction,
    }