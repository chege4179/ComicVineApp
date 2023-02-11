import qs from "qs"
import {API_KEY, BASE_URL, CORS_PROXY} from "../util/config";
import HeroCard from "../components/HeroCard";
import {useQuery} from "react-query";
import {GetCharactersResponse} from "../types/GetCharactersResponseTypes";

export default function Home() {



     const queryparams = qs.stringify({
          format:"json",
          api_key:API_KEY,
          limit:5
     })
     const fetchCharactersPromise = () => fetch(`${BASE_URL}/api/characters?${queryparams}`)
          .then((res) => res.json())

     const {isLoading, data, error, isError} = useQuery<GetCharactersResponse>(["characters"], fetchCharactersPromise)
	return (
		<div className="w-screen h-full">
			<div className='w-full flex flex-col items-center justify-center sm:w-full overflow-x-hidden scrollbar-hide'>
				<div className='max-w-screen-xl box-border'>
                         <>
                              {
                                   isLoading && (<h1>Loading</h1>)
                              }
                              {
                                   isError && (
                                        <div>
                                             An error has occurrred
                                             {JSON.stringify(error)}
                                        </div>
                                   )
                              }
                              {
                                   data && (
                                        <div className="w-full py-2 grid grid-cols-4 gap-4 lg:grid-cols-3 sm:flex sm:items-center sm:flex-col">
                                             {
                                                  data.results.map((result,index) => {
                                                       return(<HeroCard key={index} hero={result}/>)
                                                  })
                                             }
                                        </div>
                                   )
                              }
                         </>

				</div>
			</div>
		</div>
	)
}
