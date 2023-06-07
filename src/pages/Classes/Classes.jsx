import { Helmet } from "react-helmet-async";
import ClassesBanner from "./ClassesBanner";

const Classes = () => {
    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Classes</title>

            </Helmet>
            <ClassesBanner />
        </div>
    );
};

export default Classes;