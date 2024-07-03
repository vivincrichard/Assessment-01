import './Dashboard.css';
// import { CiSearch } from 'react-icons/ci;
// import {CiSearch} from '@react-icons';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import pic1 from './images/Vector (5).png';
import pic2 from './images/Vector (3).png';
import pic3 from './images/Vector (2).png';
import pic4 from './images/Vector (1).png';
import user from './images/bell.png';
import profile from './images/Mask Group (1).png'
import dash from './images/dashboard_icon.png'
import sch from './images/schedule_icon.png'
import setting from './images/setting_icon.png'
import us from './images/user_icon.png'
import tran from './images/Vector (6).png'


import PieChart from "./Chart-js/Pie-charts.tsx";
import {useState} from "react";
import Lines from "./Chart-js/Lines.tsx";

const boxData = [
    {img: pic1, label: 'Total Revenues', value: '100', color: '#DDEFE0'},
    {img: pic2, label: 'Total Transaction', value: '54654', color: '#F4ECDD'},
    {img: pic3, label: 'Total Likes', value: '15648943', color: '#EFDADA'},
    {img: pic4, label: 'Total User', value: '54', color: '#DEE0EF'},
];
const initialSchedule = [
    {
        title: 'Meeting with suppliers from Kuta Bali',
        time: '14.00-15.00',
        location: 'at Sunset Road, Kuta, Bali',
        color: '#4CAF50' // Green
    },
    {
        title: 'Check operation at Giga Factory 1',
        time: '18.00-20.00',
        location: 'at Central Jakarta',
        color: '#1E90FF' // Blue
    }
];

function Dashboard() {
    const [schedule, setSchedule] = useState(initialSchedule);
    return (
        <div className='container'>
            <nav className='nav-bar'>
                <h1>Board.</h1>
                    <ul className='ul-top'>
                        <li>
                            <img src={dash} className='dash-icon'/>
                            Dashboard
                        </li>
                        <li>
                            <img src={tran} className='dash-icon'/>
                            Transaction
                        </li>
                        <li>
                            <img src={sch} className='dash-icon'/>
                            Schedules
                        </li>
                        <li>
                            <img src={us} className='dash-icon'/>
                            User
                        </li>
                        <li>
                            <img src={setting} className='dash-icon'/>
                            Settings
                        </li>
                    </ul>
                <div className='ul-bottom'>
                    <ul>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>

            <div className='right-container'>
                <div className='intro'>
                    <span className='heading'>Dashboard</span>
                    <div className='right-dashboard'>
                        {/*<CiSearch className='search-icon' />*/}
                        <input type='text' className='search' placeholder='search'/>
                        <img className='profile-imag' src={user}/>
                        <img className='profile-pic' src={profile}/>
                    </div>
                </div>
                <div className='four-box'>
                    {boxData.map((box, index) => (
                        <div className='boxes' key={index} style={{backgroundColor: box.color}}>
                            <div className='icon'>
                                <img src={box.img} alt={`${box.label} icon`}/>
                            </div>
                            <span className='words'>{box.label}</span><br/>
                            <span className='number'>{box.value}</span>
                        </div>
                    ))}
                </div>

                <div className='activities'>
                    <span className='act'>Activities</span>
                    <div className='sub-head'>
                        <span className='data'>May - June 2021</span>
                    </div>
                    <div className='charts'>
                        <div className='line-chart'>
                            <Lines/>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <div className='left-div'>
                        <span className='title'>Top Products</span>
                        <div className='products'>
                            <div className='pie-chart'>
                                <PieChart/>
                            </div>
                            <div className='product-info'>
                                <ul className='list'>
                                    <li>
                                        <span className='product-name'>Basic Tees</span><br/>
                                        <span className='product-percent'>55%</span>
                                    </li>
                                    <li>
                                        <span className='product-name'>Custom Short Pants</span><br/>
                                        <span className='product-percent'>31%</span>
                                    </li>
                                    <li>
                                        <span className='product-name'>Super Hoodies</span><br/>
                                        <span className='product-percent'>14%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='schedule'>
                        <h2>Today's Schedule</h2>
                        {schedule.map((item, index) => (
                            <div className='schedule-item' key={index}>
                                <div className='schedule-indicator' style={{backgroundColor: item.color}}></div>
                                <div className='schedule-details'>
                                    <p className='schedule-title'>{item.title}</p>
                                    <p className='schedule-time'>{item.time}</p>
                                    <p className='schedule-location'>{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
