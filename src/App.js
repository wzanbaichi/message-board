import React, { Component } from 'react';
import './App.css';
import InputInfo from './inputInfo';
import Comment from './comment';
import AV from 'leancloud-storage';



var i = 0;
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            name: '',
            content: '',
            time: [],
            id: [],
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img className='zhifeiji' src={require('./zhifeiji.jpg')}/>
                    <h2>message board</h2>
                </div>
                <InputInfo changeName={this.changeName.bind(this)}
                           changeContent={this.changeContent.bind(this)}
                           submit={this.submit.bind(this)}
                           info={this.state}
                />
                <Comment info={this.state}
                         delate={this.delate.bind(this)}
                />
            </div>
        );
    }

    delate(){
        // this.setState({info:this.state.info})
    }

    changeName(e){
        e.preventDefault()
        // this.state.name=e.target.value
        this.setState({name:e.target.value})
    }
    changeContent(e){
        e.preventDefault()
        // this.state.content = e.target.value
        // console.log(this.state.content);
        this.setState({content:e.target.value})
    }
    submit(){
        if(this.state.name === ''&&this.state.content ===''){
            alert("请输入您的姓名和留言内容");
        }else if(this.state.content === ''){
            alert('请输入留言内容');
        }else if(this.state.name === ''){
            alert('请输入您的姓名')
        }else {
            this.state.info.push({
                name:this.state.name,
                content:this.state.content,
                delate:'null'
            })
            this.state.id.push(i);
            i++;
            this.state.time.push(new Date().toLocaleString())
            // console.log(this.state);
            this.setState({
                name:'',
                content:'',
                // time:new Date().toLocaleString(),
                id:this.state.id,
                // data:aaa
            })
        }
    }
}
export default App;
