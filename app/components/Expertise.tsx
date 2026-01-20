const ExpertiseSection = () => {
    return (
        <section className="bg-white text-black pt-20 pb-12 px-4 ">
                      {/* small label */}
                     <div className="font-roboto flex items-center gap-2 mb-5 text-center justify-center xl:hidden block">
                        <div className="relative w-[22px] h-[22px] flex items-center justify-center">
                            {/* outer circle */}
                            <div className="absolute w-[22px] h-[22px] rounded-full border-3 border-green-400" />
                            {/* inner dot */}
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>

                        <p className="font-roboto text-[#333333] font-semibold text-[20px] leading-[100%] tracking-[0] capitalize">Our Expertise</p>
                    </div> 
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">

                {/* LEFT IMAGE */}
        <div className="relative flex justify-center mb-10 xl:mb-0">
  <div
    className="
      absolute bg-[#CEFFC1] rounded-[22px] z-0
      -bottom-6 -left-6 w-[90%] h-[85%]
      tablat:-bottom-8 tablat:left-30 tablat:w-[50%] tablat:h-[80%]
      xl:-bottom-8 xl:left-10 xl:w-[70%] xl:h-[90%]
    "
  />

  <img
    src="/images/expertise.jpg"
    alt="Our Expertise"
    className="relative z-10 rounded-xl shadow-lg w-full max-w-md object-cover"
  />
</div>


                {/* RIGHT CONTENT */}
                <div className="xl:mx-0 mx-auto">
                    {/* small label */}
                    <div className="flex  items-center gap-2 mb-5 hidden xl:flex">
                        <div className="relative w-[22px] h-[22px] flex items-center justify-center">
                            {/* outer circle */}
                            <div className="absolute w-[22px] h-[22px] rounded-full border-3 border-green-400" />
                            {/* inner dot */}
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>

                        <p className="font-roboto text-[#333333] font-semibold text-[20px] leading-[100%] tracking-[0] capitalize">Our Expertise</p>
                    </div>


                    {/* heading */}
                    <h2 className="font-roboto text-4xl md:text-5xl font-extrabold leading-tight text-center xl:text-left">
                        <span className="text-[#171717]">Smart Charging</span>
                        <br />
                        <span className="text-[#2CDE00]">Solutions, Real Results</span>
                    </h2>

                    {/* description */}
                    <p className="font-inter text-[#757575] mt-5 max-w-xl  xl:text-left text-justify xl:mx-0 mx-auto">
                        At ChargeFlow, we simplify your EV experience with cutting-edge
                        technology. Whether for your home or business, our solutions are
                        built to be fast, reliable, and easy to manage—so you’re always
                        ready for the road ahead.
                    </p>

                    {/* features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-6  mx-10 xl:mx-0">
                        {[
                            "Host Onboarding & KYC",
                            "Payment Processing",
                            "Charger Management",
                            "Customer Support",
                            "Booking System",
                            "Revenue Analytics",
                        ].map((item) => (
                            <div key={item} className="font-inter flex items-center gap-3">
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
