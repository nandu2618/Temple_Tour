import React from "react";
// import Successpage from "./Successpage";
// import { Routes, Route } from "react-router-dom";
import "./index.css"
const Tirupati = () => {
  return (
    
    <div className="card">
      <img
        // src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a0/98/0a/lendi-baug.jpg?w=1200&h=-1&s=1"
        // alt="Avatar"
        src="https://media.istockphoto.com/id/481962488/photo/waterpond-close-to-balaji-temple.jpg?s=612x612&w=0&k=20&c=P0SLeAYkRYaDY9C4R0DOGppxkMQ9xcIwu8AvVaSYPhU="
        alt="Avatar"
      />
      <div className="container">
        <h3>
          <b>tirupati</b>
        </h3>
        <p>
          Today, because of Sai Baba, Shirdi has become a place of importance in
          India and is counted among the major Hindu places of pilgrimage. The
          first Sai Baba temple is situated at Kudal, Sindhudurg. This temple
          was built in 1922. The Sai Baba Temple in Shirdi is visited by an
          average of 25,000 pilgrims a day.
        </p>
                   {/* <Link
              to="/tirupati"
              className="btn btn-primary"
              state={{
                name: "Shirdi",
                url: "https://temple-project.s3.ap-south-1.amazonaws.com/Shirdi.mp4",
              }}
            >
              Visit
            </Link> */}
            <a class="button" href="https://youtu.be/SZU2NR5Ls28"> Visit </a>
              </div>
    </div>

  );
};

export default Tirupati;