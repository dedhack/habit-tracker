import React, { useState, useEffect } from "react";

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
    <>
      <h3>Quote of the Day</h3>
      {isLoading ? (
        <span>Loading ...</span>
      ) : (
        <span>{posts ? `"${posts.quote}" ~` + posts.author : ""}</span>
      )}
    </>
  );
};

export default Quote;
