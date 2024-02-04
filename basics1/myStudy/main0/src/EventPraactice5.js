import React, {Component} from 'react';
import React, {useState} from 'react'

    const EventPractice5 =()=>{
        const [username,setUsername] = useState('');
        const [message,setMessage]=useState('');
        const onChangeUsername  =e=> setUsername(e.target.value);
        const onChnageMessage =e=> setMessage(e.target.value);
        const onClick =()=>{
            alert(username+':'+message);
            setUsername('');
            setMessage('');
        };
        const onKeyPress =e=>{
            if(e.key==='Enter'){
                onClick();
            }
        };
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
                    value={message}
                    onChange={onChnageMessage}
                    onKeyPress={onKeyPress}
                    />
                <button onClick={onClick}>확인 </button>
            </div>
        );
    };

export default EventPractice5;