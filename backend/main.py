import base64
import io
from backend.facial_recognition import facial_recognition
from backend.gemini import gemini
from fastapi import FastAPI, Form, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

import cv2
from fastapi.responses import JSONResponse
import pandas as pd
from deepface import DeepFace

# models = ['VGG-Face', 'Facenet', 'OpenFace', 'DeepFace', 'DeepID', 'Dlib']

# # result = DeepFace.verify(img1_path = "database/r3.jpg", img2_path = "database/r1.jpg", model_name = models[0])
# # plt.imshow(result)
# # print(f"RONALDO VS RONALDO {result}")



app = FastAPI()
pd.set_option('display.max_colwidth', None)

# CORS (Cross-Origin Resource Sharing) middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Specify the allowed origin(s)
    allow_credentials=True,
    allow_methods=["*"],  # You can restrict to specific HTTP methods (e.g., ["GET", "POST"])
    allow_headers=["*"],  # You can restrict to specific HTTP headers
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/getfaces")
async def getfaces(file: UploadFile = File(...)):


    # image = Image.open(io.BytesIO(file))
    # image.show()
    # return {"upload_state": "complete"}
    
    file_path = f"/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/search/{file.filename}"
     
    facial_recognition_data = facial_recognition(file_path)
    description_data = gemini(facial_recognition_data)
    print(description_data)
    # result = cohere(description)
