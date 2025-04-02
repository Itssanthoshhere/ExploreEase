
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Map } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PlanTripChatbot = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    { text: "Tell us about your dream destination, and our AI will craft a personalized itinerary just for you.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        text: "Thanks for sharing! Our AI is working on your itinerary. You'll receive suggestions soon.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="plan-trip" className="py-20 bg-gradient-to-br from-travel-blue/5 to-travel-teal/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Plan Your Perfect Trip
          </h2>
          <p className="text-lg text-gray-600 mt-2">Start chatting with our AI travel planner!</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 h-[500px] flex flex-col bg-white shadow-lg">
          <div className="flex-1 overflow-y-auto space-y-4 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 max-w-xs rounded-lg ${msg.sender === "user" ? "bg-travel-teal text-white self-end" : "bg-gray-100 text-gray-800 self-start"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="relative mt-4 flex items-center">
            <Map className="absolute left-3 h-5 w-5 text-gray-400" />
            <Input
              className="pl-10 pr-12"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <Button
              className="absolute right-2"
              onClick={handleSend}
              disabled={loading}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTripChatbot;








// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { 
//   Calendar as CalendarIcon, 
//   Clock,
//   DollarSign,
//   Users,
//   Map,
//   Heart,
//   Sparkles
// } from 'lucide-react';
// import { Slider } from "@/components/ui/slider";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";

// const interests = [
//   "Beaches", "Mountains", "Historical", "Food & Drink", 
//   "Adventure", "Cultural", "Relaxation", "Nightlife"
// ];

// const PlanTripSection = () => {
//   const { toast } = useToast();
//   const [loading, setLoading] = useState(false);
//   const [budget, setBudget] = useState([1500]);
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

//   const toggleInterest = (interest: string) => {
//     if (selectedInterests.includes(interest)) {
//       setSelectedInterests(selectedInterests.filter(i => i !== interest));
//     } else {
//       setSelectedInterests([...selectedInterests, interest]);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate AI planning process
//     setTimeout(() => {
//       setLoading(false);
//       toast({
//         title: "Trip planning started!",
//         description: "Our AI is creating your personalized itinerary. Check your email shortly.",
//         variant: "default",
//       });
//     }, 2000);
//   };

//   return (
//     <section id="plan-trip" className="py-20 bg-gradient-to-br from-travel-blue/5 to-travel-teal/5">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
//             Plan Your Perfect Trip
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Tell us about your dream destination, and our AI will craft a personalized itinerary just for you.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="travel-card p-8 md:p-10">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <Label htmlFor="destination" className="text-sm font-medium text-gray-700 mb-1">
//                     Where do you want to go?
//                   </Label>
//                   <div className="relative">
//                     <Map className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <Input
//                       id="destination"
//                       placeholder="City, Country, or Region"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="dates" className="text-sm font-medium text-gray-700 mb-1">
//                     When are you traveling?
//                   </Label>
//                   <div className="relative">
//                     <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <Input
//                       id="dates"
//                       placeholder="Select dates"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="travelers" className="text-sm font-medium text-gray-700 mb-1">
//                     Number of Travelers
//                   </Label>
//                   <div className="relative">
//                     <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <Input
//                       id="travelers"
//                       type="number"
//                       min="1"
//                       defaultValue="2"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1">
//                     Trip Duration (days)
//                   </Label>
//                   <div className="relative">
//                     <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                     <Input
//                       id="duration"
//                       type="number"
//                       min="1"
//                       defaultValue="7"
//                       className="pl-10"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <Label className="text-sm font-medium text-gray-700 mb-3 flex items-center">
//                   <DollarSign className="h-5 w-5 mr-1" />
//                   Budget: ${budget[0]}
//                 </Label>
//                 <Slider
//                   value={budget}
//                   onValueChange={setBudget}
//                   max={10000}
//                   min={500}
//                   step={100}
//                   className="py-4"
//                 />
//                 <div className="flex justify-between text-sm text-gray-500 mt-2">
//                   <span>$500</span>
//                   <span>$10,000+</span>
//                 </div>
//               </div>
              
//               <div>
//                 <Label className="text-sm font-medium text-gray-700 mb-3 flex items-center">
//                   <Heart className="h-5 w-5 mr-1" />
//                   Travel Interests
//                 </Label>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest) => (
//                     <button
//                       key={interest}
//                       type="button"
//                       onClick={() => toggleInterest(interest)}
//                       className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                         selectedInterests.includes(interest)
//                           ? 'bg-travel-teal text-white'
//                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                       }`}
//                     >
//                       {interest}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <Button 
//                 type="submit" 
//                 className="gradient-button w-full text-lg py-6 group"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <span className="flex items-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Creating Your Perfect Itinerary...
//                   </span>
//                 ) : (
//                   <span className="flex items-center">
//                     Generate My AI Travel Plan
//                     <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlanTripSection;



