import React, {useState} from 'react'
import { urlFor } from '../lib/client'

export default function ImgGallery({ image }) {
    const imagesArray = Array.isArray(image) ? image : [];
    const [bigImage, setBigImage] = useState(imagesArray.length > 0 ? imagesArray[0]||imagesArray[1] : null)
    // console.log(image)

    function handleSmallImageClick(imag) {
        setBigImage(imag);
    }
    
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {imagesArray.map((imag, idx) => (
                <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
                    {imag && <img 
                        src={urlFor(imag).url()} 
                        alt='photo' 
                        width={200} height={200} 
                        className='w-full h-full object-cover object-center cursor-pointer' 
                        onClick={() => handleSmallImageClick(imag)}
                    />}
                </div>
            ))}
        </div>

        <div className='relative overflow-hidden rounded-lg bg-slate-300 lg:col-span-4'>
            {bigImage && (
                <>
                    <img src={urlFor(bigImage).url()} alt='photo' width={500} height={500} className='w-full h-full object-cover object-center' />
                    <span className='absolute left-0 top-0 rounded-br-lg hire-button px-3 py-1.5 text-sm uppercase tracking-wider text-white'>Hot deal</span>
                </>
            )}
        </div>
    </div>
  )
}
