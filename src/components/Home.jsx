import React from 'react';

const Home = () => (
    <div className='home'>
        <div className='treewelcome'>
            <h1>Welcome to tree-learning!</h1>
            <p id='centered'>
                This website is here to help you learn about binary tree
                data structures and how to traverse them.
                To start, you could either go to the information page
                to read up on binary trees, or straight
                to the activity page to try out some tree traversals yourself.
            </p>
        </div>
        <div className='button'>
            <a href='/information' className='btn btn-two'> Go to Information</a>
            <a href='/activity' className='btn btn-one'> Go to Activity</a>
        </div>
    </div>
);

export default Home;
