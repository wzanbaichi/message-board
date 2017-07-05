import React,{Component} from 'react';
export default class Message extends Component{
    render(){
        let idx = this.props.content.id.length-1
        return (
            <div>
                <p>{this.props.content.info[idx].name}</p>
                <p>asdfsdafdsfsd</p>
            </div>
        )
    }

}

