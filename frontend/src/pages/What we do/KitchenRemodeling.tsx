import { Carrousel } from "@/components/Carrousel";
import slide from "@/assets/SlideImages.json";
import Review from "@/components/Review";
import GridGallery from "@/components/GridGallery";

const KitchenRemodeling = () => {
  return (
    // <div className=" w-full">
    //   <div className="bg-black opacity-80 w-full h-[65px] flex fixed"></div>

    //   <div className="w-full h-[300px]  flex justify-center items-center">
    //     <div className="w-80 bg-red-600/80 py-6 ">
    //       <h1 className="flex  text-center justify-center text-white font-bold outline  outline-offset-8 outline-red-300  ">
    //         Kitchen Remodeling
    //       </h1>
    //     </div>
    //   </div>

    //   <div className="flex w-full h-[500px]">box</div>
    // </div>

    <div className=" w-full ">
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>

      <div className="w-full  flex">
        <div className="w-full  bg-gray-900 opacity-70  ">
          <img
            src="./src/assets/kitchen remodeling/kitch-rem2.webp"
            alt="background"
            className="w-full h-screen object-cover "
          />
        </div>
        <div className="w-full h-full left-0 flex  flex-col items-center  bg-black/50 py-10 absolute">
          <div className=" w-full h-[300px] flex justify-center items-center  ">
            <div className=" bg-slate-800/80 h-[5.5rem] w-[22rem] flex justify-center items-center   ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  ">
                Kitchen Remodeling
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-[27rem] w-full bg-gray-900/10 p-10">
            <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  ">
              Masterful Carpentry Creations: Craftsmanship and Precision
            </h1>
            <h2 className="w-[70rem] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl">
              Welcome to our world of craftsmanship, where wood meets creativity
              and precision. With a passion for transforming spaces, we
              specialize in bespoke carpentry solutions that blend timeless
              elegance with functional design, ensuring every project reflects
              your unique vision and exceeds expectations.
            </h2>
          </div>
        </div>
      </div>

      <div className="h-[15rem] w-full "></div>

      <div className="flex  w-full h-full  ">
        <div className="w-[50%] ">
          <div className="bg-black/10 flex flex-col pt-10 px-16  h-[40rem] w-full">
            <div className="bg-gray-200 shadow-xl hover:scale-[1.005] delay-100 transition-all ease-in-out p-10">
              <div className=" flex flex-col  bg-slate-50/90  ">
                <h3 className="text-xl font-semibold tracking-tight text-center pt-10  ">
                  Why choose us for your kitchen remodeling project?
                </h3>
                <ul className="flex flex-col gap-6 text-lg tracking-tight  p-5 px-10  ">
                  <li>
                    Expert Design Consultation: Our experienced designers will
                    work closely with you to understand your preferences,
                    lifestyle, and budget, ensuring that every aspect of your
                    new bathroom aligns with your needs.
                  </li>
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
                    so you can enjoy your new space as soon as possible.
                  </li>
                  <li>
                    Personalized Solutions: We believe that every bathroom
                    should be as unique as its owner. Whether you're looking for
                    modern elegance or timeless charm, we tailor our designs and
                    solutions to match your taste and personality.
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
              className="border-none w-[22rem] h-[41.5rem]"
            />
            <div className="bg-black/10  flex flex-col pt-10 h-[40rem] w-full px-16 relative">
              <div className="bg-gray-200 shadow-xl flex flex-col justify-center  -top-12 absolute left-10  h-full px-10">
                <div className="  bg-slate-50/90 py-10">
                  <h3 className=" text-xl font-semibold tracking-tight pt-20 pl-10">
                    Our Services Include:
                  </h3>
                  <ul className="flex flex-col gap-6  text-lg tracking-tight  p-10 ">
                    <li>Custom Cabinetry</li>
                    <li>Counter-tops</li>
                    <li>Lighting Design</li>
                    <li>Flooring</li>
                    <li>Plumbing and Fixtures</li>
                    <li>Painting and Wall Treatments</li>
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
          <h2 className="text-xl font-semibold tracking-tight text-center py-10">
            View our Work
          </h2>
          <div className="bg-black/20 p-10 shadow-xl ">
            <GridGallery images={slide.kitchenRemodeling} imageLength={3} />
          </div>
        </div>

        <div className="h-[10rem] w-full "></div>
      </div>
    </div>
  );
};

export default KitchenRemodeling;
