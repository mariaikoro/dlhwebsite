import React from "react";

// will need each nav bar to move to corresponding section card
// when clicked. can link to the id
// may need to add another function to change the active items on scroll
// logo should link back to the top, it is currently an unclickable item

//need padding from nav bar and first elements on page

const NavBar = () => {
	return (
		<div
			id="custom-nav-bar"
			class="ui inverted eight massive borderless top fixed item menu"
		>
			<div class="header fitted item">
				<a href="/">
					<img style={{ height: "45px" }} id="logo" src="/DLHSmallLogo.png" />
				</a>
			</div>
			<a class="collapsable item" href="#aboutme">
				About Me
			</a>
			<a class="collapsable item" href="#speaking">
				Speaking
			</a>
			<a class="collapsable item" href="#dothework">
				Do the Work
			</a>
			<a class="collapsable item" href="#dj">
				DJ
			</a>
			<a class="collapsable item" href="#scriptd">
				Scriptd
			</a>
			<a class="collapsable item" href="#schedule">
				Schedule
			</a>
			<a class="collapsable item" href="#contact">
				Contact Me
			</a>
			<div class="nav-burger ui right menu simple dropdown item">
				<i class="bars icon large"></i>
				<div id="drop" class="menu">
					<a class="item" href="#aboutme">
						About Me
					</a>
					<a class="item" href="#speaking">
						Speaking
					</a>
					<a class="item" href="#dothework">
						Do the Work
					</a>
					<a class="item" href="#dj">
						DJ
					</a>
					<a class="item" href="#scriptd">
						Scriptd
					</a>
					<a class="item" href="schedule">
						Schedule
					</a>
					<a class="item" href="contact">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
