import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import ContactUS from "../components/home/ContactUS";
import Hero from "../components/product/Hero";
import Problem from "../components/product/Problem";
import Technology from "../components/product/Technology";
import useAxios from "../hooks/useAxios";

function Product() {
	const { response, error, loading } = useAxios({
		method: "get",
		url: "product-pages/1",
	});
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		if (response !== null) {
			console.log(response?.data?.attributes?.ProductPage);
			setProductData(response?.data?.attributes?.ProductPage);
		}
	}, [response]);
	return (
		<main className="bg-white text-black">
			{loading ? (
				<Loader />
			) : (
				<>
					<Hero response={productData[0]} />
					<Problem response={productData[1]} />
					<Technology response={productData[2]} />
					<ContactUS />
				</>
			)}
		</main>
	);
}

export default Product;
