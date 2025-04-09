import firebase_admin
from firebase_admin import credentials, db
from dotenv import load_dotenv
import os
import json

# Load environment variables from .env file
load_dotenv()

def init_firebase():

    if not firebase_admin._apps:

        # Get path of the json
        cred_path = os.getenv("FIREBASE_CRED_PATH")
        
        # Load the JSON file


        # Get database URL from environment variable
        db_url = os.getenv("DB_URL")

        if not cred_path or not db_url:
            raise ValueError("Firebase credentials or database URL not found in environment variables.")

        # Initialize Firebase Admin SDK
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred, {
            'databaseURL': db_url
        })
    