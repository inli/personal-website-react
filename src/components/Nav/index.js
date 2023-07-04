import { Link, useLocation } from "react-router-dom";
import './index.scss'
import { useEffect, useState } from "react";
function Nav() {
    const getDate = () => {
        // 获取当前日期
        var date = new Date();

        // 获取当前月份
        var nowMonth = date.getMonth() + 1;

        // 获取当前是几号
        var strDate = date.getDate();

        // 添加分隔符“-”
        var seperator = ".";

        // 对月份进行处理，1-9月在前面添加一个“0”
        if (nowMonth >= 1 && nowMonth <= 9) {
            nowMonth = "0" + nowMonth;
        }

        // 对月份进行处理，1-9号在前面添加一个“0”
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }

        // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
        var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
        return nowDate;
    }

    const [currentLink, setCurrentLink] = useState(null);

    let location = useLocation();
    useEffect(() => {
        console.log('location', location);
        setCurrentLink(location.pathname);
    }, [location]);

    const links = [
        {
            path: '/home',
            name: '首页',
        },
        {
            path: '/photos',
            name: '照片'
        }
    ]

    return (
        <nav className="top-nav">
            <div className='red-date'>{getDate()}</div>
            {links.map(item => {
                return <Link
                    key={item.path}
                    className="text-link"
                    style={{fontWeight:currentLink === item.path ? '600' : '400'}}
                    to={item.path}
                >{item.name}</Link>
            })}
        </nav>
    )
}

export default Nav;