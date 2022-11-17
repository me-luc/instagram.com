export default function MyUser() {
	return (
		<div className="my-profile">
			<img
				src={require("../imagens/myprofile.jpg")}
				alt="foto de usuario"
			/>
			<div className="profile-info">
				<h1 className="username">me.luc</h1>
				<h1 className="follows-you">Lucas Almeida</h1>
			</div>
		</div>
	);
}
