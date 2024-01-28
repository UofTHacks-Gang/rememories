import base64
import io
import os

import cv2
import google.generativeai as genai
import pandas as pd
from cohere_tags import cohere_tags
from deepface import DeepFace
from dotenv import load_dotenv
from facial_recognition import emotion_recognition, facial_recognition
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from PIL import Image

# models = ['VGG-Face', 'Facenet', 'OpenFace', 'DeepFace', 'DeepID', 'Dlib']

# # result = DeepFace.verify(img1_path = "database/r3.jpg", img2_path = "database/r1.jpg", model_name = models[0])
# # plt.imshow(result)
# # print(f"RONALDO VS RONALDO {result}")

# Load environment variables from the .env file
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

app = FastAPI()
pd.set_option('display.max_colwidth', None)

# CORS (Cross-Origin Resource Sharing) middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Specify the allowed origin(s)
    allow_credentials=True,
    allow_methods=["*"],  # You can restrict to specific HTTP methods (e.g., ["GET", "POST"])
    allow_headers=["*"],  # You can restrict to specific HTTP headers
)

google_key = GOOGLE_API_KEY
temperature = 0.2
max_output_tokens = 400
top_k = 20
top_p = 0.7


genai.configure(api_key=google_key)
generation_config = genai.types.GenerationConfig(
    temperature=temperature,
    max_output_tokens=max_output_tokens,
    top_k=top_k,
    top_p=top_p
)

def gemini(image_urls, emotional_data):
    
    
    # tag_prompt = "Generate words that are in this image."
    # haiku_prompt = "Make a haiku for the photo."

    photos = []

    for url in image_urls:
        im = Image.open(url)
        im = im.resize((640, 480))
        p = {
            "img": im,
            "file_name": url,
            "caption": "",
            "haiku": ""
        }
        photos.append(p)

    model = app.state.llm
    print(model)
    i = 0
    for p in photos:
        mood = emotional_data[i][0]["dominant_emotion"] 
        caption_prompt = f"You are collecting photos for a photo album to share with your self. You are an expert at creating nostalgic captions from a second person perspective in less than 25 words. You never use first person words, including 'I'. You never use third person words, including 'they'. You never use specific names. You focus on topics of reminiscence, nostalgia, and especially ${mood} thoughts. You always keep your captions super generic so that they can appeal to anyone."
        caption_response = model.generate_content([caption_prompt, p["img"]], generation_config=generation_config)
        # haiku_response = model.generate_content([haiku_prompt, p["img"]], generation_config=generation_config)
        p["caption"] =  caption_response.text
        # p["haiku"] =  haiku_response.text
        
        print("====================")
        print(f"Filename: {p['file_name']}")
        print(f"Haiku: {p['haiku']}")
        print(f"Caption: {p['caption']}")
        print("====================")
        i+= 1
    
    return p
    


@app.on_event("startup")
async def startup_event():
    print("|||Starting up|||")
    model = genai.GenerativeModel('gemini-pro-vision')
    app.state.llm = model

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/getfaces")
async def getfaces(file: UploadFile = File(...)):
    print(file)

    # image = Image.open(io.BytesIO(file))
    # image.show()
    # return {"upload_state": "complete"}
    
     
    search_results = facial_recognition(file)
    emotional_data = emotion_recognition(search_results)
    app.state.emotions = emotional_data

    # async def generate():
    #     async for p in gemini(search_results):
    #         yield p
    print(search_results)
    print(type(search_results))
    # caption_data = gemini(search_results, emotional_data)
    return search_results.to_list()
    # return caption_data
    # return StreamingResponse(gem), media_type="text/plain")





@app.post("/getemotions")
async def getemotions(emotion: dict):
    print(emotion)
    emotional_data = app.state.emotions
    # emotional_data = emotion_recognition(search_results)

    cohere_data = cohere_tags(emotional_data,emotion)
    return cohere_data


