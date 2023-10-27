from flask import Flask, request, jsonify
from flask_cors import CORS
import pytesseract
from PIL import Image

app = Flask(__name__)
CORS(app)

def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

@app.route('/extract_text', methods=['POST'])
def extract_text():
    if request.method == 'POST':
        image = request.files['image']
        image_path = "uploaded_image.jpg"  
        image.save(image_path)
        extracted_text = extract_text_from_image(image_path)
        return jsonify({"text": extracted_text})

if __name__ == '__main__':
    app.run(debug=True,port=8000)
