import ButtonUp from "@/components/ButtonUp";

import GridGallery from "@/components/GridGallery";

const grid1 = [
  "src/assets/bath-remodeling/Bathroom Remodeling1.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling2.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling3.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling4.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling5.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling6.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling7.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling8.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling9.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling10.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling11.jpeg",
];

const SeeOurWork = () => {
  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed "></div>

      <div className="w-ful  h-[25rem]  flex ">
        <div className="bg-black/30 w-full h-full fixed -z-10 "> </div>
        <div className="fixed w-full h-full  -z-20  ">
          <img
            src="src/assets/fronthouse.jpeg"
            alt="background"
            className=" w-full h-screen object-cover"
          />
        </div>
        <div className="w-full left-0 h-full flex  flex-col items-center -z-10    pt-10  absolute">
          <div className=" w-full h-[423px] flex justify-center items-center  ">
            <div className=" bg-red-500/90 h-[4.5rem] w-[18rem] flex justify-center items-center  ">
              <h1 className="flex text-lg  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[25rem]  ">
                See our Work
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center flex-col border-l-8 border-t-8 ml-32 border-white/40  ">
        <div className="w-full h-[100px]   bg-black/[70%]  "></div>
        <div className="flex h-full justify-center items-center w-full bg-black/[70%]  px-10  ">
          <div className="h-full mx-5">
            <div className="flex h-full  py-10 justify-center">
              <div className="w-[60vw]">
                <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  ">
                  Transform Your Bathroom into a Luxurious Oasis
                </h1>
              </div>
              <GridGallery images={grid1} />
            </div>
          </div>
        </div>
      </div>
      <ButtonUp />
    </div>
  );
};

export default SeeOurWork;
