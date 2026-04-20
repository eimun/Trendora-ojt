import os
import sys

# Load environment variables if necessary
try:
    from dotenv import load_dotenv
    load_dotenv('backend/.env')
except:
    pass

sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

from ai_service import generate_trend_summary

def test_gemini():
    print("Testing generate_trend_summary...")
    summary = generate_trend_summary("Sensex", "Finance", 100, "stable")
    print(f"Result: {summary}")

if __name__ == "__main__":
    test_gemini()
