import { createClient } from '@sanity/client'
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: 'o59cgdqb',
    dataset: 'production',
    apiVersion: '2023-11-22',
    useCdn: true,
    token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
