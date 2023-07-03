import './index.scss'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Nav from '../../components/Nav';



function Home() {



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
            <Nav></Nav>

            <Slider {...settings}>
                {images.map(item => {
                    return <div style={{overflow:'hidden'}}>
                        <img height={640} src={require(`../../assets/slide/${item}.jpg`)} />
                    </div>
                })}
            </Slider>

            <div className='bottom-right-contact'>
                <div className='up'>邮箱：<span className='red'>1163045483@qq.com</span></div>
                <div className='down'>手机：<span className='red'>13777804613</span></div>
            </div>
        </div>
    )
}
export default Home;