import React from 'react';
import Main from './Main.js';

export default class Home extends React.Component {
    render(){
        return <div>
        <Main {...this.props}/>
         <h1>Hello kamu</h1>
        </div>
    }
}
