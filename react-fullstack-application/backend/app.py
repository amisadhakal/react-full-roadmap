from flask import Flask, jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = [
    {
        "id": 1,
        "title": "Learn React"
    },
    {
        "id": 2,
        "title": "Learn Flask"
    }
]

@app.route("/tasks")
def get_tasks():
    return jsonify(tasks)

@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()

    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"]
    }

    tasks.append(new_task)

    return jsonify(new_task), 201

if __name__ == "__main__":
    app.run(debug=True)