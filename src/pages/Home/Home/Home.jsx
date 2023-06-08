import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopInstructor from "../TopInstractor/TopInstractor";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TopClasses from "../../Classes/TopClasses";
import FeedBack from "../FeedBack/FeedBack";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Home</title>

            </Helmet>
            <Banner />
            <SectionTitle
                subHeading="---The School of Mindfulness"
                heading="Our Top Instractors"
            ></SectionTitle>
            <TopInstructor />
            <SectionTitle
                subHeading="---The School of Mindfulness"
                heading="Our Top Classes"
            ></SectionTitle>
            <TopClasses />
            <FeedBack />
        </div>
    );
};

export default Home;