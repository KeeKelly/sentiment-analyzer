from flask import Flask, request
app = Flask(__name__)

@app.route("/")
def hello():
    print(request.get_json())
    return app.send_static_file("index.html")

if __name__ == '__main__':
    app.run()
