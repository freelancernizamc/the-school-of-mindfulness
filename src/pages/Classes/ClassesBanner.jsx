
import banner3 from '../../assets/images/classes-banner.jpg';

const ClassesBanner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="hero min-h-screen" style={bannerStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">OUR CLASSES</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <button className="btn bg-[#9931E1] text-white">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesBanner;
