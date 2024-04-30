const Slider = () => {

  return (
    <div className="my-4 lg:my-8">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/gFQ8QVg/pexels-wangming-photo-115695-354939.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center rounded-lg"
        >
          <div className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Discover Your Creative Haven: Explore Our Selection of Art & Craft Supplies. Find Everything You Need to Craft Your Next Masterpiece!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-no-repeat bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/yyxXzrn/pexels-punchbrandstock-2008268.jpg')] bg-center bg-cover flex items-center justify-center rounded-lg"
        >
           <div className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Discover Your Creative Haven: Explore Our Selection of Art & Craft Supplies. Find Everything You Need to Craft Your Next Masterpiece!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full h-[50vh] lg:h-[80vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/Wp9sqBr/pexels-minan1398-1406863.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center rounded-lg"
        >
           <div className="space-y-3">
            <h2 className="text-3xl lg:text-6xl text-white font-semibold  md:w-[75%] text-center mx-auto">
              Discover Most Suitable Property!
            </h2>
            <br />
            <p className="text-white md:w-[55%] text-center mx-auto">
              Discover Your Creative Haven: Explore Our Selection of Art & Craft Supplies. Find Everything You Need to Craft Your Next Masterpiece!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
