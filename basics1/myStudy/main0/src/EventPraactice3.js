import React, {Component} from 'react';

class EventPractice3 extends Component{

    state={
        username:'',
        message:''
    }

    handleChange =(e)=>{ //e = 입력값을 들어가는 뜻
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleClick=()=>{
        alert(this.state.username+':'+this.state.message);
        this.setState({
            username: '',
            message:''
        });
    }
    render(){
        return(
            <div> 
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="username"
                placeholder="사용자명"
                Value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    Value={this.state.message}
                    onChange={this.handleChange}
                    />
                <button onClick={this.handleClick}>확인 </button>
            </div>
        );
    }
}

export default EventPractice3;