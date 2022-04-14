import {useEffect, useState} from "react";

import qs from "qs"
import {API_KEY, BASE_URL, CORS_PROXY} from "../util/config";
import HeroCard from "../components/HeroCard";

export default function Home({ res }) {
	return (
		<div className="w-screen h-full">
			<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
				<div className='max-w-screen-xl box-border '>
					<div className="w-full py-2 grid grid-cols-4 gap-4 lg:grid-cols-3 sm:flex sm:items-center sm:flex-col">
						{
							res.results.map((result,index) => {
								return(<HeroCard key={index} hero={result}/>)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}
export async function getServerSideProps(){
	try {
		const queryparams = qs.stringify({
			format:"json",
			api_key:API_KEY,
			limit:15
		})
		const response = await fetch(`${BASE_URL}/api/characters?${queryparams}`)
		const res = await response.json()
		console.log(res)
		return {
			props:{
				res
			}
		}
	}catch (e){
		return {
			props:{
				res:{
					err:"rruruur"
				}
			}
		}
	}
}
