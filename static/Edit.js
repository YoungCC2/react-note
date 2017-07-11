/**
 * Created by yhyhy on 2017/7/11.
 */
import React from 'react'
import {render} from 'react-dom'

export default React.createClass({
    saveChangeHandle(){
        this.props.nSave(this.refs.Addtitle.value,this.refs.Addcontent.value);
    },
    render(){
        var defaultVal  = this.props.defaultVal;
        console.log(defaultVal);
        return <section className="createnote left-transition">
            <div className="createnote__field" >
                <input ref="Addtitle" defaultValue = {defaultVal.title} type="text" className="createnote__field--title" placeholder="Title note"/>
                <textarea ref="Addcontent" defaultValue = {defaultVal.content} className="createnote__field--text" placeholder="This is my note written in Markdown"></textarea>
                <button className="header__btngroup--save v-link-active" type="button" onClick={this.saveChangeHandle}>Save</button>
            </div>
        </section>
    }
})