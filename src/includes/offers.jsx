import React from 'react'

export function Offers(){
    return<div style={{backgroundColor: '#F3F5F7', display:'flex'}}>
        <div className={'arrange-offers'}  style={{width:'50%'}}>
            <h2 style={{textAlign:'center'}}>
                What This Program Offers?
            </h2>
            <div style={{paddingTop:25, paddingLeft:20}}>
                <div style={{ display:'flex'}}>
                    <img src={'../images/web-dev-icon.png'} style={{width:'8%', bsckgroundColor:'blue'}}/>
                    <div style={{ width:'98%', fontSize:20, padding:'0px 25px'}}>
                        Acquisition of several skills, tools, principles required to become a highly qualified
                        and well sought-after web developer
                </div>
                </div>
                <div style={{paddingTop:25, display:'flex'}}>
                    <img src={'../images/portfolio.svg'} style={{width:'8%', bsckgroundColor:'blue'}}/>
                    <div style={{ width:'98%', fontSize:20, padding:'0px 25px'}}>
                        Build a really impressive portfolio complete with real-world projects that is sure to
                        astonish your future employers
                    </div>
                </div>
                <div style={{paddingTop:25, display:'flex'}}>
                    <img src={'../images/tutor.png'} style={{width:'8%', bsckgroundColor:'blue'}}/>
                    <div style={{ width:'98%', fontSize:20, padding:'0px 25px'}}>
                        Tutorship and Mentorship from the best Software Developers the tech world has to offer
                    </div>
                </div>
                <div style={{paddingTop:25, display:'flex'}}>
                    <img src={'../images/teamwork.png'} style={{width:'8%', bsckgroundColor:'blue'}}/>
                    <div style={{ width:'98%', fontSize:20, padding:'0px 25px'}}>
                        Partnering up and Collaborating with your peers in the execution of real-life projects
                    </div>
                </div>
                <div style={{paddingTop:25, display:'flex'}}>
                    <img src={'../images/improve.svg'} style={{width:'8%', bsckgroundColor:'blue'}}/>
                    <div style={{ width:'98%', fontSize:20, padding:'0px 25px'}}>
                        Honing your skills in Web development and/or other aspects of Software Development
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:'50%'}}>
            <iframe src={''}></iframe>
        </div>
    </div>
}