import { UserIcon , ChargerIcon , ShieldIcon, ArrowIcon } from "./icons";
export default function InfoCards() {
  const infoData =  [
          { title: "New to ChargeFlow?", 
            des:"Create an account to start charging your EV or list your charging station",
            btn: "Sign Up", 
            icon: <UserIcon/>
 },
          { title: "Become a Host", 
            des:"Start earning by listing your charging station on our platform",
            btn: "Host Registration", 
            icon: <ChargerIcon/>
 },
          { title: "Need Help?", 
            des:"Get support for login issues or account-related questions",
            btn: "Contact Support", 
            icon: <ShieldIcon/>
 },
        ]
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {infoData.map((item, i) => (
          <div
            key={i}
            className="mx-auto rounded-xl bg-white p-6 w-[280px] text-center shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:ring-[1.2px] hover:ring-[#38EF0A] transition-all duration-300 ease-in-out justify-center items-center flex flex-col"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="mb-1 text-[20px] font-semibold">{item.title}</h3>
            <p className="mb-4 text-[12px] text-gray-600">{item.des}</p>
            <button className="rounded-full bg-[#38EF0A] px-4 py-2 text-sm text-white text-[20px] font-semibold flex flex-wrap items-center justify-center gap-2 cursor-pointer hover:bg-[#32c700] transition-colors duration-300 ease-in-out">
              {item.btn} <ArrowIcon/>

            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
