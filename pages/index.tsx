import HeroCard from "../components/HeroCard";
import {useQuery} from "react-query";
import {Character, GetCharactersResponse} from "../types/GetCharactersResponseTypes";
import Header from "../components/Header";
import {useState} from "react";
import {ErrorResponse} from "../types/ErrorResponse";
import {Loader, Pagination} from "@mantine/core";

export default function Home() {
	const [page, setPage] = useState<number>(1)
     const fetchCharactersPromise = (page:number) => fetch(`/api/characters?offset=${page}&limit=8`)
          .then((res) => res.json())

	const {isLoading, isError, error, data, isFetching} =
		useQuery<GetCharactersResponse,ErrorResponse>(['characters', page], () => fetchCharactersPromise(page),
			{ keepPreviousData : true })
	return (
		<div className="flex flex-col bg-gray-100 w-full overflow-x-hidden">
               <Header/>
			<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide py-20'>
				<div className='max-w-screen-xl box-border '>
					<div className="w-full h-16 flex items-center justify-center">
						{
							isLoading && (
								<Loader/>
							)
						}
						{
							isError && (
								<div>
									<h1>An error occurred {error?.msg}</h1>
								</div>
							)
						}
					</div>
                         <div className="w-full py-2 grid grid-cols-4 gap-4 lg:grid-cols-3 sm:flex sm:items-center sm:flex-col">
						{
							data && data?.results.map((result:Character,index:number) => {
								return(<HeroCard key={index} hero={result}/>)
							})
						}
                         </div>
					{
						isFetching && (
							<div className="w-full h-16 flex items-center justify-center">
								<Loader/>
							</div>
						)
					}
					<div className="w-full h-16 flex items-center justify-center">
						<Pagination
							page={page}
							onChange={setPage}
							total={60}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}


