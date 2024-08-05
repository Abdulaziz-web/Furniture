interface category {
    _id: string;
    name: string;
    image: string;
}

const getBannersData = async (): Promise<category[]> => {
    try {
        const res = await fetch("https://ecommerce-backend-fawn-eight.vercel.app/api/categories", {
            next: { tags: ["category"] },
            
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Something went wrong");
    }
};

export { getBannersData }
