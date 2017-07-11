/**
 * Created by yhyhy on 2017/7/7.
 */
import React from 'react'
import {render} from  'react-dom'
import { Router, Route,hashHistory,IndexRoute ,IndexRedirect} from 'react-router'
import Home from './Home'
import Header from './Header'
import Add from './Add'
import Edit from './Edit'

var noteList = {
    note:[
        {
            title:'One',
            content:'E=ABC'
        },
        {
            title:'Two',
            content:'have done'
        }
    ]
}
var s ;
export default React.createClass({
    getInitialState(){
        return {
            opens:true,
            list:noteList,
            type:"save"
        }
    },
    addHandle(){
        return function () {
            this.setState({
                type : "add"
            })
        }.bind(this);
    },
    saveHandle(){
       return function (title,content) {
           console.info('Add_success');
           var noteList = this.state.list;
           if(this.state.type == 'add'){
               this.setState(function () {
                       var item = {
                           title:title,
                           content:content
                       };
                       noteList.note.push(item);
                       return {
                           type: "save"
                       }
                   }
               )
           }else if(this.state.type == 'edit'){
               this.setState(function () {
                   noteList.note[s]["title"] = title;
                   noteList.note[s]["content"] = content;
                   return {
                       type: "save"
                   }
               })
           }
       }.bind(this);
    },
    delHandle(index){
        console.info('Del_success');
        return function () {
            this.setState(function () {
                var list = this.state.list;
                list.note.splice(index,1);
            })
        }.bind(this);
    },
    editHandle(index){
        var list = this.state.list;
        return function () {
            if(this.props.type != "edit"){
                s = index;
                this.setState(function () {
                    return {
                        type:"edit"
                    }
                })
            }
        }.bind(this);
    },
    render(){
        var noteList = this.state.list;
        var sec ;
        switch (this.state.type){
            case "add":
                sec = <Add nSave = {this.saveHandle()}/>;
                break;
            case "save":
                sec = <Home editNote = {this.editHandle} delNote = {this.delHandle} note={noteList.note}/>;
                break;
            case "edit":
                sec = <Edit defaultVal = {noteList.note[s]} nSave = {this.saveHandle()}/>;
                break;
            default :
                console.info('error type');
                break;
        }

        return (<div className="container">
                <Header nClick = {this.addHandle()}/>
                {sec}
            </div>
        )
    }
});