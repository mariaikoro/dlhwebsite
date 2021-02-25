import React from "react";

//style the section card
// Can use generic from online

const SectionCard = (props) => {
	// this should get props passed to it
	// to show different things
	//all are the same section card

	/*<img
				style={{ maxWidth: "100%", maxHeight: "100%" }}
				src="/backgrounds/SpeakingBackground.png"
            />
    */
	return (
		<div
			id={props.id}
			class="ui raised segment"
			style={{
				width: "95vw",
				//display: "flex",
				//flex: "1 1 auto",
				postion: "relative",
				backgroundColor: "black",
				border: "3px solid white",
				borderRadius: "3%",
				backgroundSize: "cover",
				//100% 100%
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				//backgroundAttachment: "fixed",
				backgroundImage: `url('${props.background}')`,
				//background: `pink url('${props.background}') no-repeat center center / contain`,
			}}
		>
			<img
				style={{
					width: "100%",
					height: "100%",
					objectFit: "scale-down",
					opacity: "0",
				}}
				src={props.background}
			/>
			{props.children}
		</div>
	);
};

export default SectionCard;
