const axios = require('axios').default;
interface productSingle {
    _id: string,
    title: string,
    subtitle: string,
    image: string,
    description: string,
    rate: number,
    price: number,
    size: string,
    color: string,
    __v: number
}

const getSingleProductData = async (id: number): Promise<productSingle[]> => {

    return axios.get(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${id}`).then((res) => res.data)
};

export { getSingleProductData }
