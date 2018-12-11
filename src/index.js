import "./style.css";

const React = require('react');
const ReactDOM = require('react-dom');


// class HelloMessage extends React.Component {
//     render() {
//       return (
//         <h1>
//           Hello, World
//         </h1>
//       );
//     }
//   }
const HelloWorld = () => {
  return <h1>Hello, World 2</h1>;
}
  
  ReactDOM.render(
    <HelloWorld />,
    document.querySelector("#app")
  );