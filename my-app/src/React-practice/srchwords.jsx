import React, { useState, useEffect } from "react";

function Searche() {
  const [items, setItems] = useState([]);      // API data
  const [input, setInput] = useState("");      // Search text
  const [filter, setFilter] = useState([]);    // Filtered data

  // 1. Fetch data from API when component loads
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")   // example API
      .then((res) => res.json())
      .then((data) => {
        setItems(data);      // keep full API data
        setFilter(data);     // initially show all
      });
  }, []);

  // 2. Handle input change
  const handle = (e) => {
    const inpval = e.target.value.toLowerCase();
    setInput(inpval);

    const filtered = items.filter((val) =>
      val.title.toLowerCase().includes(inpval)   // filter by title
    );

    setFilter(filtered);   // update filtered list
  };

  // 3. Display filtered items
  const display = filter.map((item, index) => (
    <li key={index}>{item.title}</li>
  ));

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handle}
        placeholder="Search from API data"
      />
      <ul>{display}</ul>
    </div>
  );
}

export default Searche;
