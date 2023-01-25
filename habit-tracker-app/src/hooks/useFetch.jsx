import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
  };

  return [data, fetchData];
};

export default useFetch;
