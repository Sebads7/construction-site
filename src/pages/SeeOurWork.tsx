import Container from "@/components/Container";
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
    <Container>
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed "></div>

      <div className="flex justify-center items-center flex-col py-[10rem] ">
        <div className="w-80 bg-red-600/80 py-6   ">
          <h1 className="flex  text-center justify-center text-white font-bold outline  outline-offset-8 outline-red-300  ">
            See Our Work
          </h1>
        </div>

        <div className="flex justify-center items-center w-[95%] bg-neutral-800 px-10 my-10 py-[10rem] mt-[5rem] z-9 ">
          <div>
            <div className="flex flex-col   py-10 items-center justify-center  ">
              <h2 className="pb-10 text-white ">Bathroom Remodeling</h2>
              <GridGallery images={grid1} />
            </div>

            <div className="flex flex-col   py-10 items-center justify-center  ">
              <h2 className="pb-10 text-white ">Custom Carpentry</h2>
              <GridGallery images={grid1} />
            </div>

            <div className="flex flex-col   py-10 items-center justify-center  ">
              <h2 className="pb-10 text-white ">
                Interior and Exterior Painting
              </h2>
              <GridGallery images={grid1} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SeeOurWork;
