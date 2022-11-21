import { useState } from "react";

export default function MyUser() {
	const [name, setName] = useState("Lucas Almeida");
	const [user, setUser] = useState("me.luc");
	const [gitHubUser, setGitHubUser] = useState("me-luc");
	const [img, setImg] = useState(`https://github.com/${gitHubUser}.png`);
	const [visibility, setVisibility] = useState("hide");

	let newName, newUser, newImg;

	function showPage() {
		setVisibility("");
	}
	
	function changeName() {
		newName = prompt("digite novo nome!");
		if(newName) {
			setName(newName);
		}
	}
	
	function changePhoto() {
		newImg = prompt("digite like para sua foto!");
		if(newImg) {
			setImg(newImg);
		}
	}

	function save() {
		if (newName) {
			setName(newName);
		}
		if (newUser) {
			setUser(newUser);
		}
		if (newImg) {
			//assuming it is a github user
			if (newImg.length < 14) {
				setImg(`https://github.com/${newImg}.png`);
			} else {
				//else it is an actual img link
				setImg(newImg);
			}
		}
		setVisibility("hide");
	}
	return (
		<>
			<div className="my-profile" data-test="user">
				<img
					src={`${img}`}
					data-test="profile-image"
					alt="foto de usuario"
					onClick={changePhoto}
				/>
				<div className="profile-info">
					<h1 className="username" onClick={showPage}>
						{user}
					</h1>
					<h1
						className="follows-you"
						data-test="name"
						onClick={showPage}>
						{name}
					</h1>
				</div>
				<ion-icon
					onClick={changeName}
					id="edit"
					data-test="edit-name"
					name="create-outline"></ion-icon>
			</div>

			{/*editar usuario */}
			<div className="square-form" id={visibility}>
				<input
					className="campo-texto"
					onChange={(e) => (newImg = e.target.value)}
					type="text"
					id="gitHubUser"
					placeholder="Your GitHub user or a image link"
				/>
				<input
					className="campo-texto"
					type="text"
					id="name"
					placeholder="Insert your new name"
					onChange={(e) => (newName = e.target.value)}
				/>
				<input
					className="campo-texto"
					type="text"
					id="username"
					placeholder="Insert your new username"
					onChange={(e) => (newUser = e.target.value)}
				/>
				<button onClick={save}>Save</button>
			</div>
		</>
	);
}
