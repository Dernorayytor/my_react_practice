import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import App from './App';
//สร้าง HelloComponent ใช้ HelloComponent
// function HelloComponent() {
//   return <h1>สวัสดี Component</h1>
// }
//สร้าง HelloComponent แบบคลาส ใช้ HelloComponent
// class HelloComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>สวัสดี React</h1>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<HelloComponent/>,document.getElementById('root'));


// //ReactDOM (การเขียน ReactDOM.render ในหน้า index.js เพื่อทำงานภายใต้ Virtual DOM)
// class HelloComponent extends React.Component{
//   render(){
//     return <h1> สวัสดี Component แบบ External</h1>
//   }
// }
//   const root = ReactDOM.createRoot(document.getElementById("root")); 
//   root.render(
//     <HelloComponent/>
//   ); 


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

//การเรียกใช้ Component แบบใหม่ไม่มีในคลิป
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
reportWebVitals();
