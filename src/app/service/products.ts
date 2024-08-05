import { revalidatePath } from "next/cache";

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

const getProductData = async (): Promise<productSingle[]> => {
    try {
        const res = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/products", {
            next: { tags: ["product"] },
            
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export { getProductData }
