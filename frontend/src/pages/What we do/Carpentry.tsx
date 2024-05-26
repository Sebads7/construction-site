const Carpentry = () => {
  return (
    <div className=" w-full">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed z-10"></div>

      <div className="w-full   flex justify-center items-center relative ">
        <div className="w-full   bg-gray-900 opacity-70 ">
          <img
            src="src/assets/carpentry/Hire-A-Carpenter1.jpeg"
            alt="background"
            className="w-full h-screen object-cover "
          />
        </div>
        <div className="w-80 bg-red-600/80 py-6 absolute top-28 ">
          <h1 className="flex  text-center justify-center text-white font-bold outline  outline-offset-8 outline-red-300  ">
            Carpentry
          </h1>
        </div>
      </div>

      <div className="flex w-full h-[500px] relative">box</div>
    </div>
  );
};

export default Carpentry;
