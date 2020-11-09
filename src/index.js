import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';


/* 
const Header = () => {
  return <h2>Hello world!</h2>
}

const Field = () => {
  const holder = "Enter here";

  const styleField = {
    width: '250px'
  }

  return <input 
            style={styleField}
            type="text" 
            placeholder={holder} 
            />
}

const Btn = () => {
  const text = "Log in";
  const logged = false;
  return <button>{logged ?  "Enter" : text}</button>
}

const App = () => {
    return (
      <div>
        <Header/>
        <Field/>
        <Btn/>       
      </div>
    )
} 

*/

ReactDOM.render(<App/>, document.getElementById('root'));

