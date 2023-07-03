import Nav from "../../components/Nav";
import './index.scss'
import data from "./data";
import { useState } from "react";

function Photos() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [hoverImageIndex, setHoverImageIndex] = useState(null);

    return (
        <div className="Photos">
            <Nav></Nav>
            <div className="photo-collection">
                {images.map(item => {
                    return (
                        <div className="photo-item-wrapper" onMouseEnter={() => {
                            setHoverImageIndex(item)
                        }}
                            onMouseLeave={() => {
                                setHoverImageIndex(null);
                            }}
                        >
                            <img
                                key={item}
                                className="photo-item"
                                src={require(`../../assets/photos/${item}.jpg`)}
                            />
                            {hoverImageIndex === item && (
                                <div className="hover-text">{data[item]}</div>
                            )}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default Photos;