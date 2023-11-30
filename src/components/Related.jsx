import React, { useEffect, useState } from 'react';
import { styles } from "../style"
import { client } from "../lib/client"
  
export default function Related() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const query = `
        *[_type=='product'][0...3]| order(_createdAt desc) {
          _id,
          name,
          price,
          color,
          "slug": slug.current,
          "imageUrl": image[0].asset->url,
        }
      `;

      const result = await client.fetch(query);
      setData(result);
    }

    fetchData();
  }, []);

  // console.log('data', data);

  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-primary`}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className={`${styles.sectionHeadText}`}><span className='section__gradient'>Latest Products</span></h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-secondary">
                    <a href={`product/${product.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-secondary">₦{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
