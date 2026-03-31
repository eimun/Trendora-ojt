import os
from google import genai
from google.genai import types

# Initialize the Gemini Client
api_key = os.getenv("GEMINI_API_KEY")

try:
    if api_key:
        client = genai.Client(api_key=api_key)
    else:
        client = None
        print("⚠️ GEMINI_API_KEY not found in environment variables. AI features will be disabled.")
except Exception as e:
    client = None
    print(f"⚠️ Failed to initialize Gemini Client: {e}")

def generate_trend_summary(keyword, niche, volume, velocity):
    """
    Generate a 2-3 sentence insight about why a trend is currently popular.
    """
    if not client:
        return "AI analysis is currently unavailable because the Gemini API key is missing."

    prompt = f"""
    You are an expert data analyst and trend forecaster. 
    A topic just started trending on the internet: "{keyword}".
    It is categorized under "{niche}", has an estimated {volume} searches, and its momentum is "{velocity}".
    
    In a concise, engaging way (exactly 2-3 sentences), explain *why* this might be trending right now 
    and what this data indicates about current consumer/audience interest. 
    Do not use any markdown formatting, asterisks, or bullet points. Just plain text.
    """

    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                temperature=0.7,
            )
        )
        return response.text
    except Exception as e:
        print(f"❌ Error generating AI summary for {keyword}: {e}")
        return "We couldn't generate an AI summary for this trend at the moment. Please try again later."
