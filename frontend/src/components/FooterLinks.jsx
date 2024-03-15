export const FooterLinks = () => {
    return (
        <>
            <div className='bg-black p-20'>
                <div className='container w-8/10 sm:w-7/10 justify-center flex flex-col sm:flex-row'>
                    <div className='texts w-full sm:w-[70%]'>
                        <p className='text-white text-4xl w-[100%]'>Quick Links</p>
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 sm:py-10 py-4">
                            <a href="#" className="text-white hover:text-gray-300">Location</a>
                            <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
                            <a href="#" className="text-white hover:text-gray-300">Works</a>
                            <a href="#" className="text-white hover:text-gray-300">About Us</a>
                            <a href="#" className="text-white hover:text-gray-300">Testimonials</a>
                            <a href="#" className="text-white hover:text-gray-300">Founders</a>
                            <a href="#" className="text-white hover:text-gray-300">Leaders</a>
                            <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                            <a href="#" className="text-white hover:text-gray-300">Blogs</a>
                        </div>
                    </div>

                    <div className='sm:mr-10 sm:ml-10 w-full sm:w-[30%]'>
                        <p className='text-white text-4xl my-4 sm:my-0'>Follow us!</p>
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 sm:py-10 py-2">
                            <a href="#" className="text-white hover:text-gray-300">Link 1</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
