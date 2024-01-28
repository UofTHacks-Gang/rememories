import os
import random
from datetime import datetime, timedelta

import cohere
from dotenv import load_dotenv

load_dotenv()

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)


# Function to generate a random time string
def random_time():
    random_minutes = random.randint(0, 1440)  # 0 to 1440 minutes in a day
    time_delta = timedelta(minutes=random_minutes)
    current_time = datetime.now()
    random_datetime = current_time - time_delta
    return random_datetime.strftime("%Y-%m-%d %H:%M:%S")

def cohere_tags(emotional_data, keyword):
    # List of emotions for the "tag" field
    

    # Print the list of dictionaries
    print("====================")
    for data in emotional_data:
        print(data[0]["dominant_emotion"])
        # print(data[1])
        # print(data[1].dominant_emotion)

    # response = co.chat(
    #     model="command",
    #     message="Now divide by",
    #     chat_history=[
    #     {"role": "User", "message": "What's 2 + 2?"},
    #     {"role": "Chatbot", "message": "4"},
    #     ],
    #     temperature=0.5,
    #     prompt_truncation="OFF",
    #     stream=False,
    # )

    # keyword = input("What is your keyword?\n")
    query = f'What is the emotion that contains the word or is most similar to {keyword}?'

    response = co.rerank(
    model = 'rerank-english-v2.0',
    query = query,
    documents = [", ".join(data[0]["dominant_emotion"]) for data in emotional_data],
    top_n = 10,
    )

    THRESHOLD = 0.2
    # print(response)
    res = filter(lambda x: x.relevance_score > THRESHOLD, response)
    res = sorted(res, key=(lambda r: r.relevance_score), reverse=True)

    indices = []
    for r in res:
        indices.append(r.index)
        print(str(emotional_data[r.index][0]["dominant_emotion"]) + " | rel. score: " +  str(r.relevance_score))
    return indices
