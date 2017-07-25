import React from 'react';
import {Link, browserHistory} from 'react-router';
import request from 'request';
import Main from './Main.js';
import SurahList from './SurahList';


const SurahDetail = React.createClass({
    getInitialState: function(){
        return {
            surahData: false,
            nomorSurat: this.props.params.nomor? this.props.params.nomor:null
        }
    },

    getSurat: function(nomor){
        request("http://api.fathimah.ga/quran/format/json/surat/"+nomor,
            (error, response, data) => {
                if (!error && response.statusCode === 200) {
                    this.setState({surahData: JSON.parse(data)['hasil'][0]})
                }
            });
    },


    componentWillMount: function(){
        const nomorSurat = this.state.nomorSurat;
        this.getSurat(nomorSurat);
    },

    componentWillReceiveProps: function(nextProp){
        this.getSurat(nextProp.params.nomor);
    },

    render: function(){
        const data = this.state.surahData;

        const detail = <div className="panel panel-default">
            <div className="panel-heading">{data.nama}</div>
            <div className="panel-body">
                <div className="list-group">
                    <div className="list-group-item">Ayat: {data.ayat}</div>
                    <div className="list-group-item">Type: {data.type}</div>
                </div>
            </div>
            </div>

        return <div>
            <Main {...this.props}/>
            {detail}
        </div>
    } });

export default SurahDetail;

