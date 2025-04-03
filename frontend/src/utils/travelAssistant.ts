
// Travel Assistant Utility Functions

interface TravelInfo {
  destination?: string;
  dates?: string;
  interests?: string[];
  budget?: string;
  travelers?: number;
  accommodation?: string;
  transportation?: string;
}

// Extract travel information from user messages
export const extractTravelInfo = (message: string): Partial<TravelInfo> => {
  const info: Partial<TravelInfo> = {};
  
  // Extract destination
  const destinationMatch = message.match(/(?:to|in|visiting|trip to|travel to|going to)\s+([A-Za-z\s,]+?)(?:\s+from|\s+in|\s+on|\s+next|\s+for|\.|$)/i);
  if (destinationMatch && destinationMatch[1]) {
    info.destination = destinationMatch[1].trim();
  }
  
  // Extract dates
  const dateMatch = message.match(/(?:from|between|on)\s+((?:\d{1,2}(?:st|nd|rd|th)?\s+)?(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:\s+\d{1,2}(?:st|nd|rd|th)?)?(?:\s*-\s*|\s+to\s+)(?:\d{1,2}(?:st|nd|rd|th)?\s+)?(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:\s+\d{1,2}(?:st|nd|rd|th)?)?|\d{1,2}\/\d{1,2}(?:\s*-\s*|\s+to\s+)\d{1,2}\/\d{1,2})/i);
  if (dateMatch && dateMatch[1]) {
    info.dates = dateMatch[1].trim();
  }
  
  // Extract interests
  const interestKeywords = [
    'adventure', 'hiking', 'nature', 'outdoors', 'wildlife',
    'culture', 'history', 'museums', 'architecture', 'art',
    'food', 'culinary', 'dining', 'gastronomy', 'restaurants',
    'relaxation', 'beaches', 'spa', 'resorts', 'luxury',
    'nightlife', 'parties', 'clubs', 'bars', 'entertainment',
    'shopping', 'markets', 'malls', 'boutiques', 'fashion',
    'photography', 'scenic', 'landscapes', 'views', 'sightseeing'
  ];
  
  const foundInterests = interestKeywords.filter(interest => 
    new RegExp(`\\b${interest}\\b`, 'i').test(message)
  );
  
  if (foundInterests.length > 0) {
    info.interests = foundInterests;
  }
  
  // Extract budget info
  const budgetMatch = message.match(/(?:budget|spend|cost|price|affordable|expensive|luxury|cheap)\s+(?:of|around|about|is)?\s*\$?(\d+(?:,\d+)?(?:\.\d+)?)\s*(?:to|-)?\s*\$?(\d+(?:,\d+)?(?:\.\d+)?)?/i);
  if (budgetMatch) {
    if (budgetMatch[2]) {
      info.budget = `$${budgetMatch[1]} - $${budgetMatch[2]}`;
    } else if (budgetMatch[1]) {
      info.budget = `$${budgetMatch[1]}`;
    }
  } else if (/budget friendly|low budget|cheap|affordable/.test(message)) {
    info.budget = "Budget friendly";
  } else if (/luxury|expensive|high-end|premium/.test(message)) {
    info.budget = "Luxury";
  }
  
  // Extract number of travelers
  const travelersMatch = message.match(/(\d+)\s+(?:people|person|travelers|travellers|adults|guests|friends|family members)/i);
  if (travelersMatch && travelersMatch[1]) {
    info.travelers = parseInt(travelersMatch[1]);
  }
  
  return info;
};

