import React from 'react';
import ReactDOM from 'react-dom';

// create new component. This component should produce HTML

const App = () => {
    return <div>Hi!</div>
};

// take this component HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));