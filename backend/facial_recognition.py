

def facial_recognition(file_path:str):
    with open(file_path, "wb") as new_file:
        new_file.write(file.file.read())

    df = DeepFace.find(
        img_path=file_path, db_path="/Users/rmaxin/Desktop/UofTHacks/Reminiscent/backend/database", detector_backend="retinaface")[0]
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

        image_data = []
        for url in image_urls:
            with open(url, "rb") as image_file:
                encoded_image = base64.b64encode(
                    image_file.read()).decode("utf-8")
                image_data.append(encoded_image)
