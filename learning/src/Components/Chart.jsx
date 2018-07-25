import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import data from '../students.json';


class Chart extends Component {
	constructor(props) {
		super(props)

		this.state = {
				students: data.students,
				data: {
					labels: [
					 "Week1", 
					 "Week2", 
					 "Week3", 
					 "Week4", 
					 "Week5", 
					 "Week6", 
					 "Week7", 
					 "Week8", 
					 "Week9",
						"Week10"
					],
					datasets: [
						{
							label: 'Chart 1',
							data: [
								{ x: 1, y: students[0].weeks[0].mon }, //X= LEVELS AND Y= STUDENTS INFO
								{ x: 2, y: 4 },
								{ x: 3, y: 8 }, 
								{ x: 4, y: 0 }, 
								{ x: 5, y: 0 }, 
								{ x: 6, y: 0 }, 
								{ x: 7, y: 0 }, 
								{ x: 8, y: 0 },
								{ x: 9, y: 0 },
								{ x: 10, y: 0 }
							],
							showLine: true,
							fill: false,
							borderColor: 'rgba(0, 200, 0, 1)'
						},
						{
							label: 'Chart 2',
							data: [
								{ x: 1, y: 6 }, //X= LEVELS AND Y= WEEKS
								{ x: 2, y: 4 },
								{ x: 3, y: 8 },
								{ x: 4, y: 5 },
								{ x: 5, y: 5 },
								{ x: 6, y: 5 },
								{ x: 7, y: 5 },
								{ x: 8, y: 5 },
								{ x: 9, y: 5 },
								{ x: 10, y: 5 }
							],
							showLine: true,
							fill: false,
							borderColor: 'rgba(200, 0, 0, 1)'
						}
					]
				},
			}
		}
	
	
		render() {
			console.log(this.state.students)
			return ( <div>
						<p> Chart </p> 
						<Line data={ this.state.data } />
					</div>
			)
		}
	}

	export default Chart;