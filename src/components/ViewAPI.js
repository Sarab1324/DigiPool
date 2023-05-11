import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAPI() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://bhaibhopal.org/api/items/read');
      setApiData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {apiData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.category_id}</p>
          <p>{item.created}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewAPI;