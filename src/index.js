import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Editor from './components/editor';
import SaveImage from './components/save-image';
// import SaveImagePopup from './components/save-image-popup';
import {toBase64, downloadURI} from './utils';
import './index.scss';

class App extends Component {
	state = {
		size: '1200x630',
		postImage: null,
		imageX: 0,
		imageY: 0,
		rectColor: '#fa3b5a',
		imageData: null
	};

	imageData = null;

	changeSizeHandler = (event) => {
		event.persist();

		this.setState({
			...this.state,
			size: event.target.value
		})
	};

	setImageHandlerFromFile = async (e) => {
		e.persist();
		const file = e.target.files[0];

		if (file && file.type.match('image.*')) {
			const image = new Image();
			image.src = await toBase64(file);
			image.onload = () => {
				this.setState({
					...this.state,
					imageX: 0,
					imageY: 0,
					postImage: image
				});

			};

		} else {
			alert("File mast be image!");
		}

	};

	onDragEnd = (e) => {
		this.setState({
			...this.state,
			imageX: e.target.x(),
			imageY: e.target.y(),
		})
	};

	setColor = (e) => {
		e.persist();
		if (e.currentTarget.value.startsWith('#')) {
			this.setState({
				...this.state,
				rectColor: e.currentTarget.value
			})
		}
	};

	// showPopup = () => {
	// 	this.setState((prevState) => {
	// 		return {
	// 			...prevState,
	// 			popup: !prevState.popup
	// 		}
	// 	})
	// };

	saveImage = (type) => {
		const dataURL = this.imageData.toDataURL({pixelRatio: 1});
		downloadURI(dataURL, 'postImage');


		// switch (type) {
		// 	case '1': {
		// 		downloadURI(dataURL, 'postImage');
		// 		break;
		// 	}
		// 	default:
		// 		console.log('data');
		//
		// }
	};



	uploadImage = (node) => {
		this.imageData = node;
	};

	render() {
		return (
			<div className="App">
				<Header
					changeSizeHandler={this.changeSizeHandler}
					setImageHandlerFromFile={this.setImageHandlerFromFile}
					setColor={this.setColor}
					rectColor={this.state.rectColor}
				/>

				<Editor
					size={this.state.size}
					rectColor={this.state.rectColor}
					postImage={this.state.postImage}
					imageX={this.state.imageX}
					imageY={this.state.imageY}
					onDragEnd={this.onDragEnd}
					uploadImage={this.uploadImage}
				/>

				<SaveImage saveImage={this.saveImage}/>
				{/*<SaveImagePopup popup={this.state.popup} saveImage={this.saveImage}/>*/}
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

