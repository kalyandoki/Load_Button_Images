import { useState, useEffect } from "react";
import "./index.css";
export default function LoadMoreButton() {
  const [imgData, setImgData] = useState([]);
  const [imgCount, setImgCount] = useState(8);

  const fetchImageData = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=100");
    const data = await res.json();
    console.log(data);
    setImgData(data);
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  const handleLoadButton = () => {
    setImgCount(imgCount + 10);
  };

  return (
    <>
      <h1>Load More Images</h1>
      <div className="image-container">
        {imgData.slice(0, imgCount > 8 ? imgCount : 8).map((item, index) => (
          <div key={index}>
            <img src={item.download_url} alt={item.author} className="images" />
            <p>{item.author}</p>
          </div>
        ))}
      </div>
      <div className="load">
        <button className="load-button" onClick={handleLoadButton}>
          Load More Images...
        </button>
      </div>
      {imgCount >= 100 && (
        <span className="complete">
          Achieved the milestone of completing 100 images with excellence.
        </span>
      )}
    </>
  );
}
