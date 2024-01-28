# rememories

## Inspiration 💡
**One photo is worth a thousand words.**

Between a team that shares a passion for capturing and collecting life's moments, we were inspired by the challenge of innovating old technologies with new modern-day learnings to infuse narratives into photographic experiences, intending to personalize it for each individual. Our purpose was to evoke deeper emotions to connect with the photographs and document valuable moments where individuals can reminisce on the past when they revisit these moments down the line.

## What it does 🖼️
ReMemories takes your photo library and uses facial recognition to help identify and filter through the collection to identify images that feature the specific individual captured. A personalized digital polaroid photo album is then compiled with an AI-generated caption that provides context and a story behind each photo.

Using Cohere API, we can also rank and filter the photos based on certain tags, keywords, objects, or emotions assigned to the photo during the initial filtering process. This advanced categorization helps quickly locate and revisit moments affiliated with certain tags, sentiments, or subjects.

## How we built it 🔧
UI/UX: Figma
Front-End: React.js
Back-End: Python FastAPI, VertexAI, Gemini, Cohere API, Deepface

## Challenges we ran into 🏃‍♂️
During our project, we dealt with difficulties in properly prompting our Gemini API to get the desired results on our captions and understanding the nuances of our request. We wanted to ensure the full accuracy of our captions and find the right balance between specificity and generality.

To solve this issue, we refined the model's parameters to reduce delusional outputs from the AI models and iterated on this process to ensure these outputs aligned with our project's vision. We also aimed to avoid fabricating overly detailed descriptions that would comprise the authenticity of the content.

## Accomplishments that we're proud of 🏆
Aside from completing our first project as a team, we are proud to try different APIs, learn new languages, and work with different models this weekend to help create a memorable project. 

We also feel accomplished in winning a Red Bull beer pong tournament on the first and making a strong redemption :)

## What we learned 💭
On our team, one team member learned how to use React for the first time to help bring the Figma design to life, and our three back-end members got to experience learning prompt engineering and re-ranking images with Cohere based on text. 

We also got to experiment with integrating facial recognition into our projects for the first time to help create an immersive storytelling experience and gain a further understanding of image analysis.

## What's next for ReMemories 👀
Going forward with ReMemories, we hope to continue improving the accuracy of the prompts generated with our photos to achieve a stronger sense of reliability. Some additional features we hope to include would be video formats and a social feature setting, where you can add friends and share your photo albums digitally with one another.
