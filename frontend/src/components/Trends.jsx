import carousel from '../assets/carousel.png'

const texts = {
    id1: "EVOLVING MARKET ECOSYSTEM AND TRENDS"
}

export const Trends = () => {
    return (
        <>
            <div className="flex flex-col  p-8 my-8 mx-auto">
                <p className="text-3xl font-bold my-4">{texts.id1}</p>
                <div className="flex my-8">
                    <img src={carousel} alt="Image" className="w-full" />
                </div>
            </div>
        </>
    )
}
