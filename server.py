from flask import Flask, request, send_from_directory, jsonify
app = Flask(__name__, static_url_path='/static')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


@app.route("/")
def hello():
    return app.send_static_file("index.html")


@app.route("/get_sentiment", methods=['GET', 'POST'])
def get_sentiment():
    print(request.get_json())
    return jsonify({'score': 1234})

if __name__ == '__main__':
    app.run(debug=True)
