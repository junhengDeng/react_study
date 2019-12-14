import React, { Component } from 'react';

class App extends Component{
    render() {
        return (
            <div className="my-list">
                <li>{false?'JSPang.com':'技术胖'}</li>
                <li>I Love React</li>
            </div>
        )
    }
}

export default App;