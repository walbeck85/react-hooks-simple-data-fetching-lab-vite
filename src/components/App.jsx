// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch a dog image on component mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  // Fetch logic (shared by both useEffect and button click)
  function fetchDogImage() {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching image:", err);
        setIsLoading(false);
      });
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
      <br />
      <button onClick={fetchDogImage}>Fetch New Dog</button>
    </div>
  );
}

export default App;