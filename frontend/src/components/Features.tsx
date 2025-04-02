
import React, { useState } from 'react';
import { 
  Sparkles, 
  DollarSign, 
  RefreshCw, 
  Cloud, 
  Hotel, 
  Plane, 
  Calendar 
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Dynamic Itinerary Updates",
    description: "Real-time adjustments based on changing travel conditions, preferences, or unexpected events.",
    color: "bg-travel-teal"
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Smart algorithms to maximize your experience while respecting your budget constraints.",
    color: "bg-travel-orange"
  },
  {
    icon: RefreshCw,
    title: "Real-Time Data Integration",
    description: "Constantly updated information from across the web to keep your plans current.",
    color: "bg-travel-blue"
  },
  {
    icon: Cloud,
    title: "Weather Forecasting",
    description: "Intelligent weather predictions integrated into your daily activities planning.",
    color: "bg-travel-coral"
  },
  {
    icon: Hotel,
    title: "Accommodation Matching",
    description: "Find perfect stays that match your preferences, style, and budget requirements.",
    color: "bg-travel-blue"
  },
  {
    icon: Plane,
    title: "Flight Tracking",
    description: "Real-time flight information and alerts to keep your journey on track.",
    color: "bg-travel-teal"
  },
  {
    icon: Calendar,
    title: "Event Recommendations",
    description: "Discover local events and attractions happening during your travel dates.",
    color: "bg-travel-orange"
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState('bus');
  const [busDetails, setBusDetails] = useState({
    pickup: '',
    destination: '',
    date: ''
  });
  const [flightDetails, setFlightDetails] = useState({
    departureAirport: '',
    arrivalAirport: '',
    travelDate: ''
  });
  const [hotelDetails, setHotelDetails] = useState({
    destination: '',
    checkInDate: '',
    checkOutDate: ''
  });
  // Added new state for train booking details.
  const [trainDetails, setTrainDetails] = useState({
    from: '',
    to: '',
    travelDate: '',
    travelClass: ''
  });
  
  const [availableBuses, setAvailableBuses] = useState([]);
  const [availableFlights, setAvailableFlights] = useState([]);
  const [availableHotels, setAvailableHotels] = useState([]);
  // Added new state for available trains.
  const [availableTrains, setAvailableTrains] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const handleBusDetailsChange = (e) => {
    setBusDetails({
      ...busDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleFlightDetailsChange = (e) => {
    setFlightDetails({
      ...flightDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleHotelDetailsChange = (e) => {
    setHotelDetails({
      ...hotelDetails,
      [e.target.name]: e.target.value
    });
  };

  // New handler for train booking details change.
  const handleTrainDetailsChange = (e) => {
    setTrainDetails({
      ...trainDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchBuses = () => {
    setLoading(true);
    // Simulate an API call for bus search
    setTimeout(() => {
      const mockBuses = [
        { busNumber: "A123", departure: "10:00 AM", arrival: "2:00 PM", price: "$25" },
        { busNumber: "B456", departure: "12:00 PM", arrival: "4:00 PM", price: "$20" },
        { busNumber: "C789", departure: "3:00 PM", arrival: "7:00 PM", price: "$30" }
      ];
      setAvailableBuses(mockBuses);
      setLoading(false);
    }, 2000);
  };

  const handleSearchFlights = () => {
    setLoading(true);
    // Simulate an API call for flight search
    setTimeout(() => {
      const mockFlights = [
        { flightNumber: "FL123", departureTime: "8:00 AM", arrivalTime: "12:00 PM", price: "$200" },
        { flightNumber: "FL456", departureTime: "10:00 AM", arrivalTime: "2:00 PM", price: "$180" },
        { flightNumber: "FL789", departureTime: "1:00 PM", arrivalTime: "5:00 PM", price: "$250" }
      ];
      setAvailableFlights(mockFlights);
      setLoading(false);
    }, 2000);
  };

  const handleSearchHotels = () => {
    setLoading(true);
    // Simulate an API call for hotel search
    setTimeout(() => {
      const mockHotels = [
        { hotelName: "Hotel Sunshine", location: "New York", price: "$150/night", rating: "4.5/5" },
        { hotelName: "Beach Resort", location: "Miami", price: "$200/night", rating: "4.7/5" },
        { hotelName: "City Inn", location: "Los Angeles", price: "$120/night", rating: "4.2/5" }
      ];
      setAvailableHotels(mockHotels);
      setLoading(false);
    }, 2000);
  };

  // New handler for train booking search.
  const handleSearchTrains = () => {
    setLoading(true);
    // Simulate an API call for train search
    setTimeout(() => {
      const mockTrains = [
        { trainNumber: "TR123", departureTime: "9:00 AM", arrivalTime: "1:00 PM", travelClass: "AC", price: "$50" },
        { trainNumber: "TR456", departureTime: "11:00 AM", arrivalTime: "3:00 PM", travelClass: "Sleeper", price: "$30" },
        { trainNumber: "TR789", departureTime: "2:00 PM", arrivalTime: "6:00 PM", travelClass: "AC", price: "$55" }
      ];
      setAvailableTrains(mockTrains);
      setLoading(false);
    }, 2000);
  };

  const renderBookingContent = () => {
    switch (activeTab) {
      case 'bus':
        return (
          <div>
            <h3 className="text-xl mb-4">Search for Buses</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchBuses();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Pick-Up Point</label>
                <input
                  type="text"
                  name="pickup"
                  value={busDetails.pickup}
                  onChange={handleBusDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter pick-up point"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={busDetails.destination}
                  onChange={handleBusDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter destination"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Date of Journey</label>
                <input
                  type="date"
                  name="date"
                  value={busDetails.date}
                  onChange={handleBusDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-travel-teal text-white rounded-lg"
              >
                {loading ? 'Searching...' : 'Search Buses'}
              </button>
            </form>
            {availableBuses.length > 0 && !loading && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Available Buses</h4>
                <ul className="mt-4 space-y-4">
                  {availableBuses.map((bus, index) => (
                    <li key={index} className="border p-4 rounded-lg">
                      <div><strong>Bus Number:</strong> {bus.busNumber}</div>
                      <div><strong>Departure:</strong> {bus.departure}</div>
                      <div><strong>Arrival:</strong> {bus.arrival}</div>
                      <div><strong>Price:</strong> {bus.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'flight':
        return (
          <div>
            <h3 className="text-xl mb-4">Search for Flights</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchFlights();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Departure Airport</label>
                <input
                  type="text"
                  name="departureAirport"
                  value={flightDetails.departureAirport}
                  onChange={handleFlightDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter departure airport"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Arrival Airport</label>
                <input
                  type="text"
                  name="arrivalAirport"
                  value={flightDetails.arrivalAirport}
                  onChange={handleFlightDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter arrival airport"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Date of Travel</label>
                <input
                  type="date"
                  name="travelDate"
                  value={flightDetails.travelDate}
                  onChange={handleFlightDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-travel-teal text-white rounded-lg"
              >
                {loading ? 'Searching...' : 'Search Flights'}
              </button>
            </form>
            {availableFlights.length > 0 && !loading && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Available Flights</h4>
                <ul className="mt-4 space-y-4">
                  {availableFlights.map((flight, index) => (
                    <li key={index} className="border p-4 rounded-lg">
                      <div><strong>Flight Number:</strong> {flight.flightNumber}</div>
                      <div><strong>Departure Time:</strong> {flight.departureTime}</div>
                      <div><strong>Arrival Time:</strong> {flight.arrivalTime}</div>
                      <div><strong>Price:</strong> {flight.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'hotel':
        return (
          <div>
            <h3 className="text-xl mb-4">Search for Hotels</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchHotels();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={hotelDetails.destination}
                  onChange={handleHotelDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter destination"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Check-In Date</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={hotelDetails.checkInDate}
                  onChange={handleHotelDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Check-Out Date</label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={hotelDetails.checkOutDate}
                  onChange={handleHotelDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-travel-teal text-white rounded-lg"
              >
                {loading ? 'Searching...' : 'Search Hotels'}
              </button>
            </form>
            {availableHotels.length > 0 && !loading && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Available Hotels</h4>
                <ul className="mt-4 space-y-4">
                  {availableHotels.map((hotel, index) => (
                    <li key={index} className="border p-4 rounded-lg">
                      <div><strong>Hotel Name:</strong> {hotel.hotelName}</div>
                      <div><strong>Location:</strong> {hotel.location}</div>
                      <div><strong>Price:</strong> {hotel.price}</div>
                      <div><strong>Rating:</strong> {hotel.rating}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'train':
        return (
          <div>
            <h3 className="text-xl mb-4">Search for Trains</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchTrains();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">From</label>
                <input
                  type="text"
                  name="from"
                  value={trainDetails.from}
                  onChange={handleTrainDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter origin"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">To</label>
                <input
                  type="text"
                  name="to"
                  value={trainDetails.to}
                  onChange={handleTrainDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter destination"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Travel Date</label>
                <input
                  type="date"
                  name="travelDate"
                  value={trainDetails.travelDate}
                  onChange={handleTrainDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Class</label>
                <input
                  type="text"
                  name="travelClass"
                  value={trainDetails.travelClass}
                  onChange={handleTrainDetailsChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter class (e.g., AC, Sleeper)"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-travel-teal text-white rounded-lg"
              >
                {loading ? 'Searching...' : 'Search Trains'}
              </button>
            </form>
            {availableTrains.length > 0 && !loading && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold">Available Trains</h4>
                <ul className="mt-4 space-y-4">
                  {availableTrains.map((train, index) => (
                    <li key={index} className="border p-4 rounded-lg">
                      <div><strong>Train Number:</strong> {train.trainNumber}</div>
                      <div><strong>Departure Time:</strong> {train.departureTime}</div>
                      <div><strong>Arrival Time:</strong> {train.arrivalTime}</div>
                      <div><strong>Class:</strong> {train.travelClass}</div>
                      <div><strong>Price:</strong> {train.price}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      default:
        return <div>Select a booking option</div>;
    }
  };

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Powerful AI-Driven Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform leverages cutting-edge AI to create seamless, personalized travel experiences.
          </p>
        </div>

        {/* Sub-navigation (Tabs) */}
        <div className="mb-8 text-center">
          <nav className="inline-flex space-x-4">
            <button
              className={`px-4 py-2 font-medium text-sm rounded-lg ${activeTab === 'bus' ? 'bg-travel-teal text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('bus')}
            >
              Bus Booking
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm rounded-lg ${activeTab === 'flight' ? 'bg-travel-teal text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('flight')}
            >
              Flight Booking
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm rounded-lg ${activeTab === 'hotel' ? 'bg-travel-teal text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('hotel')}
            >
              Hotel Booking
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm rounded-lg ${activeTab === 'train' ? 'bg-travel-teal text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('train')}
            >
              Train Booking
            </button>
          </nav>
        </div>

        {/* Render the content based on the active tab */}
        <div className="mb-16">
          {renderBookingContent()}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="travel-card p-6 hover:border-l-4 hover:border-l-travel-teal transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

