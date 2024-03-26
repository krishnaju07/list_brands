import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const url = 'https://dummyjson.com/products';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.products))
      .catch((err) => console.log(err));
  }

  console.log(data);

  return (
    <div>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value.brand}</li>
        ))}
      </ul>
    </div>
  );
}
