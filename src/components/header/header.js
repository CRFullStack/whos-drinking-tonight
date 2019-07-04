import React from "react";
let stylez = {
  fontSize: "64px",
  color: "white",
  textAlign: "center"
};

let stylez2 = {
  backgroundColor: "pink"
};

const header = () => {
  return (
    <section style={stylez2}>
      <h1 style={stylez}>Who's Drinking tonight?</h1>
    </section>
  );
};

export default header;
