import React from 'react';
import './save-image-popup.scss';

const SaveImagePopup = ({popup, saveImage}) => {
	const buttons = [
		{
			id: '1',
			type: '1',
			text: 'Сохранить PNG'
		},
		// {
		// 	id: '2',
		// 	type: '2',
		// 	text: 'Сохранить сжатый PNG'
		// }
	];

	const vShow = (popup) => popup ? 'd-flex' : 'd-none';

	return (
		<div className={`${vShow(popup)} save-image-popup`}>
			{
				buttons.map(button => {
					return (
						<button
							key={button.id}
							onClick={() => saveImage(button.type)}
						><b>{button.text}</b></button>
					)
				})
			}
		</div>
	)
};

export default SaveImagePopup;