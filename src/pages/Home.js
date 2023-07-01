/**
 * 首页
 * 
 */

import './Home.scss'
import bg from '../assets/IMG_20221112_145516.jpg'
import wechat from '../assets/wechat.svg'
import email from '../assets/email.svg'
import phone from '../assets/mobile-phone.svg'
import { useState } from 'react'

function Home() {
    const titleText = 'Irene | 叶子 | ✌';
    const welcomeContentText = `Hi stranger. Welcome to my website.

    The following pages are meant to give you a glimpse into my joyful life and busy mind; a centralized place to read up on my ideas, thoughts and projects. `
    const icons = [{ icon: email, text: 'email' }, { icon: phone, text: 'phone' }, { icon: wechat, text: 'wechat' }];
    const contactText = {
        email: '1163045483@qq.com',
        phone: '13777804613',
        wechat: '13777804613'
    }
    const [crtContactType, setCrtContactType] = useState('email');
    return (
        <div className="Home">

            <img className="bg-big-img" src={bg} />
            <div className='content'>
                <div className='texts'>
                    <div className='title'>{titleText}</div>
                    <p className='welcome-content'>{welcomeContentText}</p>
                </div>
                <div className='bottom-btns'>
                    <button className='enter-btn'>ENTER</button>

                </div>
            </div>

            <div className='contact'>
                <div className='icons'>
                    {icons.map(item => <img className='icon-img' src={item.icon}
                        onClick={() => { setCrtContactType(item.text) }}
                        style={{opacity:item.text === crtContactType ? 1 : 0.5}}
                    />)}
                </div>
                <span className='detail-text'>{contactText[crtContactType]}</span>
            </div>
        </div>
    );
}

export default Home;