// Generate response based on travel information
export const generateTravelResponse = (info: Partial<TravelInfo>): string => {
  if (!info.destination) {
    return "I'd be happy to help plan your trip! Could you tell me where you'd like to travel to?";
  }
  
  let response = `Great choice! I'd love to help you plan your trip to ${info.destination}.`;
  
  if (!info.dates) {
    response += " When are you planning to travel?";
    return response;
  }
  
  response += ` I see you're planning to visit ${info.destination} during ${info.dates}.`;
  
  // Add interest-based recommendations
  if (info.interests && info.interests.length > 0) {
    response += "\n\n📍 Based on your interests, here are some recommendations:";
    
    if (info.interests.some(i => ['history', 'culture', 'museums', 'architecture'].includes(i))) {
      response += "\n• Visit the most famous historical sites and museums";
    }
    
    if (info.interests.some(i => ['food', 'culinary', 'dining', 'gastronomy'].includes(i))) {
      response += "\n• Try local cuisine at authentic restaurants";
    }
    
    if (info.interests.some(i => ['nature', 'outdoors', 'hiking', 'landscapes'].includes(i))) {
      response += "\n• Explore natural attractions and hiking trails";
    }
    
    if (info.interests.some(i => ['relaxation', 'beaches', 'spa', 'resorts'].includes(i))) {
      response += "\n• Spend time at relaxing spots and wellness centers";
    }
  } else {
    response += "\n\nWhat kinds of activities interest you most? (e.g., history, food, nature, relaxation)";
  }
  
  // Add budget recommendations
  if (info.budget) {
    response += `\n\n💰 For your ${info.budget} budget, I recommend:`;
    if (info.budget.includes("Budget friendly") || parseInt(info.budget.replace(/[^0-9]/g, "")) < 1000) {
      response += "\n• Affordable accommodations like hostels or guest houses";
      response += "\n• Local street food and budget-friendly restaurants";
      response += "\n• Free or low-cost attractions and public transportation";
    } else if (info.budget.includes("Luxury") || parseInt(info.budget.replace(/[^0-9]/g, "")) > 5000) {
      response += "\n• Luxury hotels and resorts with premium amenities";
      response += "\n• Fine dining experiences at top-rated restaurants";
      response += "\n• Private tours and exclusive experiences";
    } else {
      response += "\n• Mid-range hotels with good location and reviews";
      response += "\n• Mix of local eateries and nicer restaurants";
      response += "\n• Balanced approach to paid attractions and activities";
    }
  }
  
  // Add traveler-specific advice
  if (info.travelers) {
    if (info.travelers === 1) {
      response += "\n\n👤 For solo travel, I suggest:";
      response += "\n• Staying at social hostels to meet other travelers";
      response += "\n• Joining group tours for certain activities";
      response += "\n• Being extra mindful of safety, especially at night";
    } else if (info.travelers === 2) {
      response += "\n\n👫 For traveling as a pair:";
      response += "\n• Romantic restaurants and activities";
      response += "\n• Private tours for a more intimate experience";
    } else if (info.travelers > 2) {
      response += `\n\n👪 For your group of ${info.travelers}:`;
      response += "\n• Look into vacation rentals which may be more cost-effective";
      response += "\n• Pre-book activities that can accommodate larger groups";
      response += "\n• Consider group discounts for tours and attractions";
    }
  }
  
  response += "\n\nWould you like me to create a detailed day-by-day itinerary based on this information?";
  
  return response;
};

// Generate example itinerary for popular destinations
export const generateSampleItinerary = (destination: string): string => {
  const destinations: Record<string, string> = {
    "paris": `📍 Day 1: Eiffel Tower, Seine River Cruise, and dinner at a local bistro
📍 Day 2: Louvre Museum (morning), Notre-Dame Cathedral (afternoon), and evening walk in Le Marais
📍 Day 3: Montmartre, Sacré-Cœur, and macaron tasting tour
📍 Day 4: Day trip to Versailles Palace and Gardens
📍 Day 5: Arc de Triomphe, Champs-Élysées, and farewell dinner at a classic French restaurant

🍽️ Recommended eateries: Café de Flore, L'As du Fallafel in Le Marais, Angelina for hot chocolate
🚇 Travel Tip: Buy a Paris Visite pass for unlimited metro rides!`,

    "tokyo": `📍 Day 1: Explore Shibuya (Crossing, Hachiko Statue) and evening in Shinjuku
📍 Day 2: Visit Senso-ji Temple, Nakamise Shopping Street, and Tokyo Skytree
📍 Day 3: Meiji Shrine, Harajuku, and Omotesando
📍 Day 4: Tsukiji Outer Market, Ginza shopping district, and Tokyo Tower
📍 Day 5: Day trip to either Kamakura or Hakone

🍽️ Must-try food spots: Tsukiji for fresh sushi, Ichiran Ramen, department store food halls
🚅 Travel Tip: Get a PASMO card for easy travel on trains and buses!`,

    "new york": `📍 Day 1: Times Square, Broadway show, and dinner in Hell's Kitchen
📍 Day 2: Statue of Liberty, Ellis Island, and Wall Street
📍 Day 3: Central Park, Metropolitan Museum of Art, and Upper East Side
📍 Day 4: Brooklyn Bridge, DUMBO, and Brooklyn Heights
📍 Day 5: High Line, Chelsea Market, and Greenwich Village

🍽️ Food recommendations: Katz's Delicatessen, Chelsea Market food stalls, Levain Bakery for cookies
🚇 Travel Tip: Get a 7-day unlimited MetroCard for subway and bus travel!`,

    "rome": `📍 Day 1: Colosseum, Roman Forum, and Palatine Hill
📍 Day 2: Vatican Museums, St. Peter's Basilica, and evening in Trastevere
📍 Day 3: Trevi Fountain, Spanish Steps, and Villa Borghese Gardens
📍 Day 4: Day trip to Pompeii or Tivoli Gardens
📍 Day 5: Campo de' Fiori market, Jewish Ghetto, and farewell dinner

🍽️ Where to eat: Roscioli Salumeria, Pizzarium for pizza al taglio, gelato at Fatamorgana
🚌 Travel Tip: Buy the Roma Pass for skip-the-line entry to major attractions!`
  };

  // Normalize the destination string for lookup
  const normalizedDestination = destination.toLowerCase();
  
  // Check for partial matches in destination keys
  for (const key in destinations) {
    if (normalizedDestination.includes(key) || key.includes(normalizedDestination)) {
      return destinations[key];
    }
  }
  
  // Generic response for destinations not in our database
  return `I'd be happy to create a custom itinerary for ${destination}! Could you share more about your interests (history, food, nature, etc.) and what you're most excited to experience there?`;
};
