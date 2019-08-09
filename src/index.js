import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Editor from './components/editor';
import './index.scss';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header/>
				<Editor/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));

