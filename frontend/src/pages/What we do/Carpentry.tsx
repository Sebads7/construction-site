const Carpentry = () => {
  return (
    // <div className=" w-full">
    //   <div className="bg-black opacity-80 w-full h-[65px] flex fixed z-10"></div>

    //   <div className="w-full   flex justify-center items-center relative ">
    //     <div className="w-full   bg-gray-900 opacity-70 ">
    //       <img
    //         src="src/assets/carpentry/Hire-A-Carpenter1.jpeg"
    //         alt="background"
    //         className="w-full h-screen object-cover "
    //       />
    //     </div>
    //     <div className="w-80 bg-red-600/80 py-6 absolute top-28 ">
    //       <h1 className="flex  text-center justify-center text-white font-bold outline  outline-offset-8 outline-red-300  ">
    //         Carpentry
    //       </h1>
    //     </div>
    //   </div>

    //   <div className="flex w-full h-[500px] relative">box</div>
    // </div>
    <div className=" w-full">
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>

      <div className="w-full  flex">
        <div className="w-full  bg-gray-900 opacity-70  ">
          <img
            src="src/assets/carpentry/Hire-A-Carpenter1.jpeg"
            alt="background"
            className="w-full h-screen object-cover "
          />
        </div>
        <div className="w-full h-full left-0 flex  flex-col items-center    bg-black/50 py-10 absolute">
          <div className=" w-full h-[300px] flex justify-center items-center  ">
            <div className=" bg-red-500/90 h-[4.5rem] w-[18rem] flex justify-center items-center   ">
              <h1 className="flex text-lg  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[25rem]  ">
                Carpentry
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-[300px]">
            <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  ">
              Masterful Carpentry Creations: Craftsmanship and Precision
            </h1>
            <h2 className="w-[900px] text-white text-center leading-7 [&:not(:first-child)]:mt-6">
              Welcome to our world of craftsmanship, where wood meets creativity
              and precision. With a passion for transforming spaces, we
              specialize in bespoke carpentry solutions that blend timeless
              elegance with functional design, ensuring every project reflects
              your unique vision and exceeds expectations.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[500px] items-center p-4 mt-10">
        <h2 className="mb-4">
          Why choose us for your bathroom remodeling project?
        </h2>
        <ol className="w-[800px] p-4">
          <li className="pb-4">
            Expert Design Consultation: Our experienced designers will work
            closely with you to understand your preferences, lifestyle, and
            budget, ensuring that every aspect of your new bathroom aligns with
            your needs.
          </li>
          <li className="pb-4">
            Quality Craftsmanship: With years of experience in the industry, our
            craftsmen are dedicated to delivering superior quality workmanship.
            From custom cabinetry to intricate tile work, we pay attention to
            every detail to ensure the highest standards of excellence.
          </li>
          <li className="pb-4">
            Timely Completion: We understand that a bathroom renovation can be
            disruptive to your daily routine. That's why we strive to complete
            every project on time and within budget, so you can enjoy your new
            space as soon as possible.
          </li>
          <li className="pb-4">
            Personalized Solutions: We believe that every bathroom should be as
            unique as its owner. Whether you're looking for modern elegance or
            timeless charm, we tailor our designs and solutions to match your
            taste and personality.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carpentry;
