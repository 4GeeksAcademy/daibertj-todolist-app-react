import React, { useState } from "react";


//create your first component
const Todos = () => {
	const [valueEntry, setValueEntry] = useState("")
	const [tasks, setTasks] = useState([])

	return (
		<>

			<div className="container">

				<h1> to-dos </h1>

				<ul>
					<li>
						<input type="text"
							onChange={(e) => setValueEntry(e.target.value)}
							value={valueEntry}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									setTasks(tasks.concat(valueEntry));
									setValueEntry("")
								}
							}}
							placeholder="What needs to be done?"></input>

					</li>

					{tasks.map((item, index) => (
						<li>
							<span className="d-flex justify-content-between">
								{item} <i class="fas fa-times"
									onClick={() =>
										setTasks(
											tasks.filter(
												(t, currentIndex) =>
													index != currentIndex
											)
										)
									}></i>
							</span>
						</li>
					))}
				</ul>
				<div>{tasks.length} items left</div>

			</div >

		</>
	);
};

export default Todos;
