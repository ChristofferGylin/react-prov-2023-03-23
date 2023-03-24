// 2. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.
// Varje foto ska renderas i en egen komponent.

import { useEffect, useState } from "react";
import Photo from "./Photo";

function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    if (response.ok) {
      const data = await response.json();
      data.length = 20;
      setPhotos(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {photos.map((photo) => {
        return <Photo imgSrc={photo.url} />;
      })}
    </div>
  );
}

export default App;
