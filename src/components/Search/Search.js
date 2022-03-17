import axios from "axios";
import React, { useState } from "react";
import "./Search.css";

const SearchGifs = () => {
  const [gifType, setGifType] = useState("");
  const [gifs, setGifs] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setGifType(e.target.value);
  };

  const handleSubmit = () => {
    console.log("searching");
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${gifType}&limit=30&offset=0&rating=pg&lang=en`
      )
      .then((response) => {
        // console.log(response.data.data);
        const result = response.data.data;
        if (result.length > 0) {
          setMessage(`Showing ${gifType} Gif's`);
          setGifs(result);
          setGifType("");
        } else {
          setMessage("No GIF's found");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="searchGifs">
      <input
        className="input"
        type="text"
        placeholder="search for gifs"
        onChange={handleChange}
      />
      <button className="button" type="button" onClick={handleSubmit}>
        Go
      </button>
      <div className="gifContainer">
        {gifs.length > 0 ? (
          ((<h2 className="message">{message}</h2>),
          gifs.map((gif) => {
            return (
              <img
                className="gifs"
                key={gif.id}
                alt="gif"
                src={gif.images.original.url}
                width="10%"
                height="10%"
              />
            );
          }))
        ) : (
          <h2 className="message">{message}</h2>
        )}
      </div>
    </div>
  );
};
export default SearchGifs;
