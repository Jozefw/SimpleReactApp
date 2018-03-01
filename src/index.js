import React from 'react';
import ReactDOM from 'react-dom';
// create a new component to produce some new html

const App = () => {
    return <div>Hello's to all my peeps</div>;
}

// take compnent's generted html and put it on the page (the DOM)

// make use of a compnent needs to instantiate the class so wrap in jsx tags
// ReactDOM.render(<App/>);

// needs a target to render it into
ReactDOM.render(<App/>, document.querySelector('.container'));
