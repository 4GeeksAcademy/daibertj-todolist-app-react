import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		let setIntervalId = setInterval(() => {
			setCounter(counter + 1)
		}, 1000)

		return () => {
			clearInterval(setIntervalId)
		}

	}, [counter])

	return (
		<>
			<div className="container-fluid bigCounter  mt-3 bg-dark text-white">
				
				<div className="d-flex">
					<h1 className="d-flex p-4 w-25 m-5 bg-gradient rounded">
						<i class="far fa-clock"></i>
					</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 100000) % 10}</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 10000) % 10}</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 1000) % 10}</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 100) % 10}</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 10) % 10}</h1>
					<h1 className="w-25 p-4 m-5 bg-gradient rounded">{Math.floor(counter / 1) % 10}</h1>
				</div>
			</div>
		</>
	);
};

export default Home;
