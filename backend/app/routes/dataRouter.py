from fastapi import APIRouter, UploadFile, File
from app.controllers.firebaseController import get_data, upload_excel
from dotenv import load_dotenv
load_dotenv()
import os

# data_path = os.getenv('DATA_PATH')

# This router handles the data endpoint. the data endpoint is '/data'
router = APIRouter(prefix = '/data', tags = ['Data'])

@router.get('/')
def fetch_data():
    return get_data()

@router.post('/upload')
def upload_file(file: UploadFile = File(...)):
    file_bytes = file.file.read()
    file.file.close()
    return upload_excel(file_bytes)

