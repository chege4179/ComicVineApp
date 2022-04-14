import React from 'react';
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({hero}) => {
	return (
		<div className='max-w-xs shadow-xl border-gray-300 border-solid border flex items-center flex-col rounded-lg w-full   bg-white hover:cursor-pointer hover:bg-gray-200 group border-b-8 border-b-indigo-500'>
			<Image src={hero.image.original_url}
				  width={320} height={220}
				  priority={true}
				  className='w-full rounded-t-lg transition-transform duration-200 ease-in-out group-hover:scale-105 object-cover'/>
			<div className='p-4 flex flex-col w-full'>
				<div className='flex justify-around'>
					<div className='text-gray-500 font-semibold -tracking-wide text-sm uppercase ml-2 flex justify-center w-full'>
						<div className='flex items-center justify-evenly w-full'>
							<h1 className='text-lg px-2 whitespace-nowrap font-bold text-black'>
								{hero.name}
							</h1>
						</div>
						<div className='flex items-center justify-evenly w-full'>
							<h1 className='text-lg px-2 whitespace-nowrap font-bold text-black '>

							</h1>
						</div>
					</div>
					<div>
						<h4 className='font-bold break-words'></h4>
						<h1 className=""></h1>
						<div className="">
							<span></span>
							<span></span>

							<div>
							<span><span className='font-bold text-blue-700'></span><span
								className='font-bold text-blue-700'></span>  </span>
							</div>

						</div>
					</div>
					<div className='flex items-center justify-between mt-2'>

					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCard
