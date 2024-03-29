import React, {Component} from 'react';

class EventPractice2 extends Component{

    state={message:''}

    handleClick =(e)=>{ //e = 입력값을 들어가는 뜻
        this.setState({
            message:e.target.value
        });
    }

    handleClick=()=>{
        alert(this.state.message);
        this.setState({
            message:''
        });
    }
    render(){
        return(
            <div> 
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인 </button>
            </div>
        );
    }
}

export default EventPractice2;