import React from 'react';
import {Link} from 'react-router';
import request from 'request';
import Main from './Main.js';


const SuratList = React.createClass({
    getInitialState: function(){
        return {
            surahData:[]
        }
    },

    componentWillMount: function(){
        request("http://api.fathimah.ga/quran/format/json/surat",
            (error, response, data) => {
                if(!error && response.statusCode === 200){
                    this.setState({surahData: JSON.parse(data)['hasil']});
                }
            }
        );
    },

    render: function(){
        const suratNode = this.state.surahData.map(s => (
            <li key={s.nomor} className="list-group-item">
                <Link to={"/surat/"+s.nomor} >{s.nama}</Link>
            </li>
        ));

        return (<div>
            <Main  />
            <h1>List surat</h1>
            <ul className="list-group">
            {suratNode}
            </ul>
        </div>)
    }
});

export default SuratList;
