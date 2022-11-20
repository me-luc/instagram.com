export default function Story(props) {
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
				src={require(`../../imagens/${props.photo}`)}
				alt="foto de usuario"
			/>
			<p>{props.user}</p>
		</div>
	);
}
