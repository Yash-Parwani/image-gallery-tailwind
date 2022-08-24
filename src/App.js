import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {


  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");
  const fetchdata = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    );
    const data = await response.json();
    console.log(data.hits);
    setImages(data.hits);
    setLoading(false);
  };
  useEffect(() => {
    fetchdata();
  }, [term]);
  return (
    <div className="App container">
      <ImageSearch setterm = {setTerm}/>
      {!loading && images.length == 0 && <h1 className='mx-auto my-auto font-bold'>No pictures available for the given key </h1>}
      {loading ? <h1>Loading ....</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>} 
      
    </div>
  );
}

export default App;
