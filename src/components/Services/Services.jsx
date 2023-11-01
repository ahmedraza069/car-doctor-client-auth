/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {

const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-taupe-tau.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })

    },[])


    return (
        <div className="mb-16">
            <div className="text-center space-y-5 mb-6">
                <h3 className="text-3xl font-bold text-orange-400">Services</h3>
                <h1 className="text-5xl font-bold">Our Services Area</h1>
                <p className="text-normal">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {
                    services?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;