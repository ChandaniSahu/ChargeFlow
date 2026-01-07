import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function LoginPage() {
    return (
        <div className="mt-20  rounded-2xl bg-white/50 py-2 px-6 backdrop-blur-md border border-[#DADADA] shadow-xl z-[150]">
            <div className="mb-3 text-center">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={90}
                    height={90}
                    className="mx-auto transform scale-90 transition-transform duration-300 ease-in-out"
                />
                <h2 className="mt-1 text-[24px] text-[#141414] font-semibold">Welcome Back</h2>
            </div>

            <div className="space-y-4 text-[18px] text-[#171717]">
                {/* Email / Phone */}
                <div className="space-y-6 ">
                    <label className="font-semibold">Email / Phone Number</label>
                    <div className="relative rounded-xl ring-0  hover:ring-2 hover:ring-[#38EF0A] focus-within:ring-2 focus-within:ring-[#38EF0A] transition-all duration-300 ease-in-out ">
                        <MdMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[25px]" />
                        <input
                            type="text"
                            placeholder="your.email@example.com"
                            className="w-full rounded-xl bg-white px-12 py-3 shadow-md outline-none placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-6">
                    <label className="font-semibold">Password</label>
                    <div className="relative rounded-xl  ring-0  hover:ring-2 hover:ring-[#38EF0A] focus-within:ring-2 focus-within:ring-[#38EF0A] transition-all duration-300 ease-in-out">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full rounded-xl bg-white px-12 py-3 shadow-md outline-none placeholder:text-gray-400"
                        />
                        <div className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full hover:bg-green-100 p-1 transition-all duration-300 ease-in-out">
                            <IoEyeSharp className=" text-gray-400 cursor-pointer text-xl group-hover:text-[#38EF0A] transition-colors duration-300 ease-in-out " />
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-2 flex justify-between text-xs">
<label className="flex items-center gap-1 text-[14px] font-bold cursor-pointer group">
  <input type="checkbox" className="peer sr-only"/>
  <span className="flex h-4 w-4 items-center justify-center rounded border border-white bg-transparent text-xs font-bold peer-checked:bg-green-500 peer-checked:border-white peer-checked:[&>span]:block">
    <span className="hidden text-white">✓</span>
  </span>
  Remember me
</label>
                <span className="text-[#38EF0A] text-[13px] hover:text-[#FBFB05] cursor-pointer">
                    Forgot Password?
                </span>
            </div>
           
           <div className="px-2 mt-2">
            <button className="mt-3 w-full rounded-[10px] bg-[#38EF0A] py-2  text-white text-[24px] font-semibold shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:bg-[#32c700] transition-colors duration-300 ease-in-out cursor-pointer">
                Log In
            </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-3 text-sm text-[#E0E0E0]">
                <span className="inline-block h-[1.5px] w-28 bg-gray-300"></span>
                <span>or</span>
                <span className="inline-block h-[1.5px] w-28 bg-gray-300"></span>
            </div>

            <div className="flex justify-center gap-4">
                <div className="bg-white flex items-center justify-center rounded-full p-1">
                    <Image src="/icons/google.svg" alt="google" width={18} height={18} />
                </div>
                <div className="bg-white flex items-center justify-center rounded-full p-1">
                    <Image src="/icons/apple.svg" alt="apple" width={18} height={18} />
                </div>
                <div className="bg-white flex items-center justify-center rounded-full p-1">
                    <Image src="/icons/facebook.svg" alt="facebook" width={18} height={18} />
                </div>
            </div>

            <p className="mt-4 text-center font-[600]">
                <span className="text-[12px]">Don’t have an account?</span>
                <span className="text-[#38EF0A] text-[13px] hover:text-[#FBFB05] cursor-pointer"> Sign Up</span>
            </p>
        </div>
    );
}
