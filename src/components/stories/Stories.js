import users from "../../data";
import Story from "./Story";

const NTOBEDISPLAYED = 8;
const allUsers = users.users;
console.log(allUsers);
let storiesToBeDisplayed = [];

//MONTANDO NOVO ARRAY QUE IRA MOSTRAR N STORIES ALEATORIOS
while (storiesToBeDisplayed.length < NTOBEDISPLAYED) {
	let i = Math.floor(Math.random() * allUsers.length);
	const newStory = allUsers[i];
	if (!storiesToBeDisplayed.includes(newStory)) {
		storiesToBeDisplayed.push(newStory);
		users.users[i].following = true;
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
