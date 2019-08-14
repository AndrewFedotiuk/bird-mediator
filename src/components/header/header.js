import React from 'react';
import logo from '../../assets/logo.png';

const Header = ({changeSizeHandler, setImageHandlerFromFile, setColor, rectColor, onUrlchange})=>{

	return(
		<header className='header'>
			<img src={logo} alt="Logo" className='logo'/>

			<div className="header__box">
				<label htmlFor='headerInputFile'>Загрузить изображение:</label>
				<input type="file" id='headerInputFile' onChange = {setImageHandlerFromFile}/>
			</div>

			<div className="header__box">
				<label htmlFor='headerInputUrl'>Ссылка на материал</label>
				<input type="url" id='headerInputUrl' placeholder='https://birdinflight.com' onKeyPress={onUrlchange}/>
			</div>

			<div className="header__box">
				<label htmlFor='selectFormat'>Выберите формат</label>
				<select name="selectFormat" id="selectFormat" onChange={changeSizeHandler}>
					<option value="1200x630">Facebook</option>
					<option value="1000x563">Vk</option>
				</select>
			</div>

			<div className="header__box">
				<label htmlFor='headerInputColor'>Выберите цвет ярлыка</label>
				<div className='d-flex'>
					<input type="color" id='headerInputColor' onChange={setColor} value={rectColor}/>
					<input type="text" onChange={setColor} value={rectColor}/>
				</div>
			</div>
		</header>
	)
};

export default Header;