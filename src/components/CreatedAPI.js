import axios from "axios";
import { useState } from "react";

function CreatedAPI() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
 const [price, setPrice] = useState("")
  const [category, setCategory] = useState("");
  const [created, setCreated] = useState('');
  axios.defaults.withCredentials = true
  const submitHandle = async (e) => {
    e.preventDefault();
    
    const data = { name, desc, price, category, created };
    try {
     await axios.post("https://bhaibhopal.org/api/items/create",data)

    } catch (error) {
      
      console.log(error)
    }
  };

  return (
    <>
      <div>CreatedAPI</div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
          <input
          type="text"
          placeholder="price"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
          <input
          type="text"
          placeholder="price"
          value={created}
          onChange={(e) => setCreated(e.target.value)}
        />
        <button>submit</button>
      </form>
    </>
  );
}

export default CreatedAPI;
