import Carousel from "nuka-carousel"
import banner1 from '../../../assets/images/banner5.png';
import banner2 from '../../../assets/images/yogabanner1.png';
import banner3 from '../../../assets/images/banner3.png';
import banner4 from '../../../assets/images/yogabanner2.png';

const Banner = () => {
    return (
        <Carousel>
            <img src={banner4} />
            <img src={banner2} />
            <img src={banner3} />
            <img src={banner4} />
            <img src={banner1} />
        </Carousel>
    );
};

export default Banner;