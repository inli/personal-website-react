import './index.scss'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";



function Home() {

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

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="Home">
            <nav className="top-nav">
                <div className='red-date'>{getDate()}</div>
            </nav>

            <Slider {...settings}>
                {images.map(item => {
                    return <div style={{overflow:'hidden'}}>
                        <img height={640} src={require(`../../assets/slide/${item}.jpg`)} />
                    </div>
                })}

            </Slider>
        </div>
    )
}
export default Home;