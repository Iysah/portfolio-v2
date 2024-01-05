export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLenght: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'quantity',
            title: 'Quantity',
            type: 'number'
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [
                {type: 'category'}
            ]
        },
        {
            name: 'description',
            title: 'Description of Product',
            type: 'text',
        }
    ]
}