import React from "react";
import "./Highlights.css";
import { Link } from "react-router-dom";

function Highlights() {
  return (
    <>
      <section className="highlight">
        <div className="highlight-header">
          <h1 className="highlight-title">Specials</h1>
          <button className="highlight-button">
            <Link to="/menu">Online Menu</Link>
          </button>
        </div>
        <div className="highlight-cards-container">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/side-view-fork-with-pasta-with-tomato-sauce-parmesan-cheese_140725-12887.jpg?w=360&t=st=1695410099~exp=1695410699~hmac=bbcc6d009d8f776a18ee31d3bf4783431731e7c984b8405ab5a451cd253ed79c"
              alt=""
            />
            <div className="card-title-container">
              <h4 className="card-title">Card title</h4>
              <p className="card-price">
                <strong>$50.98</strong>
              </p>
            </div>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              auctor mi vel arcu placerat, id gravida felis varius. Etiam nec
              neque elit.
            </p>
            <button className="card-button">Order now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export { Highlights };
