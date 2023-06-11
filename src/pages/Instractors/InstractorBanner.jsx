
import banner2 from '../../assets/images/instractors-banner.jpg';

const InstractorBanner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="hero min-h-screen" style={bannerStyle}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">OUR INSTRACTORS</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <button className="btn bg-[#9931E1] text-white hover:bg-[#272030]">Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstractorBanner;
