import React, { useEffect, useState } from "react";
import axios from "axios"

function Example() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async function () {
            const res = await axios.get("http://localhost:3000/products");
            setData(res.data);
            setIsLoading(false);
        }
        getProducts()
    }, [])

    return (
        <div>
            {data && data.map((item) => (
                <ul key={item.id}>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.alpay}</li>
                </ul>
            ))
            }
        </div>
    )
}

export default Example