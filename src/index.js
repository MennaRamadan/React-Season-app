//semantic ui
//using class based component
//props to add property name and value to component 
//state: is javascript object that contain some amount of data that is relavent to singular component
//updating the state will cause the component to rerender.
//state must to be initialized when component created
//to be able to update state >> using setState function


import React from 'react';
import ReactDom from 'react-dom';

//reason to extends React.Component is to be able to use functions, bowwowing functionality into our app from React.Component
class App extends React.Component{

    //the first function that will be called before any thing else so we inilatize state here
    constructor(props) {
        //we extend React component, inside the constructor there is some setting to create the component and when we call consturctor we override this default to make sure
        // that every thing is loaded successfully we need to call super
        super(props);

        this.state = { lat: null };
    }

    //React says we want to define render
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position) , 
            (err) =>  console.log(err) 
        );

        return <div> Latitude: </div>;
    }
}

ReactDom.render(<App/> , document.querySelector("#root"));