import logo from '../assets/logo1.png';

export const Footer = () => {
    return (
        <>
            <div className='bg-black p-20'>
                <div className='container w-7/10 items-center justify-center flex flex-col sm:flex-row'>
                    <div className='image mr-10'>
                        <img src={logo} alt='Logo' className='w-full h-full' />
                    </div>

                    <div className='texts text-4xl'>
                        <p className='text-white'>Join us on our voyage as we change the landscape of consulting. Let’s grow together !</p>
                    </div>
                </div>
            </div>
        </>
    )
}
