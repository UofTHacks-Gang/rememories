import os
from dotenv import load_dotenv
import time
import uuid
from typing import List, Tuple, Optional, Dict, Union

import google.generativeai as genai
import gradio as gr
from PIL import Image
import glob

# Load environment variables from the .env file
load_dotenv()

print("google-generativeai:", genai.__version__)

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

photos = []

for filename in glob.glob('photos/*'):
    im=Image.open(filename)
    im = im.convert('RGB')
    p = {
        "img": im,
        "file_name": filename,
        "caption": "",
        "haiku": ""
    }
    photos.append(p)

def main():
    # parameters
    google_key = GOOGLE_API_KEY
    temperature = 0.5
    max_output_tokens = 1024
    top_k = 20
    top_p = 0.9


    genai.configure(api_key=google_key)
    generation_config = genai.types.GenerationConfig(
        temperature=temperature,
        max_output_tokens=max_output_tokens,
        top_k=top_k,
        top_p=top_p
    )

    caption_prompt = "This photo was taken in Toronto, Ontario on January 27, 2024. Using the location and time, create a super generic second-person nostalgic caption using a max of 25 words. Do not use first person words like 'I'. Do not use any specific names of things."
    tag_prompt = "Generate words that are in this image."
    haiku_prompt = "Make a haiku for the photo."

    model = genai.GenerativeModel('gemini-pro-vision', )
    for p in photos:
        caption_response = model.generate_content([caption_prompt, p["img"]], generation_config=generation_config)
        haiku_response = model.generate_content([haiku_prompt, p["img"]], generation_config=generation_config)
        p["caption"] =  caption_response.text
        p["haiku"] =  haiku_response.text
        
        print("====================")
        print(f"Filename: {p['file_name']}")
        print(f"Haiku: {p['haiku']}")
        print(f"Caption: {p['caption']}")
        print("====================")
        
    
if __name__ == "__main__":
    main()

