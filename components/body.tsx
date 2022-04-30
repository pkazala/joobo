import TopCities from './topCities'
import TopRoles from './topRoles'
import BodyCharts from './bodyCharts'

const body = () => {
    return (
        <div className="flex justify-center mt-5 relative">
            <div className="w-full max-w-[150rem] h-fit m-7 grid lg:grid-rows-3 lg:grid-flow-col grid-cols-1 gap-4">
                <div className="row-span-2 col-span-2 bg-light rounded-md">
                    <TopCities></TopCities>
                </div>
                <div className="col-span-2 bg-light rounded-md h-fit p-5">
                    <TopRoles></TopRoles>
                </div>
                <div className="row-span-3 bg-light rounded-md h-fit">
                    <BodyCharts></BodyCharts>
                </div>
            </div>
        </div>
    )
}
export default body