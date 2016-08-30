import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCiRrsl4dg2Gu71CApPejCVdWewKeIh14I';

// create new component. This component should produce HTML

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// take this component HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));