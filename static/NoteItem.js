/**
 * Created by yhyhy on 2017/7/8.
 */
import React from 'react'
import {render} from 'react-dom'

export default React.createClass({
    render(){
        var Dates = new Date();
        var data = this.props.data;
        return <div className="listnotes__note">
            <span className="listnotes__note--edit" onClick={this.props.editNote}></span>
            <span className="listnotes__note--close" onClick={this.props.delNote}></span>
            <h1>{data.title}</h1>
            <span>{Dates.toDateString()}</span>
            <p>{data.content}</p>
        </div>
    }
})