import React, { useState, useEffect } from "react";

const Quote = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, signal) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(url, { signal });
      const resData = await response.json();
      setPosts(resData);
      console.log(posts.quote);
    } catch (err) {
      console.log("Error message: " + err.message);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData("https://api.goprogram.ai/inspiration", controller.signal);
  }, []);

  return (
    <>
      <h3>Quote of the Day</h3>
      <span>{posts ? `"${posts.quote}" ~` + posts.author : ""}</span>
    </>
  );
};

export default Quote;
