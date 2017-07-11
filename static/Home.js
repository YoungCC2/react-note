/**
 * Created by yhyhy on 2017/7/6.
 */
import React from 'react'
import {render} from  'react-dom'
import NoteItem from './NoteItem'

export default React.createClass({
    render(){
        var note = this.props.note;
        var that = this;
        return <section className="listnotes left-transition">
            {note.map(function (k,v) {
                    return <NoteItem editNote = {that.props.editNote(v)} delNote = {that.props.delNote(v)} data = {k} key = {v}/>
            })}
        </section>

    }
})