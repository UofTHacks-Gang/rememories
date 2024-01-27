from key import COHERE_API_KEY

import random
from datetime import datetime, timedelta
import cohere

co = cohere.Client(COHERE_API_KEY)


# List of emotions for the "tag" field
emotions = ["happy", "sad", "excited", "calm", "angry", "surprised", "confused"]
happy_related_words = [
    "Joyful",
    "Content",
    "Delighted",
    "Pleased",
    "Glad",
    "Elated",
    "Blissful",
    "Cheerful",
    "Satisfied",
    "Ecstatic",
    "Radiant",
    "Jovial",
    "Exuberant",
    "Optimistic",
    "Merry",
    "Buoyant",
    "Upbeat",
    "Grateful",
    "Fulfilled",
    "Euphoric",
    "Overjoyed",
    "Sunny",
    "Lighthearted",
    "Vibrant",
    "Exultant",
    "Cheery",
    "Thrilled",
    "Rejoicing",
    "Sunny",
    "Serenade",
    "Jubilant",
    "Zestful",
]
mad_related_words = [
    "Angry",
    "Furious",
    "Irate",
    "Enraged",
    "Annoyed",
    "Irritated",
    "Agitated",
    "Infuriated",
    "Incensed",
    "Outraged",
    "Hostile",
    "Resentful",
    "Vexed",
    "Upset",
    "Cross",
    "Indignant",
    "Fuming",
    "Wrathful",
    "Livid",
    "Exasperated",
    "Miffed",
    "Displeased",
    "Offended",
    "Ticked off",
    "Spiteful",
    "Riled up",
    "Provoked",
    "Bitter",
    "Sullen",
    "Disgruntled",
    "Choleric",
    "Hot-tempered",
    "Peeved",
]
sad_related_words = [
    "Sorrowful",
    "Melancholy",
    "Gloomy",
    "Downcast",
    "Dismal",
    "Depressed",
    "Blue",
    "Mournful",
    "Heartbroken",
    "Despondent",
    "Dejected",
    "Disheartened",
    "Forlorn",
    "Downhearted",
    "Miserable",
    "Woeful",
    "Desolate",
    "Dreary",
    "Somber",
    "Cheerless",
    "Weary",
    "Pensive",
    "Morose",
    "Heavy-hearted",
    "Broken-hearted",
    "Regretful",
    "Wistful",
    "Sullen",
    "Tragic",
    "Lamentable",
    "Funereal",
    "Doleful",
    "Sombre",
]

# Function to generate a random time string
def random_time():
    random_minutes = random.randint(0, 1440)  # 0 to 1440 minutes in a day
    time_delta = timedelta(minutes=random_minutes)
    current_time = datetime.now()
    random_datetime = current_time - time_delta
    return random_datetime.strftime("%Y-%m-%d %H:%M:%S")

# Creating the list of dictionaries
data_list = [
    {"img": None, "time": random_time(), "tag": random.sample(happy_related_words, random.randint(1, 2))},
    {"img": None, "time": random_time(), "tag": random.sample(mad_related_words, random.randint(1, 2))},
    {"img": None, "time": random_time(), "tag": random.sample(sad_related_words, random.randint(1, 2))},
    {"img": None, "time": random_time(), "tag": random.sample(happy_related_words, random.randint(1, 2))},
    {"img": None, "time": random_time(), "tag": random.sample(mad_related_words, random.randint(1, 2))},
    {"img": None, "time": random_time(), "tag": random.sample(sad_related_words, random.randint(1, 2))},
]

# Print the list of dictionaries
for data in data_list:
    print(data)

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

keyword = input("What is your keyword?\n")
query = f'What is the emotion that contains the word or is most similar to {keyword}?'

response = co.rerank(
  model = 'rerank-english-v2.0',
  query = query,
  documents = [", ".join(data["tag"]) for data in data_list],
  top_n = 3,
)

THRESHOLD = 0.1
# print(response)
res = filter(lambda x: x.relevance_score > THRESHOLD, response)
res = sorted(res, key=(lambda r: r.relevance_score), reverse=True)
for r in res:
    print(str(data_list[r.index]) + " | rel. score: " +  str(r.relevance_score))