import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';

class Editor extends Component {

	render(){
		return(
			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
					<Text text="Try to drag a star" />
					{[...Array(10)].map((_, i) => (
						<Star
							key={i}
							x={Math.random() * window.innerWidth}
							y={Math.random() * window.innerHeight}
							numPoints={5}
							innerRadius={20}
							outerRadius={40}
							fill="#89b717"
							opacity={0.8}
							draggable
							rotation={Math.random() * 180}
							shadowColor="black"
							shadowBlur={10}
							shadowOpacity={0.6}
							onDragStart={this.handleDragStart}
							onDragEnd={this.handleDragEnd}
						/>
					))}
				</Layer>
			</Stage>
		)
	}
}

export default Editor;