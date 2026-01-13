const ExpertiseSection = () => {
    return (
        <section className="bg-white text-black py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">

                {/* LEFT IMAGE */}
                <div className="relative flex justify-center">
                    {/* green background shape */}
                    <div className="absolute -bottom-8 left-10 w-[70%] h-[90%] bg-[#CEFFC1] rounded-[22px] z-0 hidden sm:block" />



                    <img
                        src="/images/expertise.jpg"
                        alt="Our Expertise"
                        className="relative z-10 rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div >
                    {/* small label */}
                    <div className="flex items-center gap-2 mb-5">
                        <div className="relative w-[22px] h-[22px] flex items-center justify-center">
                            {/* outer circle */}
                            <div className="absolute w-[22px] h-[22px] rounded-full border-3 border-green-400" />
                            {/* inner dot */}
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>

                        <p className="text-[20px] text-[#333333] font-semibold">Our Expertise</p>
                    </div>


                    {/* heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="text-[#171717]">Smart Charging</span>
                        <br />
                        <span className="text-[#2CDE00]">Solutions, Real Results</span>
                    </h2>

                    {/* description */}
                    <p className="text-[#757575] mt-5 max-w-xl">
                        At ChargeFlow, we simplify your EV experience with cutting-edge
                        technology. Whether for your home or business, our solutions are
                        built to be fast, reliable, and easy to manage—so you’re always
                        ready for the road ahead.
                    </p>

                    {/* features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-6">
                        {[
                            "Host Onboarding & KYC",
                            "Payment Processing",
                            "Charger Management",
                            "Customer Support",
                            "Booking System",
                            "Revenue Analytics",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-400 text-green-400 text-xs">
                                    ✓
                                </span>
                                <span className="text-[#364153] font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
