import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const CheckOut = () => {
  const checkout = useLoaderData();


  const {_id, title, price, img } = checkout;

  const {user} = useContext(AuthContext)
  const handleCheckOut = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const price = form.price.value;
    const date = form.date.value;
    const makeOrder = {
        customerName: name,
        email,
        price,
        date, 
        service_id : _id,
        service : title,
        img
    }

    fetch('https://car-doctor-server-taupe-tau.vercel.app/checkout', {
        method: 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(makeOrder)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })


  }


  return (
    <div>
      <h2 className="text-center text-6xl font-bold text-orange-400 my-12">
{title}
      </h2>
      <div>
      <form onSubmit={handleCheckOut}  className="card-body">
            <div className="flex justify-between gap-6">
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input type="date" name="date" className="input input-bordered" required />
              </div>
            </div>
            <div className="flex justify-between gap-6">
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="name" defaultValue={user?.email} name="email" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input type="text"  defaultValue={price}  name="price" className="input input-bordered" required />
              </div>
            </div>
         
              <div className="form-control mt-6">
              <input className="bg-blue-400 py-2 text-white font-bold rounded-lg" type="submit" value="Confirm Order" />
              </div>
            
            </form>
      </div>
    </div>
  );
};

export default CheckOut;
