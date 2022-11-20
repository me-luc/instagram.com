import { useState } from "react";

export default function SugestedUser(props) {
	const [follow, setFollow] = useState(false);

	function changeFollow() {
		if (follow) {
			setFollow(false);
			alert("hi");
		} else {
			setFollow(true);
		}
	}

	return (
		//<!-- PROFILE --> */
		<div className="caixa-profile">
			<div className="profile">
				<img
					src={require(`../../imagens/${props.photo}`)}
					alt="foto do usuario"
				/>
				<div className="profile-info">
					<h1 className="username">{props.user}</h1>
					<h1 className="follows-you">{props.name}</h1>
				</div>
			</div>
			<h1 onClick={changeFollow} className="follow">
				{follow ? "Seguindo" : "Seguir"}
			</h1>
		</div>
	);
}
