import React, {Component} from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import PlaceholderImage from '../placeholder-image';


class Editor extends Component {
	render() {
		const [width, height] = this.props.size.split('x');
		const rectSize = 220;

		return (
			<Stage width={+width} height={+height} className='editor'>
				<Layer>
					<PlaceholderImage size={this.props.size} />
				</Layer>

				<Layer>
					<Rect
						x={0}
						y={height-rectSize/2}
						width={rectSize}
						height={rectSize}
						fill="red"
						rotation={45}
					/>
				</Layer>
			</Stage>
		)
	}
}

export default Editor;