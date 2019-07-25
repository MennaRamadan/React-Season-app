import React from 'react';

const Spinner = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui big text loader">{props.message}</div>
            </div>
    );
}

//this used incase that we decide to not add a message so it will appear as deafult value
Spinner.defaultProps ={
    message : "Loading ...."
};

export default Spinner;
