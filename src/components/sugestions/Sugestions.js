import { useState } from "react";
import users from "../../data";
import SugestedUser from "./SugestedUser";

export default function Sugestions() {
	const allUsers = users.users;
	const NUSERS = 3;

	let limitedSugestion = [];

	function notFollowing(user) {
		if (!user.following) {
			return true;
		}
	}
	let allSugested = allUsers.filter(notFollowing);

	for (let i = 0; i < NUSERS; i++) {
		limitedSugestion.push(allSugested[i]);
	}
	const [sugestedUsers, setSugestedUsers] = useState(limitedSugestion);
	function seeAll() {
		setSugestedUsers(allSugested);
	}

	return (
		<>
			<div className="suggestion">
				<h1 className="suggest">Sugestão para você</h1>
				<h1 onClick={seeAll} className="ver-tudo">
					Ver tudo
				</h1>
			</div>
			{sugestedUsers.map((user) => (
				<SugestedUser
					user={user.user}
					photo={user.photo}
					name={user.name}
				/>
			))}
		</>
	);
}
