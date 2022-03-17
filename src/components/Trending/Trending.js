import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Trending.css";

const TrendingGifs = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=30&rating=pg`
      )
      .then((response) => {
        console.log(response.data.data);
        const result = response.data.data;
        setGifs(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="trendingContainer">
      <h2 className="pageTitle" style={{ justifyContent: "center" }}>
        Trending GIFs
      </h2>
      <div className="gifContainer">
        {gifs.map((gif) => {
          return (
            <img
              className="gifs"
              key={gif.id}
              alt="gif"
              src={gif.images.original.url}
              width="100px"
              height="100px"
            />
          );
        })}
      </div>
    </div>
  );
};
export default TrendingGifs;
