import feedPosts from "../../data.js";
import Post from "./Post.js";

const NTOBEDISPLAYED = 7;
const allPosts = feedPosts.feedPosts;
const allUsers = feedPosts.users;
let postsToBeDisplayed = [];
const userLikes = feedPosts.usersLikes;

//MONTANDO NOVO ARRAY QUE IRA MOSTRAR N POSTS ALEATORIOS
while (postsToBeDisplayed.length < NTOBEDISPLAYED) {
	const newPost = allPosts[Math.floor(Math.random() * allPosts.length)];
	if (!postsToBeDisplayed.includes(newPost)) {
		postsToBeDisplayed.push(newPost);
	}
}

console.log("posts to be displayed", postsToBeDisplayed);

export default function Posts() {
	function getRandomUser() {
		const newUser = userLikes[Math.floor(Math.random() * userLikes.length)];
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
