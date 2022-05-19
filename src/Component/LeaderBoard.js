import React, { useState } from 'react';
import { response } from '../response';

const index = 0;

function LeaderBoard(props) {
	//const { rank, name, points, age} = response.list[index];
	const[data,setdata]= useState(response.list)
	const sorting=(col)=>{
		if(col==="rank"){
			const sorted = [...data].sort((a, b) => a.rank - b.rank);
			
			setdata(sorted);
		}
		if(col==="name"){
			const sorted = [...data].sort((a, b) => {
				return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
			});
			setdata(sorted);
		}
		if(col==="points"){
			const sorted = [...data].sort((a, b) => a.points - b.points);
			setdata(sorted);
		}
		if(col==="age"){
			const sorted = [...data].sort((a, b) => a.age - b.age);
			setdata(sorted);
		}
	}
	return (
		<div className="text-center mt-50">
			<div>
				<div>
					<button data-testid="route-rank" className='outlined' type="button" onClick={()=>sorting("rank")}>Rank</button>
					<button data-testid="route-name" className='outlined' type="button" onClick={()=>sorting("name")}>Name</button>
					<button data-testid="route-points" className='outlined' type="button" onClick={()=>sorting("points")}>Points</button>
					<button data-testid="route-age" className='outlined' type="button" onClick={()=>sorting("age")}>Age</button>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
				
					<tbody data-testid="app-tbody">
					{data.map(elem=>(
						<tr key={elem.id}>
							<td data-testid={`rank-${index}`}>{elem.rank}</td>
							<td data-testid={`name-${index}`}>{elem.name}</td>
							<td data-testid={`points-${index}`} className="numeric">{elem.points}</td>
							<td data-testid={`age-${index}`} className="numeric">{elem.age}</td>
						</tr>
						))}	
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
