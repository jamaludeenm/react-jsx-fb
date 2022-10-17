import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import { FaFacebook} from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import {  FaRibbon } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import { FaCalendarTimes } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaSwift } from 'react-icons/fa';
import { FaSpeakerDeck } from 'react-icons/fa';
import App from './App';


//using js
//document.getElementById("root").innerHTML="just say bigg boxx"

//using react'
// const res=React.createElement("div",{style:{margin:"50px",backgroundColor:"whitesmoke",padding:"50px"}},
// React.createElement("h3",{},"Keep calm"),
// React.createElement("h2",{},"and say"),
// React.createElement("h1",{},"Bigg boxx")

// );
// console.log(res);

//using jsx

const res = (
    <div className='fb'>
        <div className='header'>
            <div className='container'>
                <div className='navigation'>
                    <div className='logo'>
                        <a href=''>{< FaFacebook />}</a>
                        <p className='search'>{"Search Facebook"}</p>
                    </div>
                    <div className='c-icon'>
                        <ul>
                            <li><a href=''>{< FaHome />}</a></li>
                            <li><a href=''>{< FaPlayCircle />}</a></li>
                            <li><a href=''>{< FaStore />}</a></li>
                            <li><a href=''>{< FaUser />}</a></li>
                            <li><a href=''>{< FaGamepad />}</a></li>
                        </ul>
                    </div>
                    <div className='l-icon'>
                        <ul>
                            <li><a href=''>{< FaCommentDots />}</a></li>
                            <li><a href=''>{< FaFacebookMessenger />}</a></li>
                            <li><a href=''>{< FaBell />}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='banner'>
            <div className='container'>
                <div className='flex-banner'>
                    <div className='first-list'>
                        <div className='flex-con'>
                            <img src={require('./images/profile.jpg')} className='pro-foto'/>
                            <h5>{"Jamal Deen"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaUserFriends/>}</span>
                            <h5>{"Friends"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaClock/>}</span>
                            <h5>{"Memories"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaUserAlt/>}</span>
                            <h5>{"Groups"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaStore />}</span>
                            <h5>{"Marketplace"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaYoutubeSquare />}</span>
                            <h5>{"watch"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaRibbon />}</span>
                            <h5>{"Saved"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaFlag />}</span>
                            <h5>{"Pages"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaCalendarTimes />}</span>
                            <h5>{"Most Recent"}</h5>
                        </div>
                        <div className='flex-con'>
                            <span>{< FaRegCaretSquareDown />}</span>
                            <h5>{"See more"}</h5>
                        </div>
                        <h4>Your Shortcuts</h4>
                        <div className='flex-con'>
                            <img src={require('./images/joker.jpeg')} className='be-img'/>
                            <h5>{"Be like Joker"}</h5>
                        </div>
                    </div>
                    <div className='feed'>
                        <div className='top-1'>
                            <div className='feed-head'>
                                <h5>{'Stories'}</h5>
                                <h5>{'Reels'}</h5>
                            </div>
                            <div className='feed-img'>
                                <img src={require('./images/profile.jpg')}/>
                                <img src={require('./images/gp.jpg')}/>
                                <img src={require('./images/naruto.jpg')}/>
                                <img src={require('./images/obama.jpg')}/>
                                <span>{< FaPlusCircle/>}</span>
                            </div>
                        </div>
                        <div className='middle-1'>
                            <div className='m-h'>
                            <img src={require('./images/gp.jpg')}/>
                            <p>{"what's on Your mind,Jamal?"}</p>
                            </div>
                            <div className='m-f'>
                                <div className='m-f-1'>
                                <span style={ {color:"#ff6868"}}>{ < FaVideo />}</span>
                                <h5>Live vedio</h5>
                                </div>
                                <div className='m-f-1'>
                                <span style={ {color:"#8989f5"}}>{ < FaPhotoVideo />}</span>
                                <h5>Photo/video</h5>
                                </div>
                                <div className='m-f-1'>
                                <span style={ {color:"rgb(249 230 97)"}}>{ < FaSmile />}</span>
                                <h5>feeling/activity</h5>
                                </div>
                            </div>
                        </div>
                        <div className='last-1'></div>
                    </div>
                    <div className='chat'>
                        <div className='chat-1'>
                            <h4>Your Pages  and Profiles</h4>
                            <div className='chat-ico'>
                                <img src={require('./images/joker.jpeg')}/>
                                <h5>Be Like Joker</h5>
                            </div>
                            <div className='chat-ico-1'>
                                <span>{< FaSwift />}</span>
                                <h5>switch into page</h5>
                            </div>
                            <div className='chat-ico-1'>
                                <span>{< FaSpeakerDeck />}</span>
                                <h5>create promotion</h5>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    </div>

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(res);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


