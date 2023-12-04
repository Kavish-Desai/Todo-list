
from flask import Flask, render_template
import mysql.connector
from mysql.connector import errorcode
from datetime import date

app = Flask(__name__)

@app.route("/")
def html_hello():
    return render_template("index.html") 

app.run(debug=True)