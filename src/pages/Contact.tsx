import HomeForm from "@/components/HomeForm";

const Contact = () => {
  return (
    <div className="flex w-full h-[1000px]">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed"></div>
      <div className="w-full bg-gray-900 opacity-40">
        <img
          src="src/assets/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <HomeForm />
      </div>
    </div>
  );
};

export default Contact;
