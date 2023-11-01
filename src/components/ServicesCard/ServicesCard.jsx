import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const {_id ,price, title, img} = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img  src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         
          <div className="card-actions flex justify-between items-center">
          <p className="text-2xl font-bold text-orange-400">${price}</p>
      <Link to={`/checkout/${_id}`}>      <button className="btn bg-orange-400 text-white">Check Out</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesCard;