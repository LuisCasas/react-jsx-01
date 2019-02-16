import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';

const App = () => {

    return (
        <div className="ui container comments">
            <Comment author="Mike" />
            <Comment author="John" />
            <Comment author="Peter" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));