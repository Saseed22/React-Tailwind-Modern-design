import React from "react";
import {
  CloudIcon,
  CircleStackIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import bgimg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-zinc-200"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-4 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-4 text-5xl font-bold md:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgimg} alt="boom" />
        </div>
        <div
          className="flex flex-col py-4 absolute md:min-w-[760px] 
                bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex py-2 px-4 text-slate-500">
              <CloudIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <CircleStackIcon className="h-6 text-indigo-600" /> Dashboard Data
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex py-2 px-4 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
