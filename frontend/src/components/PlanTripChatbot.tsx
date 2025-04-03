
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Map } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { extractTravelInfo, generateTravelResponse, generateSampleItinerary } from "@/utils/travelAssistant";

const PlanTripChatbot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm ExploreEase AI, your personal travel assistant. Tell me about your dream destination, and I'll help craft a personalized itinerary just for you.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [travelInfo, setTravelInfo] = useState<any>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Process user message and generate AI response
    setTimeout(() => {
      // Extract travel information from the user's message
      const extractedInfo = extractTravelInfo(input);
      
      // Update the travel info state with new information
      const updatedTravelInfo = { ...travelInfo, ...extractedInfo };
      setTravelInfo(updatedTravelInfo);
      
      let botResponse;
      
      // Check if the message mentions "itinerary" and we have a destination
      if (input.toLowerCase().includes("itinerary") && updatedTravelInfo.destination) {
        botResponse = {
          text: `Here's a sample itinerary for ${updatedTravelInfo.destination}:\n\n${generateSampleItinerary(updatedTravelInfo.destination)}`,
          sender: "bot"
        };
      } else {
        // Generate a response based on the updated travel information
        botResponse = {
          text: generateTravelResponse(updatedTravelInfo),
          sender: "bot"
        };
      }
      
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
      
      // Show a toast for destinations with detailed information
      const popularDestinations = ["paris", "tokyo", "new york", "rome"];
      if (extractedInfo.destination && 
          popularDestinations.some(dest => 
            extractedInfo.destination?.toLowerCase().includes(dest)
          )) {
        toast({
          title: `${extractedInfo.destination} is a great choice!`,
          description: "I've prepared some personalized recommendations for you.",
        });
      }
    }, 1500);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section id="plan-trip" className="py-20 bg-gradient-to-br from-travel-blue/5 to-travel-teal/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-travel-blue to-travel-teal bg-clip-text text-transparent">
            Plan Your Perfect Trip
          </h2>
          <p className="text-lg text-gray-600 mt-2">Chat with our AI travel planner to create your dream vacation!</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 h-[500px] flex flex-col bg-white shadow-lg">
          <div className="flex-1 overflow-y-auto space-y-4 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.sender === "user" 
                    ? "bg-travel-teal text-white ml-auto max-w-[80%]" 
                    : "bg-gray-100 text-gray-800 mr-auto max-w-[80%]"
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="relative mt-4 flex items-center">
            <Map className="absolute left-3 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 pr-14"
              placeholder="Tell me about your trip plans..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              onKeyPress={handleKeyPress}
            />
            <Button
              className="absolute right-2"
              size="icon"
              onClick={handleSend}
              disabled={loading}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          {loading && (
            <div className="text-center text-xs text-gray-500 mt-2">
              ExploreEase AI is thinking...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanTripChatbot;
