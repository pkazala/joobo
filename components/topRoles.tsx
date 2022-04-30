import { useState } from "react";

const topRoles = () => {

    const roles = [
        {
            name: "Frontend Developer",
            salary: 14.928,
            offers: 319
        },
        {
            name: "Backend Developer",
            salary: 13.979,
            offers: 325
        },
        {
            name: "Fullstack Developer",
            salary: 12.222,
            offers: 54
        },
        {
            name: "Data Scientist",
            salary: 11.228,
            offers: 110
        }
    ];
    const [title, changeTitle] = useState("Kraj")

    const cities = [
        "Warszawa", "Krakow", "Wroclaw", "Kielce"
    ]

    return (
        <div>
            <h1 className="text-start 2xl:pl-5 pl-3 font-logo font-light text-2xl text-joobo-gray m-3">Zarobki: {title} </h1>
            <div className="flex gap-3 flex-row flex-wrap justify-center sm:justify-start">
                {roles.map((role, index) =>
                    <div key={index} className="card w-40 bg-lighter shadow-xl text-joobo-gray transition transform hover:drop-shadow-md delay-50 duration-300" data-aos="zoom-in">
                        <div className="card-body">
                            <h2 className="card-title">{role.name}</h2>
                            <p className="text-lg">{role.salary} zl/m</p>
                            <p>- {role.offers} ofert</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default topRoles