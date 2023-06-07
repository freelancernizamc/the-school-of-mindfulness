import { Helmet } from "react-helmet-async";
import InstractorBanner from "./InstractorBanner";


const Instractors = () => {
    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Instractors</title>

            </Helmet>
            <InstractorBanner />
        </div>
    );
};

export default Instractors;