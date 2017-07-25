import React from 'react';

export default class CarDetail extends React.Component {
    render(){
        return <h1>{ this.props.params.id }</h1>
    }
}
