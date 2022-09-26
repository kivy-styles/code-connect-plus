import React from 'react'
import {Carousel} from 'react-bootstrap'


export function Webdev(){
    function handleScroll(){
        scrollTo(2000,0)
    }
    return<div style={{fontFamily:'lato'}}>
        <div className={'hash-nav'} style={{color:'#000000'}}>
            <div style={{width:'23%', fontSize:17,borderRight:'2px solid #02C592',textAlign:'center', cursor:'pointer'}}>
                What Is Software Development?
            </div>
            <div style={{width:'20%', fontSize:17,borderRight:'2px solid #02C592',textAlign:'center', cursor:'pointer'}}>
                Why Code Connect Plus?
            </div>
            <div style={{width:'20%', fontSize:17,borderRight:'2px solid #02C592',textAlign:'center', cursor:'pointer'}}>
                Testimonies
            </div>
            <div style={{width:'20%', fontSize:17,borderRight:'2px solid #02C592',textAlign:'center', cursor:'pointer'}}
            onClick={()=>{
                alert()
                handleScroll()
            }}>
                Admission Criteria
            </div>
            <div style={{width:'17%', fontSize:17,borderRight:'2px solid #02C592',textAlign:'center', cursor:'pointer'}}>
                Tuition
            </div>
        </div>
        <div>
            <div className={'arrange-web-dev'} style={{display:'flex',fontFamily:'montserrat'}}>
                <div style={{width:'50%'}}>
                <h2 style={{textAlign:'center'}}>
                    What Is Software Development
                </h2>
                    <p style={{textAlign:'center', paddingTop:25}}>
                        Software development is the branch of computer science devoted to the creation,
                        development, implementation, and troubleshooting of software. The concept can
                        apply to systems, programming, and applications development.
                    </p>
                    <p style={{textAlign:'center', paddingTop:25}}>
                        If you are considering a career change or would like to grow in the technical
                        field, Code Connect Plus Software Development courses can help you build the
                        expertise to advance your career and achieve your goals.
                    </p>
                </div>
                <div style={{width:'50%'}}>
                    <Carousel activeindex={1} fade>
                        <Carousel.Item interval={3000}>
                            <div style={{textAlign:'center'}}>
                                <img
                                style={{height:330, width:'90%', borderRadius:5}}
                                src={'../images/Software3.jpg'}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div style={{textAlign:'center'}}>
                                <img
                                    style={{height:330, width:'90%', borderRadius:5}}
                                    src={'../images/software2.png'}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div style={{textAlign:'center'}}>
                                <img
                                    style={{height:330, width:'90%', borderRadius:5}}
                                    src={'../images/software.jpg'}/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
}