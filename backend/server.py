from enum import unique
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Sp022704@localhost/ad-website'
db = SQLAlchemy(app)



"""
PACKAGES
"""
class Package(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100), nullable=False)
    features = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float(), nullable=False)

    def __repr__(self):
        return f"{self.type} Package | {self.features} | ${self.price}"
    
    def __init__(self, type, features, price):
        self.type = type
        self.features = features
        self.price = price

def format_package(package):
    return {
        "type": package.type,
        "features": package.features.split(","),
        "price": package.price
    }

#Create a package
@app.route("/packages", methods=["POST"])
def create_package():
    type = request.json['type']
    features = request.json['features']
    price = request.json['price']
    package = Package(type, features, price)
    db.session.add(package)
    db.session.commit()
    return format_package(package)

#Get all packages
@app.route("/packages", methods=["GET"])
def get_packages():
    packages = Package.query.order_by(Package.id.asc()).all() 
    package_list = []
    for package in packages:
        package_list.append(format_package(package))
    return {"packages": package_list}

#Get a single package
@app.route("/packages/<type>", methods=["GET"])
def get_package(type):
    package = Package.query.filter_by(type=type).first()
    formatted_package = format_package(package)
    return {"package": formatted_package}



"""
ORDERS
"""
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    package = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow())
    buyer = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"Order: {self.id} | {self.buyer} | {self.package} | {self.created_at}"

    def __init__(self, package, buyer):
        self.package = package
        self.buyer = buyer

    
def format_order(order):
    return {
        "package": order.package,
        "id": order.id,
        "buyer": order.buyer,
        "created_at": order.created_at
    }

#Create order
@app.route("/orders", methods=["POST"])
def create_order():
    package = request.json['package']
    buyer = request.json['buyer']
    order = Order(package, buyer)
    db.session.add(order)
    db.session.commit()
    return format_order(order)

#Get all orders
@app.route("/orders", methods=["GET"])
def get_orders():
    orders = Order.query.order_by(Order.id.asc()).all() 
    order_list = []
    for order in orders:
        order_list.append(format_order(order))
    return {"orders": order_list}

#Get single order
@app.route("/orders/<id>", methods=["GET"])
def get_order(id):
    order = Order.query.filter_by(id=id).one()
    formatted_order = format_order(order)
    return {"order": formatted_order}

#Delete an order
@app.route("/orders/<id>", methods=["DELETE"])
def delete_order(id):
    order = Order.query.filter_by(id=id).one()
    db.session.delete(order)
    db.session.commit()
    return f"Order (id: {id}) deleted!"

#Update an order
@app.route("/orders/<id>", methods=["PUT"])
def update_order(id):
    order = Order.query.filter_by(id=id)
    package = request.json['package']
    buyer = request.json['buyer']
    order.update(dict(package=package, buyer=buyer, created_at=datetime.datetime.utcnow()))
    db.session.commit()
    return {"order": format_order(order.one())}


if __name__ == "__main__":
    app.run(debug=True)