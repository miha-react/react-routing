import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <div className="app">
                <div className="menu-bar">
                    <div className="menu-item">
                        <Link to='/about'>About</Link>

                    </div>
                    <div>
                        <Link to='/inbox'>Inbox</Link>
                    </div>
                 </div>

                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;