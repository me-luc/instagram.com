import feedPosts from "../../data.js";
import { useState } from "react";

const userLikes = feedPosts.users;

export default function Post(props) {
	const [liked, setLiked] = useState(false);
	const [saved, setSaved] = useState(false);
	const [likeCount, setLikeCount] = useState(props.likesNumber);
	const [dblLike, setDbllike] = useState("hide");

	//BUSCANDO INFO DO FRIEND QUE CURTIU POSTAGEM
	function findUser(user) {
		if (user.user === props.friendLikes) {
			return true;
		}
	}
	const randomUserPhoto = userLikes.filter(findUser)[0].photo;

	function likePost() {
		if (liked) {
			setLiked(false);
			let count = likeCount - 1;
			setLikeCount(count);
		} else {
			setLiked(true);
			let count = likeCount + 1;
			setLikeCount(count);
		}
	}

	function doubleLike() {
		//animation
		setDbllike("");

		setTimeout(function () {
			setDbllike("hide");
		}, 800);
		if (!liked) {
			let count = likeCount + 1;
			setLikeCount(count);
			setLiked(true);
		}
	}

	function savePost() {
		if (saved) {
			setSaved(false);
		} else {
			setSaved(true);
		}
	}

	return (
		/* <!-- DIV DO POST --> */
		<div className="post" data-test="post">
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
			<div className="image-box">
				<img
					data-test="post-image"
					className="photo"
					src={require(`../../imagens/${props.postImage}`)}
					alt="foto"
					onDoubleClick={doubleLike}
				/>
				<div
					className={dblLike == "hide" ? "" : "like-animation"}
					id={dblLike}>
					<ion-icon id="" name="heart"></ion-icon>
				</div>
			</div>

			{/* <!-- RODAPE DO POST --> */}
			<div className="rodape-post">
				<div className="actions-post">
					<div className="actions-left">
						<ion-icon
							data-test="like-post"
							className="icon"
							name={liked ? "heart" : "heart-outline"}
							id={liked ? "liked" : ""}
							onClick={likePost}></ion-icon>
						<ion-icon
							className="icon"
							name="chatbubble-outline"></ion-icon>
						<ion-icon
							className="icon"
							name="paper-plane-outline"></ion-icon>
					</div>
					<ion-icon
						class="icon"
						data-test="save-post"
						name={saved ? "bookmark" : "bookmark-outline"}
						id={saved ? "saved" : ""}
						onClick={savePost}></ion-icon>
				</div>

				<div className="post-likes">
					<img
						src={require(`../../imagens/${randomUserPhoto}`)}
						alt="foto de usuario"
					/>
					<p>
						Curtido por <span>{props.friendLikes}</span> e outras
						<span data-test="likes-number">
							{" "}
							{likeCount} pessoas
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
