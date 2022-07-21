const NavBar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper purple darken-3 p1x">
				<a href="/" className="brand-logo">
					React + TypeScript
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<a href="/">Sass</a>
					</li>
					<li>
						<a href="/">Components</a>
					</li>
					<li>
						<a href="/">JavaScript</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
