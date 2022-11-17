export default function Sugestions() {
	return (
		<div>
			{/* <!-- LIST OF PROFILES --> */}

			<div className="suggestion">
				<h1 className="suggest">Sugestão para você</h1>
				<h1 className="ver-tudo">Ver tudo</h1>
			</div>

			{/* <!-- PROFILE --> */}
			<div className="caixa-profile">
				<div className="profile">
					<img
						src={require("../imagens/perfil-fake3.jpg")}
						alt="foto do usuario"
					/>
					<div className="profile-info">
						<h1 className="username">ladygaga</h1>
						<h1 className="follows-you">Lady Gaga</h1>
					</div>
				</div>
				<h1 className="follow">Seguir</h1>
			</div>
			{/* <!-- PROFILE --> */}
			<div className="caixa-profile">
				<div className="profile">
					<img
						src={require("../imagens/perfil-fake4.webp")}
						alt="foto do usuario"
					/>
					<div className="profile-info">
						<h1 className="username">joji</h1>
						<h1 className="follows-you">Joji</h1>
					</div>
				</div>
				<h1 className="follow">Seguir</h1>
			</div>
			{/* <!-- PROFILE --> */}
			<div className="caixa-profile">
				<div className="profile">
					<img
						src={require("../imagens/perfil-fake9.webp")}
						alt="foto do usuario"
					/>
					<div className="profile-info">
						<h1 className="username">rickymontgomery</h1>
						<h1 className="follows-you">Ricky Montgomery</h1>
					</div>
				</div>
				<h1 className="follow">Seguir</h1>
			</div>
			{/* <!-- PROFILE --> */}
			<div className="caixa-profile">
				<div className="profile">
					<img
						src={require("../imagens/perfil-fake10.jpg")}
						alt="foto do usuario"
					/>
					<div className="profile-info">
						<h1 className="username">sza</h1>
						<h1 className="follows-you">SZA</h1>
					</div>
				</div>
				<h1 className="follow">Seguir</h1>
			</div>
			{/* <!-- PROFILE --> */}
			<div className="caixa-profile">
				<div className="profile">
					<img
						src={require("../imagens/perfil-fake11.jpg")}
						alt="foto do usuario"
					/>
					<div className="profile-info">
						<h1 className="username">declan</h1>
						<h1 className="follows-you">Declan Mckenna</h1>
					</div>
				</div>
				<h1 className="follow">Seguir</h1>
			</div>
		</div>
	);
}
