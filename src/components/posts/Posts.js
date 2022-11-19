import feedPosts from "../../data";

const NTOBEDISPLAYED = 7;
const allPosts = feedPosts.feedPosts;
let postsToBeDisplayed = [];

console.log(allPosts);
console.log("length ", allPosts.length);

//MONTANDO NOVO ARRAY QUE IRA MOSTRAR N POSTS ALEATORIOS
while (postsToBeDisplayed.length < NTOBEDISPLAYED) {
	const newPost = allPosts[Math.floor(Math.random() * allPosts.length)];
	if (!postsToBeDisplayed.includes(newPost)) {
		postsToBeDisplayed.push(newPost);
		console.log("hi");
	}
	console.log("hi");
}

console.log("posts to be displayed", postsToBeDisplayed);

export default function Posts() {
	console.log(feedPosts);
	return (
		<div className="caixa-post">
			{postsToBeDisplayed.map((post) => (
				<Post
					user={post.user}
					userPhoto={post.userPhoto}
					postImage={post.postImage}
					friendLikes={post.friendLikes}
					likesNumber={post.likesNumber}
				/>
			))}
		</div>
	);
}

function Post(props) {
	return (
		/* <!-- DIV DO POST --> */
		<div className="post">
			<div className="topo-post">
				<div className="usuario">
					<img
						className="user-foto"
						src={require(`../../imagens/${props.userPhoto}`)}
						alt="foto do usuario"
					/>
					<h1 className="username">{props.user}</h1>
				</div>
				<ion-icon
					className="icon"
					name="ellipsis-horizontal"></ion-icon>
			</div>
			<img
				className="photo"
				src={require(`../../imagens/${props.postImage}`)}
				alt="foto"
			/>

			{/* <!-- RODAPE DO POST --> */}
			<div className="rodape-post">
				<div className="actions-post">
					<div className="actions-left">
						<ion-icon
							className="icon"
							name="heart-outline"></ion-icon>
						<ion-icon
							className="icon"
							name="chatbubble-outline"></ion-icon>
						<ion-icon
							className="icon"
							name="paper-plane-outline"></ion-icon>
					</div>
					<ion-icon
						className="icon"
						name="bookmark-outline"></ion-icon>
				</div>

				<div className="post-likes">
					<img
						src={require(`../../imagens/${props.userPhoto}`)}
						alt="foto de usuario"
					/>
					<p>
						Curtido por <span>{props.friendLikes}</span> e outras
						<span>{props.likesNumber} pessoas</span>
					</p>
				</div>
			</div>
		</div>
	);
}
