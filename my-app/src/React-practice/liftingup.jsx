import React, { useState } from "react";

function Child1({ toy, setToy }) {
  return (
    <div>
      <p>Child1 has a {toy}</p>
      <button onClick={() => setToy("Ball")}>Change Toy</button>
    </div>
  );
}

function Child2({ toy }) {
  return <p>Child2 also sees a {toy}</p>;
}

function Parent() {
  const [toy, setToy] = useState("Car"); // parent keeps the toy

  return (
    <div>
      <Child1 toy={toy} setToy={setToy} />
      <Child2 toy={toy} />
    </div>
  );
}

export default Parent;



