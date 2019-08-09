import React, {Component} from 'react';
import Konva from 'konva';
import {Stage, Layer, Star, Image} from 'react-konva';
import useImage from 'use-image';


const CanvasImage = ({src}) => {
	const [image] = useImage(src);
	return <Image image={image} />;
};

class Editor extends Component {
	state = {
		width: 1200,
		height: 768,
	};

	render() {

		return (
			<Stage width={this.state.width} height={this.state.height} className='editor'>
				<Layer>
					<CanvasImage src={`https://via.placeholder.com/${this.state.width}x${this.state.height}/2d2d2d/fff`} />
				</Layer>
			</Stage>
		)
	}
}

export default Editor;