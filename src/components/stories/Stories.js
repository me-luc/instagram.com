import users from "../../data";

export default function Stories() {
	return (
		// <!-- DIV DOS STORIES-->
		<div class="caixa-stories"></div>
	);
}

function Story() {
	return (
		/* <!-- STORY --> */
		<div class="story">
			<div class="background-img">
				<img
					src={require("../../imagens/stories_background.png")}
					alt="foto de usuario"
				/>
			</div>
			<img
				class="story-foto"
				src={require("../../imagens/story-beyonce.webp")}
				alt="foto de usuario"
			/>
			<p>beyonce</p>
		</div>
	);
}
