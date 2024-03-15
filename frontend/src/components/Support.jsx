import { SupportImages } from "./SupportImages"
import support1 from '../assets/support1.png'
import support2 from '../assets/support2.png'
import support3 from '../assets/support3.png'
import support4 from '../assets/support4.png'

export const Support = () => {
    const supportData = [
        { src: support1, text: 'Analytics' },
        { src: support2, text: 'Strategy' },
        { src: support3, text: 'Technology' },
        { src: support4, text: 'Marketing' },
    ];

    return (
        <div className="bg-black">
            <div className="px-10 py-10 items-center justify-center">
                <div className="pt-10">
                    <p className="text-white text-5xl text-center">How we come to rescue ?</p>
                </div>

                <div className="flex flex-wrap px-10 pt-20 pb-10 justify-center">
                    {supportData.map((item, index) => (
                        <SupportImages key={index} source={item.src} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    )
}
