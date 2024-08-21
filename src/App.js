/* eslint-disable */
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './component/Header';

/* 대시보드, 하단 */
import SystemInformation from './component/SystemInformation';
import Interfaces from './component/Interfaces';
import TrafficGraphs from './component/TrafficGraphs';
import ServicesStatus from './component/ServicesStatus';
import IPSec from './component/IPSec';
import RSSFeed from './component/RSSFeed';
import Footer from './component/Footer';

import "./App.css";

function App() { 
    // 1. spring boot
    const [spring, setSpring] = useState('') 
    useEffect(() => {  
        axios.get('/api/data')
        .then(response => setSpring(response.data))
        .catch(error => console.log(error))
    }, []);

    // 2. fast api
    const [fastapi, setFast] = useState('') 
    useEffect(() => {  
        axios.get('/fast/data')
        .then(response => setFast(response.data))
        .catch(error => console.log(error))
    }, []);

    // 3. 플라스크
    const [flask, setFlask] = useState('') 
    useEffect(() => {  
        axios.get('/flask/data')
        .then(response => setFlask(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div class="app">
            <Header/>

            <div className="dashboard">
                <SystemInformation />
                {/* <ThermalSensors /> */}
                <Interfaces />
                <TrafficGraphs />
                <ServicesStatus />
                <IPSec />
                <RSSFeed />
            </div> 


            <div class='list'>
                <br></br>
                <h3>스프링부트에서 가져온 데이터 :</h3>
                <p>{ spring }</p>
            </div>
            <div class='list'>
                <h3>플라스크에서 가져온 데이터 :</h3>
                <p>{ flask }</p>
            </div>
            <div class='list'>
                <h3>fast api에서 가져온 데이터 :</h3>
                <p>{ fastapi }</p>
            </div>
            <div class='list'>
                <h3> 장고에서 가져온 데이터 : 못함 </h3>
            </div>

            <div className="하단부분">
                <Footer />
            </div> 

        </div>
    );
}

export default App;