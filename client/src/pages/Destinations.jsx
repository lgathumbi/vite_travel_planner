import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [editDestinationId, setEditDestinationId] = useState(null); 

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("/api/destinations");
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []); 

  const handleAddDestination = async (e) => {
    e.preventDefault();

    const newDestination = { name, location };

    try {
      const response = await fetch("/api/destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDestination),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Destination created successfully!");
        setDestinations([...destinations, data]); 
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error posting destination:", error);
      setMessage("An error occurred while adding your destination.");
    }
  };

  const handleUpdateDestination = async (e) => {
    e.preventDefault();

    const updatedDestination = { name, location };

    try {
      const response = await fetch(`/api/destinations/${editDestinationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDestination),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Destination updated successfully!");
        setDestinations(destinations.map((destination) =>
          destination.id === editDestinationId ? data : destination
        ));
        setEditDestinationId(null); 
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error updating destination:", error);
      setMessage("An error occurred while updating your destination.");
    }
  };

  const handleDeleteDestination = async (destinationId) => {
    try {
      const response = await fetch(`/api/destinations/${destinationId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Destination deleted successfully!");
        setDestinations(destinations.filter((destination) => destination.id !== destinationId));
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error deleting destination:", error);
      setMessage("An error occurred while deleting your destination.");
    }
  };

  return (
    <>
      <Header />

      <main>
        <h2>Destinations</h2>

        {/* Add New Destination Form (POST request) */}
        <section className="add-destination">
          <h3>{editDestinationId ? "Edit Destination" : "Add New Destination"}</h3>
          <form
            onSubmit={editDestinationId ? handleUpdateDestination : handleAddDestination}
          >
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <button type="submit">{editDestinationId ? "Update" : "Add"} Destination</button>
          </form>
          {message && <p>{message}</p>}
        </section>

        {/* Display List of Destinations (GET request) */}
        <section className="destination-list">
          {loading ? (
            <p>Loading destinations...</p>
          ) : (
            <ul>
              {destinations.map((destination) => (
                <li key={destination.id}>
                  <h5>{destination.name}</h5>
                  <p>{`Location: ${destination.location}`}</p>
                  <button onClick={() => {
                    setEditDestinationId(destination.id);
                    setName(destination.name);
                    setLocation(destination.location);
                  }}>Edit</button>
                  <button onClick={() => handleDeleteDestination(destination.id)}>
                    Delete
                  </button>
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

export default Destinations;
