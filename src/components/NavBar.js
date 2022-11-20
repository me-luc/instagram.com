export default function Navbar() {
	function refresh() {
		window.location.reload();
	}
	return (
		<div className="topo">
			<div className="bloco-esquerda">
				<ion-icon
					className="icon"
					name="logo-instagram"
					onClick={refresh}></ion-icon>
				<div className="borda-menu " id="hided"></div>
				<img
					onClick={refresh}
					className="logo"
					id="hided"
					src={require(`../imagens/logo.png`)}
					alt="logo do instagram"
				/>
			</div>

			<div className="logo-hide">
				<img
					onClick={refresh}
					className="logo"
					src={require(`../imagens/logo.png`)}
					alt="logo do instagram"
				/>
			</div>

			<div className="bloco-centro " id="hided">
				<input
					className="campo-texto"
					placeholder="Pesquisar"
					type="text"
				/>
			</div>

			<div className="bloco-direita">
				<ion-icon
					className="icon"
					name="paper-plane-outline"></ion-icon>
				<ion-icon
					className="icon "
					id="hided"
					name="compass-outline"></ion-icon>
				<ion-icon
					className="icon "
					id="hided"
					name="heart-outline"></ion-icon>
				<ion-icon
					className="icon "
					id="hided"
					name="person-outline"></ion-icon>
			</div>
			{/* <!-- FIM DIV TOPO --> */}
		</div>
	);
}
