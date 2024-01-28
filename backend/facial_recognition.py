import base64

import cv2
import imutils
import pandas as pd
from deepface import DeepFace
from fastapi.responses import JSONResponse

detector_backend = "retinaface"

def facial_recognition(image_query):
    print("Entered facial recognition module")
    file_path = f"/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/search/{image_query.filename}"

    with open(file_path, "wb") as new_file:
        new_file.write(image_query.file.read())

    df = DeepFace.find(
        img_path=file_path, db_path="/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database", detector_backend=detector_backend)[0]
    if len(df) > 0:
        length = 15
        if len(df) < 15:
            length = len(df)

        # Extracting the list of identities from the DataFrame
        image_urls = df.iloc[0:length].identity
        distance = df.iloc[0:length].distance
        threshold = df.iloc[0].threshold
        print(image_urls, distance)
        print(threshold)
    
    
    
        # ['identities'].to_list()

        # for url in image_urls:
        #     with open(url, "rb") as image_file:
        #         encoded_image = base64.b64encode(
        #             image_file.read()).decode("utf-8")
        #         image_data.append(encoded_image)
        return image_urls
    
def emotion_recognition(image_urls):
    tags_list = []
    for url in image_urls:
        im = cv2.imread(url)
        im = imutils.resize(im, width=1920)
        tags = DeepFace.analyze(img_path=im,actions="emotion",detector_backend="skip")
        # print(tags)
        tags_list.append(tags)

    return tags_list
