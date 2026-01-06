import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export default function LoginPage() {
    return (
        <div className="mt-10 w-[400px] rounded-2xl bg-white/50 py-2 px-4 backdrop-blur-md border border-[#DADADA] shadow-xl z-[150]">
            <div className="mb-3 text-center">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={90}
                    height={90}
                    className="mx-auto"
                />
                <h2 className="mt-1 text-[24px] text-[#141414] font-semibold">Welcome Back</h2>
            </div>

            <div className="space-y-5 text-[18px] text-[#171717]">
                {/* Email / Phone */}
                <div className="space-y-6 ">
                    <label className="font-semibold">Email / Phone Number</label>
                    <div className="relative rounded-xl hover:border border-[#38EF0A] ">
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
                    <div className="relative rounded-xl hover:border border-[#38EF0A]">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full rounded-xl bg-white px-12 py-3 shadow-md outline-none placeholder:text-gray-400"
                        />
                        <IoEyeSharp className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-xl" />
                    </div>
                </div>
            </div>


            <div className="mt-3 flex justify-between text-xs">
                <label className="flex items-center gap-1 font-bold cursor-pointer">
                      <input type="checkbox" />

     {/* <span
      className="flex h-4 w-4 items-center justify-center rounded
                 border border-white bg-transparent
                 text-white text-xs font-bold
                 peer-checked:bg-green-500
                 peer-checked:border-white"
    >
      <span className="block peer-checked:hidden text-white">✓</span>
    </span> */}
                    Remember me
                </label>
                <span className="text-green-600 cursor-pointer">
                    Forgot Password?
                </span>
            </div>
           
           <div className="px-2 mt-2">
            <button className="mt-4 w-full rounded-lg bg-[#38EF0A] py-2  text-white text-[24px] font-semibold hover:bg-green-600">
                Log In
            </button>
            </div>

            <div className="my-4 flex items-center justify-center gap-3 text-sm text-[#E0E0E0]">
                <span className="inline-block h-px w-24 bg-gray-300"></span>
                <span>or</span>
                <span className="inline-block h-px w-24 bg-gray-300"></span>
            </div>

            <div className="flex justify-center gap-4">
                <div className="bg-white flex items-center justify-center rounded-full p-2">
                    <Image src="/icons/google.svg" alt="google" width={24} height={24} />
                </div>
                <div className="bg-white flex items-center justify-center rounded-full p-2">
                    <Image src="/icons/apple.svg" alt="apple" width={24} height={24} />
                </div>
                <div className="bg-white flex items-center justify-center rounded-full p-2">
                    <Image src="/icons/facebook.svg" alt="facebook" width={24} height={24} />
                </div>
            </div>

            <p className="mt-4 text-center text-[12px] font-[600]">
                Don’t have an account?
                <span className="text-green-600 cursor-pointer"> Sign Up</span>
            </p>
        </div>
    );
}
