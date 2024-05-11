import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="flex w-full ">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed"></div>
      <div className="w-full bg-gray-900 opacity-40">
        <img
          src="src/assets/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full flex flex-col ">
        <div className="w-full h-[200px]"></div>
        <div className="w-full  mb-[100px] flex items-center justify-center ">
          <div className="w-80 bg-red-600/80 py-6   ">
            <h1 className="flex  text-center justify-center text-white font-bold outline  outline-offset-8 outline-red-300  ">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="flex w-full mt-10 justify-center items-center">
          <ContactForm showComponent={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
