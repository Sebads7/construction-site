import { Carrousel } from "@/components/Carrousel";

const slides1 = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

const slides2 = [
  "src/assets/bath-remodeling/bth1.JPG",
  "src/assets/bath-remodeling/bth2.JPG",
  "src/assets/bath-remodeling/bth3.JPG",
];

const slides3 = [
  "src/assets/painting/painting1.JPG",
  "src/assets/painting/Painting2.jpg",
  "src/assets/painting/Painting3.jpg",
];

const WhatWeDo = () => {
  return (
    <div className="flex items-center flex-col px-5  ">
      <div className="flex  items-center  py-[100px] ">
        <Carrousel images={slides1} imageSize={"300px"} />
        <div className="flex flex-col pl-5 gap-6 justify-center items-center">
          <h1 className="flex justify-center font-bold ">CUSTOM CARPENTRY</h1>
          <h2 className="w-[900px]">
            Set up an appointment to talk in-person or virtually with a Designer
            about ideas for your home. Together, you will develop design
            concepts, make product selections, and finalize details on your
            blueprints. We’ll handle the permits and construction and a
            dedicated Project Superintendent will make sure everything runs
            smoothly, all the way through to the final inspection.
          </h2>
          <button
            type="button"
            className="flex justify-center w-[400px] rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            View more of our work
          </button>
        </div>
      </div>
      <hr className=" w-full" />
      {/* SECOND SET */}

      <div className=" flex items-center justify-end  py-[100px]">
        <div className="flex flex-col pr-5 gap-6 justify-center items-center">
          <h1 className="flex justify-center font-bold ">
            BATHROOM REMODELING
          </h1>
          <h2 className="w-[900px]">
            Set up an appointment to talk in-person or virtually with a Designer
            about ideas for your home. Together, you will develop design
            concepts, make product selections, and finalize details on your
            blueprints. We’ll handle the permits and construction and a
            dedicated Project Superintendent will make sure everything runs
            smoothly, all the way through to the final inspection.
          </h2>
          <button
            type="button"
            className="flex justify-center w-[400px] rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            View more of our work
          </button>
        </div>
        <Carrousel images={slides2} imageSize={"300px"} />
      </div>
      <hr className=" w-full" />

      {/* SECOND SET */}
      <div className="flex items-center  py-[100px] ">
        <Carrousel images={slides3} imageSize={"300px"} />
        <div className="flex flex-col pl-5 gap-6 justify-center items-center">
          <h1 className="flex justify-center font-bold  ">
            INTERIOR AND EXTERIOR PAINTING
          </h1>
          <h2 className="w-[900px]">
            Set up an appointment to talk in-person or virtually with a Designer
            about ideas for your home. Together, you will develop design
            concepts, make product selections, and finalize details on your
            blueprints. We’ll handle the permits and construction and a
            dedicated Project Superintendent will make sure everything runs
            smoothly, all the way through to the final inspection.
          </h2>
          <button
            type="button"
            className="flex justify-center w-[400px] rounded bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong "
          >
            View more of our work
          </button>
        </div>
      </div>
      <hr className=" w-full" />
    </div>
  );
};

export default WhatWeDo;
