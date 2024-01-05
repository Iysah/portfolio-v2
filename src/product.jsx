import React from 'react';
import { Navbar, Connect, ProductDetails, Related } from './components';
// import ProductDetails from './components/ProductDetails';
import { useParams } from 'react-router-dom';
import { styles } from './style';
import StateContextProvider from '../context/StateContext';

export default function Product() {
    const { slug } = useParams();

    return (
        <StateContextProvider>
            <div className="relative z-0 bg-primary">
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                </div>
                <div className={`${styles.padding} max-w-7xl mt-8 mx-auto relative z-0 bg-primary`}>
                    <ProductDetails slug={slug} />
                    <Related />
                </div>
                <Connect />
            </div>
        </StateContextProvider>
    );
}
