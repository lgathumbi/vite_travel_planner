import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userId, setUserId] = useState(''); 
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch("/api/itineraries");
        const data = await response.json();
        setItineraries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItinerary = {
      title,
      start_date: startDate,
      end_date: endDate,
      user_id: userId,
    };

    try {
      const response = await fetch("/api/itineraries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItinerary),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Itinerary created successfully!");
        setItineraries((prevItineraries) => [...prevItineraries, data]); 
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error posting itinerary:", error);
      setMessage("An error occurred while adding your itinerary.");
    }
  };

  return (
    <>
      <Header />

      <main>
        <h2>Itineraries</h2>

        {/* Add Itinerary Form */}
        <section className="add-itinerary">
          <h3>Create New Itinerary</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="userId">User ID:</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <button type="submit">Create Itinerary</button>
          </form>
          {message && <p>{message}</p>}
        </section>

        {/* Display Itinerary List */}
        <section className="itinerary-list">
          <h3>Existing Itineraries</h3>
          {loading ? (
            <p>Loading itineraries...</p>
          ) : (
            <ul>
              {itineraries.map((itinerary) => (
                <li key={itinerary.id}>
                  <h5>{itinerary.title}</h5>
                  <p>{`Start Date: ${itinerary.start_date} | End Date: ${itinerary.end_date}`}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Itineraries;
