import React, { useState, useEffect } from "react";
// import inspiring from "path/to/inspiring.svg";

const Quote = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (url, signal) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(url, { signal });
      const resData = await response.json();
      setPosts(resData);
      setIsLoading(false);
    } catch (err) {
      console.log("Error message: " + err.message);
      setError(err.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData("https://api.goprogram.ai/inspiration", controller.signal);
  }, []);

  return (
    <div className="card bg">
      <img className="card-img-top" src="src/assets/inspiring.svg"></img>
      <div className="card-body m-3">
        <h3 className="card-title">Inspiration</h3>
        <div className="card-text">
          {isLoading ? (
            <span>Loading ...</span>
          ) : (
            <span>{posts ? `"${posts.quote}" ~` + posts.author : ""}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;
