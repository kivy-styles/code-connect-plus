import React from 'react'

export function Search(){
    return<div>
        <div style={{backgroundColor: '#F3F5F7'}} className={'home-search'}>
            <form style={{display:'flex', padding:'20px 20px'}}>
            <div style={{width:'35%'}}>
                <label className={'label label-default controllabel'} htmlFor={'courses'}>
                    Course
                </label>
                <input className={'form-control'} id={'courses'} name={'courses'} type={'search'}/>
            </div>
                <div style={{width:'52%'}}>
                    <label style={{marginLeft:20}} className={'label label-default controllabel'} htmlFor={'category'}>
                        Category
                    </label>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <input className={'form-control'} style={{width:'45%'}} id={'category'} name={'category'} type={'search'}/>
                        <input className={'form-control'}  style={{width:'45%', marginLeft:15}} id={'category'} name={'category'} type={'search'}/>
                    </div>
                </div>
                <div style={{width:'13%', paddingTop:24}}>
                    <button className={'btn btn-primary'}>Search</button>
                </div>
            </form>
        </div>
    </div>
}