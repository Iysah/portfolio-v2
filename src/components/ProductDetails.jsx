import React, { useEffect, useState } from 'react'
import { styles } from '../style';
import { client } from '../lib/client';
import ImgGallery from './ImgGallery';
import { FaStar, FaTruck, FaShoppingBag } from "react-icons/fa";

export default function ProductDetails({slug}) {
    const [data, setData] = useState({});

    useEffect(() => {
      async function fetchData(slug) {
        const query = `
        *[_type=='product' && slug.current == '${slug}'][0] {
            _id,
            name,
            price,
            image,
            quantity,
            description,
            color,
            "slug": slug.current,
            "categoryName": category->name,
        }
        `;
        console.log(slug)
  
        const data = await client.fetch(query);
        setData(data);
      }
  
      fetchData(slug);
    }, [slug]);
  
    console.log('data:', data);
    console.log('image: ', data?.image)

  return (
    <div className='grid gap-8 md:grid-cols-2'>
        <ImgGallery image={data?.image} />

        <div className='md:py-8'>
            <div className='mb-2 md:mb-3'>
                <span className='mb-0.5 inline-block text-gray-400'>{data.categoryName}</span>
                <h2 className='md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] font-bold uppercase text-gray-200'>{data.name}</h2>
            </div>

            <div className='mb-6 flex items-center gap-3 md:mb-10'>
                <span className="inline-flex gap-2 items-center rounded-md bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    4.2 <FaStar />
                </span>

                <span className='text-sm text-gray-400 transition duration-100'>56 ratings</span>
            </div>

            <div className='mb-4'>
                <div className='flex items-end gap-2'>
                    <span className='text-xl font-bold text-gray-200 md:text-2xl'>₦{data.price}</span>
                    <span className='mb-0.5 line-through text-gray-400'>₦{data.price + 5000}</span>
                </div>
                <div>
                    <span>{data.quantity}</span>
                </div>

                <span className='text-sm text-gray-400'>Without shipping fee</span>
            </div>

            <div className='mb-6 flex items-center gap-2 text-gray-400'>
                <FaTruck className='w-5 h-5'/>
                <span className='text-sm'>2 - 4 days shipping</span>
            </div>

            <div className='flex gap-2.5'>
                <button className='inline-flex items-center gap-2 hire-button rounded-lg border-secondary px-3 py-2'><FaShoppingBag className='w-5 h-5' />Add to bag</button>
                <button className='rounded-lg bg-gray-600 border-secondary px-3 py-2'>checkout now</button>
            </div>

            <p className='mt-12 text-base text-gray-400 tracking-wide'>{data.description}</p>
        </div>
    </div>
  )
}
