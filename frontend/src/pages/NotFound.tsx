const NotFound = () => {
  return (
    <div className="">
      <div className="w-full pt-24 h-[52rem]  text-center space-y-5 tablet:h-[20rem] tablet:pt-10">
        <h1 className="pt-10 scroll-m-20 text-4xl font-extrabold tracking-tight tablet:text-2xl">
          404 - Not Found
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
