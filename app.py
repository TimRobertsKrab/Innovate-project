from flask import Flask
from views import page_not_found, views
#import views from views.py

#instantiate app object
app = Flask(__name__)
app.register_error_handler(404,page_not_found)

# register the views blueprint
app.register_blueprint(views)

#run application
if __name__ == "__main__":
    app.run(debug=True,port=8000)
