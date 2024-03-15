import logo from '../assets/logo1.png';

export const Footer = () => {
    return (
        <>
            <div className='bg-black p-20'>
                <div className='container w-7/10 items-center justify-center flex flex-col sm:flex-row'>
                    <div className='texts sm:text-4xl w-[70%]'>
                        <p className='text-white'>Join us on our voyage as we change the landscape of consulting.</p>
                        <br />
                        <p className='text-white'> Let’s grow together !</p>
                    </div>

                    <div className='image mr-10 ml-10 w-300'>
                        <img src={logo} alt='Logo' className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}
