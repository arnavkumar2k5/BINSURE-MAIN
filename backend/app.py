import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/submit_form', methods=['POST'])
def submit_form():
    try:
        # Get data from the request body
        data = request.json

        # Extract form fields
        name = data.get('name')
        email = data.get('email')
        planning_to_buy = data.get('planningToBuy')
        contact_number = data.get('contactNumber')
        country_code = data.get('countryCode')

        # Validate required fields
        if not all([name, email, planning_to_buy, contact_number, country_code]):
            return jsonify({"success": False, "message": "All fields are required."}), 400

        # Prepare the data for the external API
        external_api_url = 'https://api.b-insure.ca/NewLeadNotification'
        headers = {
            'Content-Type': 'application/json',
            'x-api-key': 'pRlyPDQCAz1f7gov3HaqN2AX2Ridusdc6ty7ZIHJ'
        }

        # Forward the data to the external API
        response = requests.post(external_api_url, json=data, headers=headers)

        # Check if the request was successful
        if response.status_code == 200:
            return jsonify({"success": True, "message": "Form submitted and forwarded to external API successfully!"})
        else:
            return jsonify({"success": False, "message": "Failed to forward to external API."}), 500

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"success": False, "message": "An error occurred while processing the form."}), 500

if __name__ == '__main__':
    app.run(debug=True)
