const topCities = () => {
    return (
        <div>
            <h1 className="col-span-3 text-center font-logo font-light text-4xl m-3">Miasta z najwyższymi zarobkami</h1>
            <div className="grid grid-cols-3 justify-items-center mt-10 m-5 gap-5">
                <div className="card w-96 bg-base-100 shadow-xl text-center">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=300" alt="Shoes" /></figure>
                    <div className="card-body bg-[#FAFAFA]">
                        <h2 className="font-logo text-3xl m-2">Kraków</h2>
                        <p className="font-logo font-light text-3xl mb-2">16,321 zl/m</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-main text-white hover:bg-white hover:text-black">Sprawdź</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl text-center">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=300" alt="Shoes" /></figure>
                    <div className="card-body bg-[#FAFAFA]">
                        <h2 className="font-logo text-3xl m-2">Kraków</h2>
                        <p className="font-logo font-light text-3xl mb-2">16,321 zl/m</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-main text-white hover:bg-white hover:text-black">Sprawdź</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl text-center">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=300" alt="Shoes" /></figure>
                    <div className="card-body bg-[#FAFAFA]">
                        <h2 className="font-logo text-3xl m-2">Kraków</h2>
                        <p className="font-logo font-light text-3xl mb-2">16,321 zl/m</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-main text-white hover:bg-white hover:text-black">Sprawdź</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default topCities