import data from "../../data.js";
import Post from "./Post.js";

const NTOBEDISPLAYED = 7;
const allPosts = data.feedPosts;
let postsToBeDisplayed = [];
const userLikes = data.users;

//MONTANDO NOVO ARRAY QUE IRA MOSTRAR N POSTS ALEATORIOS
while (postsToBeDisplayed.length < NTOBEDISPLAYED) {
	let i = Math.floor(Math.random() * allPosts.length);
	const newPost = allPosts[i];
	if (!postsToBeDisplayed.includes(newPost)) {
		postsToBeDisplayed.push(newPost);
	}
}

export default function Posts() {
	function getRandomUser() {
		let i = Math.floor(Math.random() * userLikes.length);
		const newUser = userLikes[i];
		data.users[i].following = true;
		return newUser;
	}
	return (
		<div className="caixa-post">
			{postsToBeDisplayed.map((post) => (
				<Post
					user={post.user}
					userPhoto={post.userPhoto}
					postImage={post.postImage}
					friendLikes={getRandomUser().user}
					likesNumber={post.likesNumber}
				/>
			))}
		</div>
	);
}
