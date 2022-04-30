import { useState } from 'react';
import CityModal from './cityModal';

const topCities = () => {
    const [title, changeTitle] = useState("Wszyscy")
    const [cityNum, changeCityNum] = useState(3)

    const jobTitles = [
        "Frontend Developer", "Backend Developer", "Fullstack Developer", "Data Scientist"
    ]

    const topCities = [
        {
            name: "Krakow",
            salary: 16.321,
            modal: "my-modal",
            image: "https://api.lorem.space/image/shoes?w=400&h=300",
            population: "900.000",
            desc: "Old capital of Poland"
        },
        {
            name: "Warszawa",
            salary: 15.321,
            modal: "my-modal-2",
            image: "https://api.lorem.space/image/shoes?w=400&h=300",
            population: "2.100.000",
            desc: "Capital and biggest city in Poland. A constantly growing Hub for tech"
        },
        {
            name: "Wroclaw",
            salary: 14.321,
            modal: "my-modal-3",
            image: "https://api.lorem.space/image/shoes?w=400&h=300",
            population: "750.000",
            desc: "Large and beautiful city with many tech opportunities"
        },
        {
            name: "Kielce",
            salary: 2.321,
            modal: "my-modal-4",
            image: "https://api.lorem.space/image/shoes?w=400&h=300",
            population: "185.000",
            desc: "Dont come here unless you want to work at..."
        }
    ];

    return (
        <div>
            <h1 className="col-span-3 text-start 2xl:pl-10 pl-8 font-logo font-light text-2xl text-joobo-gray m-3">Miasta z najwyższymi zarobkami dla: {title} </h1>
            <div className="grid xl:grid-cols-3 grid-cols-1 justify-items-center mt-10 m-5 gap-5">
                {topCities.map((city, index) =>
                    <div key={index} className="card w-9/10 3xl:w-96 bg-base-100 shadow-xl text-center">
                        <figure><img src={city.image} alt="Shoes" className="w-full" /></figure>
                        <div className="card-body bg-[#FAFAFA]">
                            <h2 className="font-logo text-3xl m-2">{city.name}</h2>
                            <p className="font-logo font-light text-3xl mb-2">{city.salary} zl/m</p>
                            <div className="card-actions justify-center">
                                <CityModal>{city}</CityModal>
                            </div>
                        </div>
                    </div>
                ).filter((e, k) => k < cityNum)}
            </div>
            <div className="grid grid-cols-1 justify-items-center mb-5">
                {cityNum === 3 ? (
                    <button onClick={() => changeCityNum(topCities.length)} className="col-span-3 justify-self-center btn btn-sm btn-outline hover:bg-white text-joobo-gray">Pokaż wszystkie</button>
                ) : (
                    <button onClick={() => changeCityNum(3)} className="col-span-3 justify-self-center btn btn-sm btn-outline hover:bg-white text-joobo-gray">Pokaż mniej</button>
                )}
            </div>
        </div >
    )
}
export default topCities