import MyUser from "./MyUser";
import Sugestions from "./Sugestions";

export default function SideBar() {
	return (
		<div>
			<div className="sidebar">
				<MyUser />
				<Sugestions />
				<h2>
					Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
					Termos • Localizações • Contas mais relevantes • Hashtags •
					Idioma
				</h2>
				<h3>© 2021 INSTAGRAM DO FACEBOOK</h3>
			</div>
		</div>
	);
}
