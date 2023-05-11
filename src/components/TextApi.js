
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function TextApi() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('http://bhaibhopal.org/api/items/read')
        .then(response => setItems(response.data.items))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h1>Items List</h1>
        <ul>
          {items.map(item => <li key={item.id}>
            <img width={100} src={item.image} alt="" /> 
            name: {item.name}
            desc: {item.description}
            price: {item.price}
            category: {item.category_id}
            created: {item.created}
            </li>
          
          )}
        </ul>
      </div>
    );
  }


export default TextApi