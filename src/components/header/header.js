import React from 'react';
import logo from '../../assets/logo.png';

const Header = ()=>{

	return(
		<header className='header'>
			<img src={logo} alt="Logo" className='logo'/>

			<div className="header__box">
				<label htmlFor='headerInputFile'>Загрузить изображение:</label>
				<input type="file" id='headerInputFile'/>
			</div>

			<div className="header__box">
				<label htmlFor='headerInputUrl'>Ссылка на материал</label>
				<input type="url" id='headerInputUrl'/>
			</div>

			<div className="header__box">
				<label htmlFor='selectFormat'>Выберите формат</label>
				<select name="selectFormat" id="selectFormat">
					<option value="630">Facebook</option>
					<option value="563">Vk</option>
				</select>
			</div>

			<div className="header__box">
				<label htmlFor='selectColor'>Выберите цвет ярлыка</label>
				<input type="color" id='headerInputColor'/>
			</div>
		</header>
	)
};

export default Header;