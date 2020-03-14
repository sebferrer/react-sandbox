import React, { useState } from "react";
import ReactDOM from "react-dom";

// import App from "./App";

/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);*/

function Kimi({ title, body }) {
    const [imageUrl, setImageUrl] = useState("http://sebferrer.fr/kimi/kimi2.png");

    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imageUrl} alt={title} />
            <div className="room">
                <br />
                <button onClick={() => setImageUrl("http://sebferrer.fr/kimi/kimi.png")}>
                    Remove glasses
                </button>
                <button onClick={() => setImageUrl("http://sebferrer.fr/kimi/kimi2.png")}>
                    3D glasses
                </button>
                <button onClick={() => setImageUrl("http://sebferrer.fr/kimi/kimi3.png")}>
                    8-bit glasses
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(<Kimi
    title="Kimi"
    body="The cutest cat ever"/>, document.querySelector('#root'));

/*
ReactDOM.render(<Gate
    isOpen={true}/>, document.querySelector('#root'));
    */