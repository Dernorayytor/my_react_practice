import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class HelloComponent extends React.Component{
  render(){
    return <h1> สวัสดี React</h1>
  }
}
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <HelloComponent/>
); 
//ReactDOM (การเขียน ReactDOM.render ในหน้า index.js เพื่อทำงานภายใต้ Virtual DOM)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
