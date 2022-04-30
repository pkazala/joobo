const cityModal = (city: any) => {
    return (
        <div>
            <label htmlFor={city.children.modal} className="btn btn-outline bg-main text-white hover:bg-light hover:text-black">Sprawdź</label>
            <input type="checkbox" id={city.children.modal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-light font-logo">
                    <div className="grid grid-cols-2">
                        <div>
                            <figure><img src={city.children.image} alt="Shoes" className="rounded-xl" /></figure>
                            <h3 className="text-xl m-3">{city.children.name}</h3>
                            <p className="mt-2 mx-2 text-left">Mieszkańcy: {city.children.population}</p>
                            <p className="mt-2 mx-2 text-left">{city.children.desc}</p>
                        </div>
                        <div>
                            <p className="py-4">{city.children.modal}</p>
                        </div>
                    </div>
                    <div className="modal-action flex justify-end">
                        <label htmlFor={city.children.modal} className="btn btn-sm btn-outline bg-main hover:bg-lighter text-white hover:text-black btn-circle absolute right-2 top-2">X</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default cityModal