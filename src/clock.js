import React from 'react';


class Clock extends React.Component{
    //this will convert to constructor after babel running
    state = {time: new Date().toLocaleTimeString()};

    componentDidMount(){
        setInterval(()=>{
            this.setState({time: new Date().toLocaleTimeString() })
        },1000)
    }

    render(){
        return(<div>
            The Time is: {this.state.time}
            </div>);
    }
};

export default Clock;