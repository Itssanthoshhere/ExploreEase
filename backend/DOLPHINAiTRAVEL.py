import requests

# 🔹 Replace with your actual OpenRouter API key
OPENROUTER_API_KEY = "Replace API key"

def get_travel_plan(destination, days, interests, budget):
    """Generates a structured travel itinerary based on user preferences using OpenRouter API."""
    
    # Friendly introduction
    prompt = ( 
        f"Hello, I am EXPLOAI, your AI Travel Assistant! 😊\n"
        f"Let's create an amazing {days}-day travel itinerary for {destination}. 🌍✈️\n\n"
        f"I'll focus on your interests: {', '.join(interests)} 🎯\n"
        f"Budget: {budget} INR 💰\n\n"
        "Your itinerary will include:\n"
        "- Morning, afternoon, evening, and night activities\n"
        "- Recommended local food options 🍽️\n"
        "- Estimated costs for each activity 💵\n"
        "- Travel tips, must-visit places, and travel methods 🚖🚇\n\n"
        "Format:\n"
        "Day 1:\n- Morning: [Activity]\n- Afternoon: [Activity]\n- Evening: [Activity]\n- Night: [Activity]\n- Food Recommendations: [Food]\n- Estimated Cost: [Cost]\n\n"
        "Repeat this format for all days."
    )

    # OpenRouter API request
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "google/gemma-3-4b-it:free",  # ✅ Updated model
        "messages": [{"role": "user", "content": prompt}]
    }

    try:
        response = requests.post(url, headers=headers, json=payload)

        # ✅ Debugging: Print raw response
        print("\n🔹 API Raw Response:", response.text, "\n")

        response_data = response.json()  # Convert response to JSON

        # ✅ Ensure valid response
        if response_data and "choices" in response_data:
            choices = response_data.get("choices", [])
            if choices:
                return choices[0].get("message", {}).get("content", "⚠️ No content received from API.")
            else:
                return "⚠️ Error: API returned an empty 'choices' list."
        else:
            return "⚠️ Error: Unexpected response format from OpenRouter API."

    except Exception as e:
        return f"❌ Error: {e}"

# Friendly welcome message
print("🌟 Welcome, traveler! I’m EXPLOAI, your personal AI travel guide. 🌍✈️")
print("Let’s craft the perfect trip for you! Just answer a few questions. 😊\n")

# Example Usage
destination = input("Enter your destination: ")
days = int(input("Enter number of days: "))  
interests = input("Enter your interests (comma-separated): ").split(',')
budget = float(input("Enter your budget (INR): "))  

# Generate and display the itinerary
itinerary = get_travel_plan(destination, days, interests, budget)
print("\n🗺️ Here’s your personalized travel itinerary! Enjoy your trip! 🚀\n")
print(itinerary)
