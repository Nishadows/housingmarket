import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='', static_folder='static')


@app.route("/")
def index():
    """Return the homepage."""
    # return render_template("index.html")
    return render_template("AGCdashboard.html")

@app.route("/dashboard")
def viewdashboard():
    return render_template("AGCdashboard.html")

@app.route("/localsnapshot")
def snapshots():
    return render_template("AGCdashboard2.html")


@app.route("/tech_education_model")
def tech_education_model():
    return render_template("tech_education_model.html")


if __name__ == "__main__":
    app.run()
