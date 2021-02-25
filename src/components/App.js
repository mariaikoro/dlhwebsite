import React from "react";
import SectionCard from "./SectionCard";
import NavBar from "./NavBar";

// whole page should be a grid container
// should have 7 sectioncards with possible info
// App component should be a grid container

const App = () => {
	return (
		<div style={{ backgroundColor: "black" }}>
			<NavBar />
			<div
				class="ui container"
				style={{
					display: "flex",
					height: "100%",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "3%",
					//change marginTop to percent or vh
					width: "100%",
				}}
			>
				<SectionCard
					id="aboutme"
					title="About Me"
					background="./backgrounds/background.png"
				>
					<img
						src="./DLHDJ.png"
						style={{
							//top: "76%",
							//left: "52%",
							marginLeft: "1%",
							paddingBottom: "-5%",
							objectFit: "scale-down",
							width: "100%",
							height: "100%",
							//transform: "translate(-50%, -50%)",
						}}
					/>
				</SectionCard>
				<SectionCard
					id="speaking"
					title="Speaking"
					background="./backgrounds/SpeakingBackground.png"
				>
					<iframe
						//width="560"
						//height="315"
						//maxWidth="100%"
						style={{
							height: "68%",
							width: "52%",
							position: "absolute",
							top: "43%",
							left: "52%",
							transform: "translate(-50%, -50%)",
						}}
						src="https://www.youtube.com/embed/wBisUZdAerw"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
					<h1
						style={{
							position: "absolute",
							top: "76%",
							left: "52%",
							transform: "translate(-50%, -50%)",
							color: "white",
							fontHeight: "200%",
							width: "40%",
							textTransform: "uppercase",
						}}
					>
						Speaking
					</h1>
					<h2
						style={{
							position: "absolute",
							top: "87%",
							left: "52%",
							color: "white",
							transform: "translate(-50%, -50%)",
							textTransform: "uppercase",
							fontSize: "3vw",
							backgroundColor: "turquoise",
						}}
					>
						Book Now
					</h2>
				</SectionCard>
				<SectionCard
					id="dothework"
					title="Do The Work"
					background="./backgrounds/DoTheWorkBackground.png"
				>
					<img id="spotify" src="./spotifylogo.png" />
				</SectionCard>
				<SectionCard
					id="dj"
					title="DJ"
					background="./backgrounds/DJBioBackground.png"
				>
					<h1
						style={{
							color: "white",
							position: "absolute",
							top: "43%",
							lineHeight: "1.6",
							left: "50%",
							textAlign: "center",
							transform: "translate(-50%, -50%)",
							fontSize: "1.75vw",
							width: "65%",
							textTransform: "uppercase",
						}}
					>
						Denise Love Hewett, a Los Angeles based DJ brings an eclectic sound
						to the decks. She started her DJ career in NY and rapidly outgrew
						her residency. She's played all over Manhattan and LA with a current
						residency at Soho House and is a staple at Andre Saraiva owned bar,
						"The Friend". She's spun for the likes of DVF, Gucci, Vanity Fair,
						Away, Lucky Magazine, Shiseido, Elle, iHeartRadio, Rebecca Minkoff,
						Glow Recipe, Lacma, Summit, Kin Euphorics, Westfield, Pandora,
						Rachel Zoe, Fashionista, CoolHaus, Surf Lodge, Proper Hotels, LA
						Pride, Gem and Bolt, and many more. She's also played for Oprah,
						Hilary Duff, Matthew Koma, Gia, Timbaland, Liz Y2K, and others.
					</h1>
				</SectionCard>
				<SectionCard
					id="scriptd"
					title="Scriptd"
					background="./backgrounds/ScriptdBackground.png"
				>
					<h1
						style={{
							top: "-3%",
							left: "30%",
							zIndex: "1",
							fontSize: "12.75vw",
							color: "rgb(237,152,152)",
							fontFamily: "Times New Roman",
						}}
					>
						S
					</h1>
					<h1
						style={{
							position: "absolute",
							top: "13%",
							left: "57%",
							transform: "translate(-50%, -50%)",
							fontFamily: "'Poppins', sans-serif",
							color: "rgb(237,152,152)",
							fontSize: "8vw",
							zIndex: "1",
						}}
					>
						scriptd
					</h1>
					<p>
						At Scriptd, we believe that storytelling is the quickest way to
						create change yet Hollywood, an industry of storytelling, has a
						problem. Audiences are hungry for diverse content but the existsing
						models are outdated and can't catch up to the current landscape of
						viewers
						<br />
						<br />
						Scriptd is a script database for the entertainement industry (google
						for scripts if you will) that is a true pipeline for diverity and
						content discovery. We are also creating script culture like book
						culture so the public can pay to read scripts for the first time
						ever (like e-books) and upvote them on the site. This allows us to
						tap into audience bases, capture the data behind them and make
						better buys and bets to achieve greater commercial success
					</p>
					<a href="https://www.scriptd.com" target="_blank">
						<h1
							style={{
								color: "pink",
								top: "83%",
								left: "40%",
								border: "8px solid purple",
								fontSize: "2.8vw",
								textTransform: "uppercase",
								fontWeight: "bold",
							}}
						>
							Check it Out
						</h1>
					</a>
				</SectionCard>
				<SectionCard id="schedule" title="Schedule" />
				<SectionCard id="contact" title="Contact Me" />
			</div>
		</div>
	);
};

export default App;
