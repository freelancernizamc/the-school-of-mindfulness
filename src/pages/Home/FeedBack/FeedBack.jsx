import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import student1 from '../../../assets/images/student1.jpg';
import student2 from '../../../assets/images/student2.jpg';
import student3 from '../../../assets/images/student3.jpeg';

const FeedBack = () => {




    return (
        <div className="mb-10 bg-[#272030] text-white">
            <SectionTitle
                subHeading="---The School of Mindfulness"
                heading="What Our Students Say"
            ></SectionTitle>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div className="pb-10">
                    <div className="w-[80px] mx-auto rounded-full"> <img src={student1} /></div>
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Web Developer</h4>
                        <p>
                            I Enjoy on this journey of self-discovery, balance, and well-being with our Yoga and Meditation course, offered by The School of Mindfulness
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-[80px] mx-auto rounded-full"> <img src={student2} /></div>
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Designer</h4>
                        <p>
                            Discover inner peace and unlock your full potential through our transformative Yoga and Meditation course at The School of Mindfulness.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-[80px] mx-auto rounded-full"> <img src={student3} /></div>
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Fashion Designer</h4>
                        <p>
                            Embark on a journey of self-discovery, balance, and well-being with our Yoga and Meditation course, offered by The School of Mindfulness
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}


export default FeedBack;