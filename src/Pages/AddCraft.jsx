const AddCraft = () => {

    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target;
        const user_name=form.user_name.value
        const email=form.user_email.value
        const item_name=form.item_name.value
        const subcategory=form.subcategory_name.value
        const rating=form.rating.value
        const price=form.price.value
        const description=form.description.value
        const photo=form.photo.value
        const customization=form.customization.value
        const stockStatus=form.stockStatus.value
        const processing_time=form.processing_time.value
        const info={user_name,email,item_name,subcategory,rating,photo,price,description,customization,stockStatus,processing_time}
      

        fetch("http://localhost:5000/craft",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
              alert('bro inserted hoise')
            }
        })

    }

  return (
    <div className="border-2 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Add art and craft</h2>
      <form onSubmit={handleAddCraft}>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="item_name"
              placeholder="item_name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              type="text"
              name="subcategory_name"
              placeholder="subcategory_Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mb-4">
           <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="short description"
              className="input input-bordered w-full"
            />
           </div>
        </div>
        <div className="md:flex gap-4 mb-4">
           <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="processing_time"
              placeholder="processing_time"
              className="input input-bordered w-full"
            />
           </div>            
           <div className="form-control md:w-1/3">
             <label className="label">
               <span className="label-text">Customization</span>
              </label>
             <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="customization"
              >
                <option value="yes" selected>Yes</option>
                <option value="no" selected>No</option>
            </select>
           </div>
           <div className="form-control md:w-1/3">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select
                name="stockStatus"
                id="stockStatus"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="stockStatus"
              >
                <option value="in_stock" selected>In stock</option>
                <option value="made_to_order" selected>Made to Order</option>
            </select>
           </div>
        </div>
        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="user_name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User email</span>
            </label>
            <input
              type="text"
              name="user_email"
              placeholder="user_email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Craft"
          className="btn text-white btn-block bg-black"
        />
      </form>
    </div>
  );
};

export default AddCraft;
