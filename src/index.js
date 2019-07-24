//semantic ui
//using class based component
//props to add property name and value to component 
//state: is javascript object that contain some amount of data that is relavent to singular component
//updating the state will cause the component to rerender.
//state must to be initialized when component created
//to be able to update state >> using setState function
//handling the error
//taking state of one component and pass it as props for another component
//Lifecycles



import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './seasonDisplay';

//reason to extends React.Component is to be able to use functions, bowwowing functionality into our app from React.Component
class App extends React.Component{

    //the first function that will be called before any thing else so we inilatize state here
    //we add constructor when we need to add initial value for variable
    constructor(props) {
        //we extend React component, inside the constructor there is some setting to create the component and when we call consturctor we override this default to make sure
        // that every thing is loaded successfully we need to call super
        super(props);

        //this is the only time to assign value to state other cases is to use setState
        this.state = { lat: null, errorMessage: "" };

    }
    //another way for initialization
    //state = {lat: null , errorMessage : ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            } , 
            (err) =>  {
                this.setState({errorMessage: err.message})
            }
        );
    }

    //React says we want to define render
    render(){
        if(this.state.errorMessage && !this.state.lat)
        {
            return (<div>Error: {this.state.errorMessage}</div>)
        }
        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>
        }
         return (<div>Loading!</div>)
    }
}

ReactDom.render(<App/> , document.querySelector("#root"));