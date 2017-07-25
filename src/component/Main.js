import React from 'react';
import {Link} from 'react-router';


class Main extends React.Component {
    render(){
        return (
            <div>
                                <nav className="navbar navbar-default">
                                    <div className="container-fluid">
                                        <div className="navbar-header">
                                            <a className="navbar-brand" href="/">Scotch Cars</a>
                                        </div>
                                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                            <ul className="nav navbar-nav">
                                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                                <li><Link to="/about" activeClassName="active">About</Link></li>
                                                <li><Link to="/Car" activeClassName="active">Car</Link></li>
                                                <li><Link to="/surat" activeClassName="active">Surat</Link></li>

                                                <li><Link to="/surat/1" activeClassName="active" onClick={this.props.onClick} >Surat AlFatihah</Link></li>
                                                <li><Link to="/surat/2" activeClassName="active" onClick={this.props.onClick}>Surat AlBaqoroh</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="container">
                            </div>
                            </div>
        )
    }
}

export default Main
