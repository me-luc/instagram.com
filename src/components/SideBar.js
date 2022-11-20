import MyUser from "./user/MyUser";
import Sugestions from "./sugestions/Sugestions";

export default function SideBar() {
	return (
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
	);
}
