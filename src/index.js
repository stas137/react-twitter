import React, {Component} from 'react';
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

/* class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 26
    }
    this.nextYear = this.nextYear.bind(this);
  }
  nextYear(){
    console.log("1");
    this.setState(state => ({
      years: ++state.years
    }))
  }
  render(){
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is - {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    )    
  }
}


const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Ivan" surname="Smith" link="vk.com" />
      <WhoAmI name="Alex" surname="Smith" link="instagram.com" />
    </>
  )
} */

ReactDOM.render(<App />, document.getElementById('root'));

