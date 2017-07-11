/**
 * Created by yhyhy on 2017/7/6.
 */
import React from 'react'
import {render} from  'react-dom'

export default React.createClass({
    saveChangeHandle(){
        this.props.nSave(this.refs.Addtitle.value,this.refs.Addcontent.value);
    },
    render(){
        return <section className="createnote left-transition">
            <div className="createnote__field" >
                <input ref="Addtitle" type="text" className="createnote__field--title" placeholder="Title note"/>
                <textarea ref="Addcontent" className="createnote__field--text" placeholder="This is my note written in Markdown"></textarea>
                <button className="header__btngroup--save v-link-active" type="button" onClick={this.saveChangeHandle}>Save</button>
            </div>
        </section>
    }
});