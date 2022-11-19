export default function Navbar() {
	return (
		<div className="topo">
			<div className="bloco-esquerda">
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<ion-icon className="icon" name="logo-instagram"></ion-icon>
				</a>
				<div className="borda-menu hide"></div>
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<img
						className="logo hide"
						src={require("../imagens/logo.png")}
						alt="logo do instagram"
					/>
				</a>
			</div>

			<div className="logo-hide">
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<img
						className="logo"
						src="../imagens/logo.png"
						alt="logo do instagram"
					/>
				</a>
			</div>

			<div className="bloco-centro hide">
				<input
					className="campo-texto"
					placeholder="Pesquisar"
					type="text"
				/>
			</div>

			<div className="bloco-direita">
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<ion-icon
						className="icon"
						name="paper-plane-outline"></ion-icon>
				</a>
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<ion-icon
						className="icon hide"
						name="compass-outline"></ion-icon>
				</a>
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<ion-icon
						className="icon hide"
						name="heart-outline"></ion-icon>
				</a>
				<a href="https://www.google.com/search?q=image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwixxJnIkrT7AhVSr5UCHdcjCqYQ_AUoAXoECAEQAw&biw=500&bih=973&dpr=1#imgrc=JoR7JNzGko0S6M">
					<ion-icon
						className="icon hide"
						name="person-outline"></ion-icon>
				</a>
			</div>
			{/* <!-- FIM DIV TOPO --> */}
		</div>
	);
}
