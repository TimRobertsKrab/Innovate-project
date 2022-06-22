from flask import Flask, render_template, Blueprint, request
import random as r

views = Blueprint("views",__name__)

planet_tickets = {}


def post_handler(request):
    if request.method == "POST":
        planet = request.form.get("planet-name")
        tickets = int(request.form.get("tickets"))
        if planet not in planet_tickets:
            planet_tickets[planet] = tickets
        else:
            planet_tickets[planet]+= tickets

@views.errorhandler(404)
def page_not_found(e):
    print("ERROR\n")
    # return "Broken"
    return render_template("404.html"), 404

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/planets/mercury",methods=["POST","GET"])
def mercury():
    post_handler(request)
    return render_template("planets/mercury.html")

@views.route("/planets/venus",methods=["POST","GET"])
def venus():
    post_handler(request)
    return render_template("planets/venus.html")
    
@views.route("/planets/earth",methods=["POST","GET"])
def earth():
    post_handler(request)
    return render_template("planets/earth.html")

@views.route("/planets/mars",methods=["POST","GET"])
def mars():
    post_handler(request)
    return render_template("planets/mars.html")

@views.route("/planets/jupiter", methods=["POST","GET"])
def jupiter():
    post_handler(request)
    return render_template("planets/jupiter.html")

@views.route("/planets/saturn",methods=["POST","GET"])
def saturn():
    post_handler(request)
    return render_template("planets/saturn.html")

@views.route("/planets/uranus",methods=["POST","GET"])
def uranus():
    post_handler(request)
    return render_template("planets/uranus.html")

@views.route("/planets/neptune",methods=["POST","GET"])
def neptune():
    post_handler(request)
    return render_template("planets/neptune.html")

@views.route("/dwarf-planets",methods=["POST","GET"])
def dwarfplanets():
    post_handler(request)
    return render_template("dwarfplanets.html")

@views.route("/checkout" ,methods=["POST","GET"])
def checkout():
    return render_template("checkout.html",planet_tickets=planet_tickets)

@views.route("/planets")
def planets():
    return render_template("404.html"),404


