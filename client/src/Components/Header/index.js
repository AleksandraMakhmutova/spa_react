import React from 'react'
import style from './style.module.css'
import {Link} from "react-router-dom";


function Header() {



	return (<>
		<div className={style.navbar}>
			<div className={style.logo}><Link to="#logo">Logo</Link></div>
			<div className={style.links}><Link to="#link1">link1</Link></div>
			<div className={style.links}><Link to="#link2">link2</Link></div>
			<div className={style.links}>	<Link to="#link3">link3</Link></div>
			<div className={style.links}><Link to="#link4">link4</Link></div>
		</div>
</>
	)
}

export default Header
