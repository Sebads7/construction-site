import { Carrousel } from "@/components/Carrousel";
import GridGallery from "@/components/GridGallery";
import Review from "@/components/Review";
import { GiSevenPointedStar } from "react-icons/gi";
import slide from "@/assets/SlideImages.json";

const Carpentry = () => {
  return (
    <div className=" w-full ">
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>

      <div className="w-full  flex">
        <div className="w-full  bg-gray-900 opacity-70  ">
          <img
            src="src/assets/carpentry/Carpentry5.webp"
            alt="background"
            className="w-full h-screen object-cover "
          />
        </div>
        <div className="w-full h-full left-0 flex  flex-col items-center  bg-black/30 py-10 absolute">
          <div className=" w-full h-[300px] flex justify-center items-center  ">
            <div className=" bg-zinc-700/95 h-[5.5rem] w-[22rem] flex justify-center items-center   ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  ">
                Carpentry
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-[27rem] w-full bg-gray-900/10 p-10">
            <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  ">
              Transforming Spaces with Expert Craftsmanship
            </h1>
            <h2 className="w-[70rem] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl">
              At ABJ Carpentry & Design, we excel in crafting stunning carpentry
              projects that blend practicality with elegance. Whether you
              envision bespoke furniture pieces or innovative space-saving
              solutions, our team of expert craftsmen is dedicated to realizing
              your vision with precision and artistry.
            </h2>
          </div>
        </div>
      </div>

      <div className="h-[15rem] w-full "></div>

      <div className="flex  w-full h-full  ">
        <div className="w-[50%] ">
          <div className="bg-black/10 flex flex-col pt-10 px-16  h-[45rem] w-full">
            <div className="bg-gray-200 shadow-xl hover:scale-[1.005] delay-100 transition-all ease-in-out p-10">
              <div className=" flex flex-col  bg-slate-50/90  ">
                <h3 className="text-xl font-semibold tracking-tight text-center pt-10  ">
                  Why choose us for your bathroom remodeling project?
                </h3>
                <ul className="flex flex-col gap-6 text-lg tracking-tight  p-5 px-10  ">
                  <li>
                    Quality Craftsmanship: With years of experience in the
                    industry, our craftsmen are dedicated to delivering superior
                    quality workmanship. From custom cabinetry to intricate tile
                    work, we pay attention to every detail to ensure the highest
                    standards of excellence.
                  </li>
                  <li>
                    Timely Completion: We understand that a bathroom renovation
                    can be disruptive to your daily routine. That's why we
                    strive to complete every project on time and within budget,
                    so you can enjoy your updated bathroom as soon as possible.
                  </li>
                  <li>
                    Personalized Solutions: We believe that every bathroom
                    should be as unique as its owner. Whether you're looking for
                    modern elegance or timeless charm, we tailor our designs and
                    solutions to match your taste and personality.
                  </li>
                  <li>
                    Quality Materials: We source and use only the finest
                    materials for your bathroom renovation. From durable
                    fixtures to luxurious finishes, we ensure that your new
                    bathroom not only looks stunning but also stands the test of
                    time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <div className="flex">
            <Carrousel
              images={slide.kitchenRemodeling}
              className="border-none w-[22rem] h-[46.5rem]"
            />
            <div className="bg-black/10  flex flex-col pt-10 h-[45rem] w-full px-16 relative ">
              <div className="bg-gray-200 shadow-xl flex flex-col justify-center  -top-12 absolute left-10  h-full px-10 ">
                <div className="  bg-slate-50/90 px-10 py-36 ">
                  <h3 className=" text-xl font-semibold tracking-tight pb-10 ">
                    Our Services Include:
                  </h3>
                  <ul className="flex flex-col gap-6  text-lg tracking-tight   ">
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Custom Cabinetry
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Painting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Lighting Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Flooring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Plumbing and Fixtures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <GiSevenPointedStar />
                      </span>
                      Wall Treatments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10rem] w-full "></div>

      <div className="relative">
        <div className="w-full h-full  ">
          <img
            src="./src/assets/kitchen remodeling/kitch-rem4.jpg"
            alt="background"
            className="w-full h-[20rem] object-cover  "
          />
          <div className="w-full h-full bg-black opacity-50  top-0  absolute"></div>
        </div>
      </div>

      <div className="h-[10rem] w-full "></div>

      <div className="flex flex-col w-full h-full py-20">
        <div className="flex  justify-center">
          <Review />
        </div>

        <div className="h-[10rem] w-full "></div>

        <div className="px-10">
          <div className="bg-black/20 py-20 px-10 shadow-xl ">
            <h3 className=" text-2xl font-semibold tracking-tight text-center pb-20 text-white">
              View our Work
            </h3>
            <GridGallery images={slide.kitchenRemodeling} imageLength={3} />
          </div>
        </div>

        <div className="h-[10rem] w-full "></div>
      </div>
    </div>
  );
};

export default Carpentry;
