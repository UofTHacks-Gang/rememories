import io
from fastapi import FastAPI, Form, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

import cv2
import pandas as pd
from deepface import DeepFace

# models = ['VGG-Face', 'Facenet', 'OpenFace', 'DeepFace', 'DeepID', 'Dlib']

# # result = DeepFace.verify(img1_path = "database/r3.jpg", img2_path = "database/r1.jpg", model_name = models[0])
# # plt.imshow(result)
# # print(f"RONALDO VS RONALDO {result}")



app = FastAPI()

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
async def getfaces(img_query: UploadFile):


    # image = Image.open(io.BytesIO(file))
    # image.show()
    # return {"upload_state": "complete"}
    print(img_query)
    # file_path = f"/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database/{file.filename}"
    # with open(file_path, "wb") as file:
    #     file.write(file.file.read())
    
    # df = DeepFace.find(img_path=file_path,db_path="/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database", threshold = 0.8, detector_backend="retinaface")
    # print(len(df))
    # df = df[0]
    # return df.iloc[0].identity
    # print(df.iloc)
