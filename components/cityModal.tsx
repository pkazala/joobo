const cityModal = (city: any) => {
    return (
        <div>
            <label htmlFor={city.children.modal} className="btn btn-outline bg-main text-white hover:bg-light hover:text-black">Sprawdź</label>


            <input type="checkbox" id={city.children.modal} className="modal-toggle"/>
                <div className="modal">
                    <div className="modal-box bg-light">
                        <h3 className="font-bold text-lg">{city.children.name}</h3>
                        <p className="py-4">{city.children.modal}</p>
                        <div className="modal-action">
                            <label htmlFor={city.children.modal} className="btn btn-outline btn-sm bg-red-400 hover:bg-red-500 text-white hover:text-white">Close!</label>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default cityModal