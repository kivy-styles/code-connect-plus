import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Pagination, EffectCoverflow } from 'swiper'


SwiperCore.use([Pagination, EffectCoverflow])

export function Courses(){
    const navigate=useNavigate()
    return<div>
       <div style={{backgroundColor:'#505170'}}>
           <div>
               <h1 style={{fontFamily:'lato',padding:'30px 30px', color:'white'}}>
                   <b>Top courses</b>
               </h1>
           </div>
           <div  style={{backgroundColor:'', height:400, display:'flex'}}>
               <Swiper
                   effect={'coverflow'}
                   grabCursor={'true'}
                   centeredSlides={'true'}
                   spaceBetween={0}
                   slidesPerView={3}
                   loop={'true'}
                   pagination={{clickable:true, dynamicBullets:true}}
                   coverflowEffect={{
                       rotate:40,
                       stretch:25,
                       depth:250,
                       modifier:1,
                       slideShadows:false
                   }}
               >
                   <SwiperSlide>
                       <div className={'courses'} onClick={()=>navigate('./courses/MEAN')}>
                           <img style={{width:400, height:250,backgroundColor:'limeGreen', borderRadius:10}}
                                src={'../images/mean_logo.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400, borderRadius:10}}>MEAN STACK</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'limeGreen',
                           borderRadius:10}} src={'../images/mern_logo.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>MERN STACK</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/django-react.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>DJANGO AND REACT</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/python-django.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>PYTHON AND DJANGO</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/react-logo.webp'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>REACT</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'./images/php-laravel.jpeg'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>PHP AND LARAVEL</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/wamp.jpg'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>WAMP STACK</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/laravel-and-reactjs.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>LARAVEL AND REACT</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/java-spring.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>JAVA AND SPRING BOOT</div></div>
                   </SwiperSlide>
                   <SwiperSlide>
                       <div className={'courses'}><img style={{width:400, height:250,backgroundColor:'white',
                           borderRadius:10}} src={'../images/node-js.png'}/>
                           <div style={{textAlign:'center',backgroundColor:'lightGrey',width:400,
                               borderRadius:10}}>NODEJS AND JAVASCRIPT</div></div>
                   </SwiperSlide>
               </Swiper>
           </div>
       </div>
    </div>
}