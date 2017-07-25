import React from 'react';
import {Link} from 'react-router';
import request from 'request';
import SurahList from './SurahList';
import SurahDetail from './SurahDetail';


const Surat = React.createClass({

    render: function(){
        let surah;
        if (this.props.params.nomor){
            surah = <SurahDetail {...this.props}/>
        } else {
            surah= <SurahList/>
        }

        return surah

    }
});

export default Surat;
