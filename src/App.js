import BottomBar from "./components/BottomBar";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Stories from "./components/stories/Stories";
import Posts from "./components/posts/Posts";

export default function App() {
	return (
		<div>
			<NavBar />
			<div className="container-conteudo">
				<div className="feed">
					<Stories />
					<Posts />
				</div>
				<SideBar />
			</div>
			<BottomBar />
		</div>
	);
}
