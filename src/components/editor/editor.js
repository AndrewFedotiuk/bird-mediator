import React from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import imageComponent from '../imageComponent';

const Editor = ({size, postImage, imageX, imageY, onDragEnd, rectColor, uploadImage}) => {
	const [width, height] = size.split('x').map(s => Number(s));
	const rectSize = 220;

	return (
		<Stage
			width={width}
			height={height}
			className='editor'
			ref={uploadImage}
		>
			<Layer>
				{
					imageComponent(
						postImage,
						size,
						width,
						height,
						imageX,
						imageY,
						onDragEnd
					)
				}
			</Layer>

			<Layer>
				<Rect
					x={0}
					y={height - rectSize / 2}
					width={rectSize}
					height={rectSize}
					fill={rectColor}
					rotation={45}
				/>
			</Layer>
		</Stage>
	)

};

export default Editor;