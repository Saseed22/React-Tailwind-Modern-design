// import React from 'react';
import { PhoneIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="relative text-white mx-auto max-w-[1240px]">
        <div className="px-4 py-12">
          <h2 className="text-3xl text-center text-slate-300 pt-8 uppercase">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-center text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quidem. Reprehenderit a illo culpa? Nisi in nostrum vero excepturi
            facere?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 pt-12 px-4 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-700 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                eligendi quidem in dignissimos mollitia incidunt animi officiis
                praesentium, necessitatibus iste.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center gap-x-2 font-bold text-indigo-600 ">
                Contact Us <ArrowSmallRightIcon className="w-6 " />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <CpuChipIcon className="w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-700 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                eligendi quidem in dignissimos mollitia incidunt animi officiis
                praesentium, necessitatibus iste.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center gap-x-2 font-bold text-indigo-600 ">
                Contact Us <ArrowSmallRightIcon className="w-6 " />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <UserGroupIcon className="w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-700 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                eligendi quidem in dignissimos mollitia incidunt animi officiis
                praesentium, necessitatibus iste.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center gap-x-2 font-bold text-indigo-600 ">
                Contact Us <ArrowSmallRightIcon className="w-6 " />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
