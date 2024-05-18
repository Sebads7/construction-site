import Container from "@/components/Container";
import WhatWeDo from "./WhatWeDo";
import ButtonUp from "@/components/ButtonUp";
import Review from "@/components/Review";

const Home = () => {
  return (
    <>
      <Container>
        <div className="bg-black opacity-50 w-full h-[65px] flex fixed "></div>
        <div className="w-full flex">
          <div className="w-full  bg-black opacity-90  ">
            <img
              src="src/assets/fronthouse.jpeg"
              alt="background"
              className="w-full h-screen object-cover"
            />
          </div>

          <div className="w-full h-full left-0 flex  flex-col items-center justify-center    bg-black/20  absolute ">
            <div className="flex flex-col justify-center items-center h-[25rem] bg-black/70 w-full">
              <h1 className="mb-4 text-white scroll-m-20  font-extrabold tracking-wider lg:text-5xl  ">
                Atlanta's Top Remodeling Experts
              </h1>
              <h2 className="w-[900px] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-lg">
                Experience the ultimate in home improvement with ABJ Painting &
                Remodeling. Our dedicated team oversees every aspect, ensuring
                seamless progress from beginning to end. Enjoy peace of mindn
                with a single point of contact throughout your project. Sit
                back, unwind, and watch as your dream home takes shape, all
                without lifting a finger.
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <WhatWeDo />
      <div className="w-full h-[10rem]"></div>
      <Review />
      <div className="w-full h-[10rem]"></div>
      <ButtonUp />
    </>
  );
};

export default Home;
