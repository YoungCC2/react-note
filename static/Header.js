/**
 * Created by yhyhy on 2017/7/7.
 */
import React from 'react'
import {render} from  'react-dom'


export default React.createClass({
    render(){
        return <header className="header">
            <div className="header__searchbox">
                <input className="header__searchbox--input" type="text" placeholder="search your notes"/>
            </div>
            <div className="header__btngroup">
                <button className="header__btngroup--new v-link-active" type="button" onClick={this.props.nClick}>New</button>
            </div>
        </header>

    }
})