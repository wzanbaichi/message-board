import React, { Component } from 'react';
import Message from './message';
import './comment.css';
import AV from 'leancloud-storage';
var APP_ID = 'JgQDRhW5zpoC2R8XJn8KCa2C-gzGzoHsz';
var APP_KEY = 'PH4EdVgpO1XplJXOAmtEWrNX';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});




class Comment extends Component {

    render(){
        let addLi = this.props.info.info.filter(function (e) {
            return e.delate === 'null'
        }).map(function (item,index) {
            return (
                <li key={index}>
                    <p><b>username</b> &nbsp;&nbsp;&nbsp;{this.props.info.info[index].name}<span>{this.props.info.time[index]}</span></p>
                    <p>{this.props.info.info[index].content}</p>
                    <button onClick={this.delate.bind(this)}>删除</button>
                </li>
            )
        }.bind(this))
        return (
            <div className='comment'>
                <h3>Placeholder Message</h3>
                <ul>
                    {addLi}
                </ul>
            </div>
        )
    }

    delate(e){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }

}

export default Comment