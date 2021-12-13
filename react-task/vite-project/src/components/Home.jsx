import React, { useState, useEffect } from "react";

const Home = () => {
  // States
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  // Fetching data from APi
  const fetchData = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data;
        // Shuffling data with random numbers
        let randomNumber = Math.floor(Math.random() * data.length);
        let randomQuote = dataQuotes[randomNumber];
        setQuotes(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  return (
    // Rendering items
    <div className="home">
      <h2>{quotes}</h2>
      <button onClick={fetchData}>Next quote</button>
      <h3 className="author">{author}</h3>
    </div>
  );
};

export default Home;
