from flask import Flask
from flask_cors import CORS
from requests.api import request
from classes.model import predict_deficiency
app = Flask(__name__)
cors = CORS(app,support_credentials=True)
@app.route('/')
def main():
    return 'Working !! '

@app.route('/predict')
def predict():
    data = request.json
    return predict_deficiency(data['image_url'])

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080,ssl_context=('cert.pem','key.pem'),debug=True)