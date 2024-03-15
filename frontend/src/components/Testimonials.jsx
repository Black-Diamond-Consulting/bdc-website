const texts = {
    id1: "Client Testimonials"
}

export const Testimonials = () => {
    return (
        <>
            <div className="mx-4 sm:mx-20 w-70p sm:w-auto mt-20 mb-10">
                <p className=" flex flex-wrap font-bold text-3xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl">{texts.id1}</p>
            </div>
            <div className="flex justify-evenly items-center p-5 mb-20">
                <div className="image">
                    {images.map((item, idx) =>
                        current === idx && (
                            <div key={idx} className="flex justify-center">
                                <img className=" rounded-md w-[100%]" src={item} alt="Image" />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
