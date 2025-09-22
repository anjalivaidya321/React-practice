import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Scrol() {
  const [items, setItems] = useState([]); // store products
  const [page, setPage] = useState(1); // current page
  const limit = 10; // how many items per request

  // function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}&page=${page}`
      );
      const newItems = await response.json();

      if (newItems.length > 0) {
        setItems((prevItems) => [...prevItems, ...newItems]); // append
        setPage((prevPage) => prevPage + 1); // next page
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // first fetch when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length} // tells lib how many items loaded
        next={fetchData} // call when reach bottom
        hasMore={true} // always true (or check condition if API has end)
        loader={<div>Loading...</div>}
      >
        {items.map((item) => (
          <div key={item.id} style={{ margin: "20px", border: "1px solid gray", padding: "10px" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "100px" }}
            />
            <h3>{item.title}</h3>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Scrol;
