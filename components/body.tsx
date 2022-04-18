import TopCities from './topCities'

const body = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-[150rem] h-fit m-7 grid grid-rows-3 grid-flow-col gap-4 mt-10">
                <div className="row-span-2 col-span-2 bg-light">
                  <TopCities></TopCities>  
                </div>
                <div className="col-span-2 bg-light">
                    <p>three</p>
                </div>
                <div className="row-span-3 bg-light">
                    <p>two</p>
                </div>
            </div>
        </div>
    )
}
export default body