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
    const [title, changeTitle] = useState("Wszedzie")

    const cities = [
        "Warszawa", "Krakow", "Wroclaw", "Kielce"
    ]

    return (
        <div>
            <h1 className="text-start 2xl:pl-5 pl-3 font-logo font-light text-2xl text-joobo-gray m-3">Zarobki dla:
                <span className="dropdown dropdown-hover">
                    <label tabIndex={0}>&nbsp;<span className="underline font-npm"><code>{title}</code></span></label>
                    <ul tabIndex={0} className="dropdown-content p-3 text-2xl w-max bg-light bg-opacity-90 rounded-3xl text-start text-joobo-gray">
                        {cities.map(city => <li onClick={() => changeTitle(city)} className="fill-darker-light hover:bg-lighter hover:bg-opacity-50 cursor-pointer mt-3"><code>{city}</code></li>)}
                    </ul>
                </span>
            </h1>
            <div className="flex gap-3 flex-row flex-wrap justify-center sm:justify-start">
                {roles.map(role =>
                    <div className="card w-40 bg-lighter shadow-xl text-joobo-gray">
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