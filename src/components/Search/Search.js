import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import GridLoader from "react-spinners/GridLoader";

const SearchGifs = () => {
  const [gifType, setGifType] = useState("");
  const [gifs, setGifs] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setGifType(e.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${gifType}&limit=100&offset=0&rating=pg&lang=en`
      )
      .then((response) => {
        setLoading(false);
        const result = response.data.data;
        setGifs(result);
        if (result.length > 0) {
          setMessage(`Showing ${gifType} Gif's`);
          setGifType("");
        } else {
          setMessage("No GIF's found");
          setTimeout(() => {
            setMessage("");
          }, 2000);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="searchGifs">
      <input
        className="input"
        type="text"
        placeholder="search for gifs"
        onChange={handleChange}
        onKeyDown={handleKeypress}
      />
      <button className="button" type="button" onClick={handleSubmit}>
        Go
      </button>
      <h2 className="message">{message}</h2>
      <div className="gifContainer">
        {loading ? (
          <div
            style={{
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GridLoader />
          </div>
        ) : gifs.length > 0 ? (
          <>
            {gifs.map((gif) => {
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
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};
export default SearchGifs;
