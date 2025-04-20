"use strict";(()=>{var e={};e.id=677,e.ids=[677],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2048:e=>{e.exports=require("fs")},5315:e=>{e.exports=require("path")},3647:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>I,patchFetch:()=>A,requestAsyncStorage:()=>k,routeModule:()=>b,serverHooks:()=>x,staticGenerationAsyncStorage:()=>w});var i={};o.r(i),o.d(i,{POST:()=>m});var n=o(9303),r=o(8716),a=o(3131),s=o(7070);let l=require("child_process"),u=require("util");var c=o(5315),d=o.n(c),p=o(2048),y=o.n(p);let h=(0,u.promisify)(l.exec);async function m(e){try{let t=await e.json();if(t.prompt)return f(t);if(t.destination)return g(t);return s.NextResponse.json({error:"Invalid request format"},{status:400})}catch(e){return console.error("Error in AI API:",e),s.NextResponse.json({error:"Failed to process AI request"},{status:500})}}async function f(e){let t;let{prompt:o,userId:i}=e;await new Promise(e=>setTimeout(e,800));let n=o.toLowerCase();if(n.includes("plan a trip")||n.includes("travel itinerary")||n.includes("vacation plan")){let e="";for(let t of["dubai","new york","paris","tokyo","london","bali","bangkok"])if(n.includes(t)){e=t.charAt(0).toUpperCase()+t.slice(1);break}t=e?`I'd be happy to help you plan a trip to ${e}! Here's what I need to create a personalized itinerary:

1. How many days would you like to stay in ${e}?
2. What are your main interests? (e.g., history, food, adventure, relaxation, shopping)
3. What's your approximate budget for this trip?

Once you provide these details, I can create a day-by-day itinerary for you!`:"I'd love to help you plan a trip! Where would you like to go? Once you tell me the destination, I'll ask about your travel dates, interests, and budget to create a personalized itinerary."}else t=n.includes("flight")?n.includes("cheap")||n.includes("best deal")||n.includes("discount")?"To find the best flight deals, I recommend checking our Flights page where you can compare prices across different airlines. The best deals are typically found when booking 1-3 months in advance and being flexible with your travel dates. Would you like me to help you search for flights now?":"I can help you find and book flights. Could you please specify your departure city, destination, and travel dates? Our system will search across multiple airlines to find the best options for you.":n.includes("hotel")||n.includes("accommodation")||n.includes("place to stay")?"ExploreEase offers a wide range of accommodation options from budget-friendly hostels to luxury hotels. Could you tell me your destination, check-in and check-out dates, and any specific requirements (like Wi-Fi, breakfast, pool, etc.)? I'll find the perfect place for your stay!":n.includes("train")?n.includes("pnr")||n.includes("status")?"To check your train PNR status, please provide your 10-digit PNR number, and I'll fetch the latest information for you.":"I can help you book train tickets and check availability. Please provide your source station, destination station, and travel date so I can find the best options for you.":n.includes("bus")?"ExploreEase has partnered with major bus operators across the country. To book bus tickets, please specify your departure city, destination, and travel date. I'll show you the available options with prices and amenities.":n.includes("help")||n.includes("what can you do")?"I'm your ExploreEase AI assistant! I can help you with:\n\n• Booking flights, trains, hotels, and bus tickets\n• Creating personalized travel itineraries\n• Providing information about destinations\n• Checking PNR status and flight information\n• Finding the best travel deals\n\nJust let me know what you need assistance with!":n.includes("hi")||n.includes("hello")||n.includes("hey")?`Hello${"guest"!==i?" there":""}! How can I assist with your travel plans today? I can help you book flights, trains, hotels, or create a personalized travel itinerary.`:n.includes("thank")?"You're welcome! I'm here to make your travel planning and booking experience as smooth as possible. Is there anything else I can help you with today?":"I can help you with booking travel services and planning trips. Could you please provide more details about what you're looking for so I can assist you better?";return s.NextResponse.json({success:!0,response:t})}async function g(e){let{destination:t,days:o,interests:i,budget:n}=e;if(!t||!o||!i.length||!n)return s.NextResponse.json({error:"Missing required fields"},{status:400});try{i.join(","),d().join(process.cwd(),"../DOLPHINAiTRAVEL.py");let e=`
import sys
sys.path.append('${d().join(process.cwd(),"..")}')
from DOLPHINAiTRAVEL import get_travel_plan
result = get_travel_plan("${t}", ${o}, ${JSON.stringify(i)}, ${n})
print(result)
    `,r=d().join(process.cwd(),"temp_script.py");y().writeFileSync(r,e);let{stdout:a,stderr:l}=await h(`python3 ${r}`);if(y().unlinkSync(r),l){console.error("Python script error:",l);let e=v(t,o,i,n);return s.NextResponse.json({success:!0,itinerary:e})}return s.NextResponse.json({success:!0,itinerary:a})}catch(r){console.error("Error executing Python script:",r);let e=v(t,o,i,n);return s.NextResponse.json({success:!0,itinerary:e})}}function v(e,t,o,i){return`
Hello, I am EXPLOAI, your AI Travel Assistant! 😊

Here's your amazing ${t}-day travel itinerary for ${e}. 🌍✈️

I've focused on your interests: ${o.join(", ")} 🎯
Budget: ${i} INR 💰

Your detailed itinerary:

Day 1:
- Morning: Visit the famous landmarks in ${e}
- Afternoon: Explore local markets and try authentic cuisine
- Evening: Sunset view at the best viewpoint in the city
- Night: Experience local nightlife or a cultural show
- Food Recommendations: Local specialty dishes at recommended restaurants
- Estimated Cost: ₹${Math.round(.2*i).toLocaleString()}

Day 2:
- Morning: Adventure activity based on your interests
- Afternoon: Museum or historical site visit
- Evening: Shopping at popular markets
- Night: Dinner at a highly-rated restaurant
- Food Recommendations: Must-try dishes and desserts
- Estimated Cost: ₹${Math.round(.3*i).toLocaleString()}

${t>2?`
Day 3:
- Morning: Day trip to nearby attraction
- Afternoon: Leisure activity or spa
- Evening: Cultural performance or event
- Night: Rooftop dinner with city views
- Food Recommendations: Fusion cuisine experience
- Estimated Cost: ₹${Math.round(.25*i).toLocaleString()}
`:""}

${t>3?`
Day 4:
- Morning: Nature hike or city tour
- Afternoon: Visit to unique local attraction
- Evening: Sunset cruise or special activity
- Night: Fine dining experience
- Food Recommendations: Award-winning restaurants
- Estimated Cost: ₹${Math.round(.25*i).toLocaleString()}
`:""}

Travel Tips:
- Best time to visit major attractions is early morning
- Use local transportation for an authentic experience
- Don't miss the local specialties marked in the food recommendations
- Book accommodations in the central area for convenience

Would you like me to provide more details about any specific day or activity?
  `}let b=new n.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/ai-planner/route",pathname:"/api/ai-planner",filename:"route",bundlePath:"app/api/ai-planner/route"},resolvedPagePath:"D:\\project\\explore_ease\\explore ease\\exploreease\\src\\app\\api\\ai-planner\\route.ts",nextConfigOutput:"export",userland:i}),{requestAsyncStorage:k,staticGenerationAsyncStorage:w,serverHooks:x}=b,I="/api/ai-planner/route";function A(){return(0,a.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:w})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),i=t.X(0,[276,972],()=>o(3647));module.exports=i})();