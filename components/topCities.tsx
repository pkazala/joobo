import { useState } from 'react';
import CityModal from './cityModal';

const topCities = () => {
    const [title, changeTitle] = useState("Pracownik IT")
    const [cityNum, changeCityNum] = useState(3)

    const jobTitles = [
        "Frontend Developer", "Backend Developer", "Fullstack Developer", "Data Scientist"
    ]

    const topCities = [
        {
            name: "Krakow",
            salary: 16.321,
            modal: "my-modal"
        },
        {
            name: "Warszawa",
            salary: 15.321,
            modal: "my-modal-2"
        },
        {
            name: "Wroclaw",
            salary: 14.321,
            modal: "my-modal-3"
        },
        {
            name: "Kielce",
            salary: 2.321,
            modal: "my-modal-4"
        }
    ];

    return (
        <div>
            <h1 className="col-span-3 text-start 2xl:pl-10 pl-8 font-logo font-light text-2xl text-joobo-gray m-3">Miasta z najwyższymi zarobkami dla:
                <span className="dropdown dropdown-hover">
                    <label tabIndex={0}>&nbsp;<span className="underline font-npm"><code>{title}</code></span></label>
                    <ul tabIndex={0} className="dropdown-content p-3 text-2xl w-max bg-light bg-opacity-90 rounded-3xl text-start text-joobo-gray">
                        {jobTitles.map(job => <li onClick={() => changeTitle(job)} className="fill-darker-light hover:bg-lighter hover:bg-opacity-50 cursor-pointer mt-3"><code>{job}</code></li>)}
                    </ul>
                </span>
            </h1>
            <div className="grid xl:grid-cols-3 grid-cols-1 justify-items-center mt-10 m-5 gap-5">
                {topCities.map(city =>
                    <div className="card w-9/10 3xl:w-96 bg-base-100 shadow-xl text-center">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=300" alt="Shoes" className="w-full" /></figure>
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
            <div className="grid grid-cols-1 justify-items-center">
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