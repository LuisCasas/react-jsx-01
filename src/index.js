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
            {
                entries.forEach((entry) => {
                    return (
                            <Comment 
                            author={entry.author} 
                            time={entry.time} 
                            comment={entry.comment} 
                            avatar={entry.avatar} 
                        />
                    );
                })
            }
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));