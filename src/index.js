import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Editor from './components/editor';
import './index.scss';

class App extends Component {
	state={
		size: '1200x768'
	};

	changeSizeHandler = (event)=>{
		event.persist();

		this.setState({
			size: event.target.value
		})
	};

	render() {
		return (
			<div className="App">
				<Header changeSizeHandler={this.changeSizeHandler}/>
				<Editor size={this.state.size}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

