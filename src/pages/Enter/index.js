/**
 * 首页
 * 
 */

import './index.scss'
import bg from '../../assets/IMG_20221112_145516.jpg'
import wechat from '../../assets/wechat.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/mobile-phone.svg'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Enter() {
    const titleText = 'yys的个人空间|✌';
    const welcomeContentText = `——————`
    const icons = [{ icon: email, text: 'email' }, { icon: phone, text: 'phone' }, { icon: wechat, text: 'wechat' }];
    const contactText = {
        email: '1163045483@qq.com',
        phone: '13777804613',
        wechat: '13777804613'
    }
    const [crtContactType, setCrtContactType] = useState('email');
    return (
        <div className="Enter">

            <img className="bg-big-img" src={bg} />
            <div className='content'>
                <div className='texts'>
                    <div className='title'>{titleText}</div>
                    <p className='welcome-content'>{welcomeContentText}</p>
                </div>
                <div className='bottom-btns'>
                    <Link className='enter-link' to={'/home'}>ENTER</Link>
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

export default Enter;