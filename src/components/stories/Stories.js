import users from "../../data";

export default function Stories() {
	return (
		// <!-- DIV DOS STORIES-->
		<div className="caixa-stories">
			<Story />
		</div>
	);
}

function Story() {
	return (
		/* <!-- STORY --> */
		<div className="story">
			<div className="background-img">
				<img
					src={require("../../imagens/stories_background.png")}
					alt="foto de usuario"
				/>
			</div>
			<img
				className="story-foto"
				src={require("../../imagens/story-beyonce.webp")}
				alt="foto de usuario"
			/>
			<p>beyonce</p>
		</div>
	);
}
