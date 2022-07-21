import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper purple darken-3 p1x">
				<a href="/" className="brand-logo">
					React + TypeScript
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
					<Link to={"/"}>Список Дел</Link>
					</li>
					 <li>
					 <Link to={"/drag-drop"}>Драг Дроп Карточки</Link>
					</li>
					
					<li>
					<Link to={"/about"}>Заглушка</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
