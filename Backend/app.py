from flask import Flask,request
import os
from flask_cors import CORS
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

from index import predict_deficiency
app = Flask(__name__)
cors = CORS(app)
@app.route('/')
def main():
    return 'Working !! '

@app.route('/predict',methods=['POST'])
def predict():
    data = request.json
    print(data)
    return predict_deficiency(data['image_url'])

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=8080,ssl_context=('cert.pem','key.pem'),debug=True)