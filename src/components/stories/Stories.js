import users from "../../data";

const NTOBEDISPLAYED = 8;
const allUsers = users.users;
console.log(allUsers);
let storiesToBeDisplayed = [];

//MONTANDO NOVO ARRAY QUE IRA MOSTRAR N STORIES ALEATORIOS
while (storiesToBeDisplayed.length < NTOBEDISPLAYED) {
	const newStory = allUsers[Math.floor(Math.random() * allUsers.length)];
	if (!storiesToBeDisplayed.includes(newStory)) {
		storiesToBeDisplayed.push(newStory);
	}
}

export default function Stories() {
	return (
		// <!-- DIV DOS STORIES-->
		<div className="caixa-stories">
			{storiesToBeDisplayed.map((story) => (
				<Story user={story.user} photo={story.photo} />
			))}
		</div>
	);
}

function Story(props) {
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
