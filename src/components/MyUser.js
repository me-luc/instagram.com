import { useState } from "react";

export default function MyUser() {
	const [name, setName] = useState("Lucas Almeida");
	const [user, setUser] = useState("me.luc");
	const [img, setImg] = useState("https://github.com/me-luc.png");

	function changeName(name) {}
	function changeUser(name) {}
	function changePhoto(name) {}
	return (
		<div className="my-profile">
			<img src={`${img}`} alt="foto de usuario" />
			<div className="profile-info">
				<h1 className="username">me.luc</h1>
				<h1 className="follows-you">Lucas Almeida</h1>
			</div>
			<ion-icon id="edit" name="create-outline"></ion-icon>
		</div>
	);
}
