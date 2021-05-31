import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'

const PrintHello = () => {
  // return <h1>I love React</h1>
  return <h1>I'm a React component</h1>;
};


const BootstrapCard = (props) => {
return <div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
  </div>
  </div>
}

const BootstrapJumbotron = (props) => {
  return <Jumbotron>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>
        <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
      </p>
    </Jumbotron>
}

BootstrapCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string,
    description: PropTypes.string
};


let McCartney = {
    title:'McCartney',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
    buttonLabel:'Go to Wikipedia',
    buttonUrl:'https://en.wikipedia.org/wiki/Paul_McCartney',
    description:'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
}

// showJumbotron.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   buttonLabel: PropTypes.string,
//   buttonURL: PropTypes.string
// }


function App() {
  let {title,imageUrl,buttonLabel,buttonUrl,description} = McCartney;
  return (
    <>
  <PrintHello />
  <BootstrapCard title={title} imageUrl={imageUrl} buttonLabel={buttonLabel} buttonUrl={buttonUrl} description={description} />

  <BootstrapJumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
    />
  </>

  );
}

export default App;
