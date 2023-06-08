import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import student1 from '../../../assets/images/student1.jpg';
import student2 from '../../../assets/images/student2.jpg';
import student3 from '../../../assets/images/student3.jpeg';

const FeedBack = () => {




    return (
        <div className="mb-10 bg-black text-white">
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
                        <h4>Designer</h4>
                        <p>
                            It is freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-[80px] mx-auto rounded-full"> <img src={student2} /></div>
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Designer</h4>
                        <p>
                            The simple and intuitive design makes it easy for me use. I highly
                            recommend Fetch to my peers.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-[80px] mx-auto rounded-full"> <img src={student3} /></div>
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Designer</h4>
                        <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I am on the go!
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}


export default FeedBack;