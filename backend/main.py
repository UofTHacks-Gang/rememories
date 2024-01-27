import base64
import io
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
    print(file)
    file_path = f"/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/search/{file.filename}"
    with open(file_path, "wb") as new_file:
        new_file.write(file.file.read())
    
    df = DeepFace.find(img_path=file_path,db_path="/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database")[0]
    if len(df) > 0:
        length = 15
        if len(df) < 15:
            length = len(df)

        # Extracting the list of identities from the DataFrame
        image_urls = df.iloc[0:length].identity
        distance = df.iloc[0:length].distance
        threshold = df.iloc[0].threshold
        print(image_urls,distance )
        print(threshold)
        
        # ['identities'].to_list()

        image_data = []
        for url in image_urls:
            with open(url, "rb") as image_file:
                encoded_image = base64.b64encode(image_file.read()).decode("utf-8")
                image_data.append(encoded_image)
        
        return JSONResponse(content={"images": image_data})
    else:
        # If no faces are found, return an empty list
        print("no faces found")
        return JSONResponse(content={"images": []})
