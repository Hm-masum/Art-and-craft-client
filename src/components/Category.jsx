import { Link } from "react-router-dom";


const Category = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
            {/* card-1 */}
            <Link to={`/subCategory/LandscapePainting`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img className="h-[450px]" src="https://i.ibb.co/N3rn41d/pexels-eberhardgross-691668.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Landscape Painting</h2>
                 </div>
               </div>
            </Link>

            {/* card-2 */}
            <Link to={`/subCategory/CharcoalSketching`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img src="https://i.ibb.co/b6rmXVf/pexels-wangming-photo-115695-354939.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Charcoal Sketching</h2>
                 </div>
               </div>
            </Link>

            {/* card-3 */}
            <Link to={`/subCategory/WatercolourPainting`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img src="https://i.ibb.co/PN5f1hy/pexels-virginia-magat-1129225-2131293.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Watercolour Painting</h2>
                 </div>
               </div>
            </Link>

            {/* card-4 */}
            <Link to={`/subCategory/OilPainting`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img src="https://i.ibb.co/y4CwByT/pexels-steve-1170642.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Oil Painting</h2>
                 </div>
               </div>
            </Link>

            {/* card-5 */}
            <Link to={`/subCategory/CartoonDrawing`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img className="w-full" src="https://i.ibb.co/qyHNL73/5d372c47d0ee8179f02662d217c839cd.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Cartoon Drawing</h2>
                 </div>
               </div>
            </Link>

            {/* card-6 */}
            <Link to={`/subCategory/PortraitDrawing`}>
               <div className="card h-[275px] bg-base-100 shadow-xl image-full">
                 <figure><img src="https://i.ibb.co/YkfBY8w/pexels-brett-sayles-6424244.jpg" alt="Shoes" /></figure>
                 <div className="card-body flex items-center justify-center">
                   <h2 className="text-3xl font-semibold">Portrait Drawing</h2>
                 </div>
               </div>
            </Link>
        </div>
    );
};

export default Category;