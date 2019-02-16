import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import faker from 'faker';

const entries = [{
    author: 'Mike',
    time: '20:04',
    comment: 'Mike here, what\'s app!',
    avatar: faker.image.avatar()
},{
    author: 'John',
    time: '21:32',
    comment: 'My name is John',
    avatar: faker.image.avatar()
},{
    author: 'David',
    time: '21:45',
    comment: 'David here!',
    avatar: faker.image.avatar()
}];

const App = () => {

    return (
        <div className="ui container comments">
            
            <Comment 
                author={entries[0].author} 
                time={entries[0].time} 
                comment={entries[0].comment} 
                avatar={entries[0].avatar} 
            />
            <Comment 
                author={entries[1].author} 
                time={entries[1].time} 
                comment={entries[1].comment} 
                avatar={entries[1].avatar} 
            />
            <Comment 
                author={entries[2].author} 
                time={entries[2].time} 
                comment={entries[2].comment} 
                avatar={entries[2].avatar} 
            />
               
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));