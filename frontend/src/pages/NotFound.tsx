const NotFound = () => {
  return (
    <section>
      <div className="h-[52rem] w-full space-y-5 pt-24 text-center tablet:h-[20rem] tablet:pt-10">
        <h3 className="scroll-m-20 pt-10 text-4xl font-extrabold tracking-tight tablet:text-2xl">
          404 - Not Found
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </section>
  )
}

export default NotFound
