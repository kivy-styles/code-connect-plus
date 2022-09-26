import React,{useEffect,useState, useNavigate} from 'react'
import {Link} from 'react-router-dom'
import Typewriter from "typewriter-effect"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faClock,faUser,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import {Webdev} from "../includes/softwaredev.jsx"
import {Offers} from "../includes/offers.jsx"
import {Courses} from "../includes/courses.jsx"
import {Search} from "../includes/courses-search.jsx"
import {Benefits} from '../includes/benefts.jsx'
import {Codeconnect} from '../includes/codeconnect.jsx'




export default function Home(){
    return <div style={{position:'relative'}}>
        <div className={'top-part'} style={{backgroundColor:'#1E78A7'}}>
            <div style={{width:'33%'}}>
               <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon style={{paddingLeft:10}} icon={faTwitter}/>
                <FontAwesomeIcon style={{paddingLeft:10}} icon={faInstagram}/>
            </div>
            <div style={{width:'33%'}}><FontAwesomeIcon style={{paddingLeft:10}} icon={faClock}/>
                <span style={{paddingLeft:5}}>
                Mon-Sat 8:00am-18:00pm
            </span>
            </div>
            <div style={{width:'34%', display:'flex'}}>
            <div style={{width:'70%', textAlign:'center'}}><FontAwesomeIcon style={{paddingLeft:10}} icon={faUser}/>
                <span style={{paddingLeft:5}}>
                codeplus
            </span>
            </div>
            <div style={{width:'30%'}}><FontAwesomeIcon style={{paddingLeft:10}} icon={faArrowRightToBracket}/>
                <span style={{paddingLeft:7}}>
                Log In
            </span>
            </div>
            </div>
        </div>
        <img src={'images/messaging.png'} className={'fixed animate__animated animate__pulse animate__infinite'}/>
        <div className={'header'}>
            <div className={'navigation'}>
                <div className={'brand'}>
                    <img src={'./images/codeconnectplus-copy.png'}/>
                    <span className={'vertical-line'}></span>
                    <div className={'address'} style={{width:'40%', fontSize:10}}>
                        <div>12, DE-ANCHOR STREET,</div>
                        <div>OFF CAMP DAVIES ROAD,</div>
                        <div>AYOBO, IPAJA,</div>
                        <div>LAGOS, NIGERIA</div>
                    </div>
                </div>
                <div className={'nav-item'}><Link to={'/'} style={{textDecoration:'none', color:'black', borderBottomColor:'blue',
                    borderBottomStyle:'inset'}}>HOME</Link></div>
                <div className={'nav-item'}><Link to={'/about'} style={{textDecoration:'none', color:'black'}}>ABOUT</Link></div>
                <div className={'nav-item'}><Link to={'/courses'} style={{textDecoration:'none', color:'black'}}>COURSES</Link></div>
                <div className={'nav-item'} style={{paddingLeft:15}}><Link to={'/blog'} style={{textDecoration:'none', color:'black'}}>BLOG</Link></div>
                <div className={'nav-item'}><Link to={'/contact'} style={{textDecoration:'none', color:'black'}}>CONTACT</Link></div>
            </div>
            <div className={'image-container'} ></div>
        </div>
        <Webdev/>
        <Offers/>
        <Courses/>
        <Search/>
        <Benefits/>
        <Codeconnect/>
        <div className={'absolute'}>Learn Top Tech Skills that will<div>
            <Typewriter
            options={{
                loop:true
            }}
            onInit={(typewriter)=> {
                typewriter
                    .typeString("attract 6 to 7 figure salary")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("financially reward you")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("transform your life")
                    .start();
            }}
        />
        </div>
        </div>
        <div className={'overlay'}></div>
        <div className={'overlay'}></div>
    </div>
}