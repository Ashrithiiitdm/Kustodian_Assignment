from app.config.firebase_config import init_firebase
import pandas as pd
from io import BytesIO
from firebase_admin import db

# Initialize Firebase db
init_firebase()

# Function to take the excel file and upload to the Firebase db.
def upload_excel(file_bytes):

    try:
        
        df = pd.read_excel(BytesIO(file_bytes))

        df = df.applymap(lambda x : x.isoformat() if hasattr(x, 'isoformat') else x)

        # Convert DataFrame to dictionary
        data_dict = df.to_dict(orient='records')

        # Reference to the Firebase database
        ref = db.reference('data')

        # Upload data to Firebase
        ref.set(data_dict)


        return {
            "status" : "success",
            "message" : "Data uploaded successfully",
        }
    
    except Exception as e:

        return {
            "status" : "error",
            "message" : str(e),
        }


#Function to get the data from the Firebase db.
def get_data():

    try:

        ref = db.reference('data')
        data = ref.get()

        if data is None:

            return {
                "status" : "error",
                "message" : "No data found in Firebase",
            }
        
        # Convert data to DataFrame
        df = pd.DataFrame(data)

        # Convert DataFrame to dictionary
        data_dict = df.to_dict(orient = 'records')

        return {
            "status" : "success",
            "data" : data_dict,
        }

    except Exception as e:

        return {
            "status" : "error",
            "message" : str(e),
        }