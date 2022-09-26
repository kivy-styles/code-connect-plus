import React from 'react'

export function Benefits(){
return<div>
    <div style={{ padding:'100px 50px',fontFamily:'lato'}}>
        <div style={{textAlign:'center', paddingBottom:30}}><h2>Why Become A Web Developer?</h2></div>
        <div style={{display:'flex', paddingBottom:40}}>
            <div style={{width:'25%'}}>
                <div style={{textAlign:'center'}}>
                    <img src={'../images/flexible-career.png'}/>
                </div>
                <div style={{paddingTop:20, paddingBottom:25, textAlign:'center'}}>
                    <h4>
                        A Flexible Career Path
                    </h4>
                </div>
                <div style={{textAlign:'center'}}>
                    Working from home is a lot of people’s dream, but as a developer you can do much more than that.
                    All you need is a computer and an internet connection, so you’re not even restricted to your home!
                    You can literally go anywhere in the world and still work.
                </div>
            </div>
            <div style={{width:'12.5%'}}></div>
            <div style={{width:'25%'}}>
                <div style={{textAlign:'center'}}>
                    <img src={'../images/demand.png'}/>
                </div>
                <div style={{paddingTop:20, paddingBottom:25, textAlign:'center'}}>
                    <h4>
                    High Demand and High Pay
                </h4>
                </div>
                <div style={{textAlign:'center'}}>
                    Employers struggle to find qualified Web Developers and demand keeps growing. According to the
                    Government’s official website, the average starting salary of a Web Developer lies between $75,000
                    and $100,000 per year. It is arguably one of the best paid professions in town
                </div>
            </div>
            <div style={{width:'12.5%'}}></div>
            <div style={{width:'25%'}}> <div style={{textAlign:'center'}}>
                <img src={'../images/creativity.png'}/>
            </div>
                <div style={{paddingTop:20, paddingBottom:25, textAlign:'center'}}>
                    <h4>
                        Creativity
                    </h4>
                </div>
                <div style={{textAlign:'center'}}>
                    One of the great things about software developer jobs is that you build things in an imaginary word.
                    How cool is that? Every day you create something from nothing. Your imagination is the only thing
                    holding you back and It is all fun!
                </div>
            </div>
        </div>
    </div>
</div>
}