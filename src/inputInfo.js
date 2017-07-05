import React, {Component} from 'react';
import './inputInfo.css';


class InputInfo extends Component {


    render() {
        return (
            <div className='inputInfo'>
                <div className='row'>
                    <h3>leave a message</h3>
                </div>
                <div className='row'>
                    <label htmlFor="">your Name</label>
                    <input type="text"
                           onChange={this.changeName.bind(this)}
                           value={this.props.info.name}/>
                </div>
                <div className='row'>
                    <label htmlFor="">your Comment</label>
                    <textarea className='commentTxt'
                              value={this.props.info.content}
                              onChange={this.changeContent.bind(this)}/>
                </div>
                <div className="row">
                    <button type='submit' onClick={this.submit.bind(this)}>submit</button>
                </div>
            </div>
        )
    }

    changeName(event){
        this.props.changeName(event)
    }
    changeContent(event){
        this.props.changeContent(event)
    }
    submit(){
        this.props.submit()
    }
}

export default InputInfo;