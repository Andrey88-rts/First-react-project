import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Header = () => {

    return <h2>Hello world</h2>
}

const Field = () => {
    const hold = "Enter";
    const styled = {
        width: '300px',
        height: '20px',
        color: 'red',
        border: '2px solid green',
        borderRadius: '5px'
    }
    return <input style={styled} type="text" placeholder={hold} autoComplete="" className="first" htmlFor="" />
}

const Btn = () => {
    const text = "Log in";
    const logged = true;
    return <button>{logged ? "enter" : text}</button>
}

const App = () => {
    return (
        <div>
            <Header />
            <Field />
            <Btn />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();