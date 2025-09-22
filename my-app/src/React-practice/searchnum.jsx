import React, { useState, useEffect } from "react";

function Search() {
  const [items, setItems] = useState([]);      // All products
  const [input, setInput] = useState("");      // User input
  const [filter, setFilter] = useState([]);    // Filtered products

  // 1️⃣ Fetch API data on page load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilter(data); // show all products initially
      })
      .catch((err) => console.log(err));
  }, []);
  // 2️⃣ Update input as user types
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // 3️⃣ Search when button is clicked
  const handleSearch = () => {
    const searchPrice = Number(input);
    if (!searchPrice) {
      alert("❌ Please enter a valid number");
      return;
    }
    const filtered = items.filter((item) => item.price === searchPrice);
    if (filtered.length === 0) {
      alert("❌ No product found for this price");
      return;
    }
   setFilter(filtered);
  };

  // 4️⃣ Optional: reset to show all again
  const handleReset = () => {
    setFilter(items);
    setInput("");
  };

  // 5️⃣ Display products
  const display = filter.map((item) => (
    <li key={item.id}>
      {item.title} — 💲{item.price}
    </li>
  ));

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter price to search"
      />
      <button onClick={handleSearch}>Search by Price</button>
      <button onClick={handleReset}>Reset</button>

      <ul>{display}</ul>
    </div>
  );
}

export default Search;


