import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import sportsDBLogo from "../../resources/logo/sportsDB/logo32.png";
import iconSprites from "../../resources/icons/icomoon/sprite.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer-top">
				<header className="footer-top__header">
					<h2 className="footer-top__h2 h2 fadeInFromLeft">
						SOCCER TIMER
					</h2>
					<nav className="footer-top__nav">
						<Link
							className="footer-top__link link fadeInFromLeft"
							to={"/"}
						>
							Home
						</Link>
						<Link
							className="footer-top__link link fadeInFromLeft"
							to={"/profile"}
						>
							Profile
						</Link>
					</nav>
				</header>
				<div className="footer-top__item">
					<h3 className="footer-top__h3 h3">
						Portfolio
					</h3>
					<a
						href="https://dariuszlegizynski.netlify.app/"
						className="footer-top__link link"
					>
						Visit my page: dariuszlegizynski.app!
					</a>
				</div>
				<div className="footer-top__item">
					<h3 className="footer-top__h3 h3">
						Phone number:
					</h3>
					<p className="footer-top__link--phone link">
						555-666-777
					</p>
				</div>
				<p className="footer-top__copyright">
					Copyright &copy;{new Date().getFullYear()}
					<br />
					Code by
					<a
						href="/"
						className="footer-top__link link"
					>
						{" "}
						Dariusz Legizynski
					</a>
				</p>
			</section>
			<section className="footer-bottom">
				<img
					className="footer-bottom__image fadeInFromBottom"
					src={sportsDBLogo}
					alt="sportsDB"
				/>
				<div className="footer-bottom__api">
					<a
						href="https://www.facebook.com/TheDataDB/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-bottom__link"
					>
						<svg
							className="footer-bottom__icon icon fadeInFromBottom"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<use
								href={
									iconSprites +
									"#icon-facebook2"
								}
							/>
						</svg>
					</a>
					<a
						href="https://twitter.com/TheAudioDB"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-bottom__link"
					>
						<svg
							className="footer-bottom__icon icon fadeInFromBottom"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<use
								href={
									iconSprites + "#icon-twitter"
								}
							/>
						</svg>
					</a>
					<a
						href="https://www.thesportsdb.com/api.php"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-bottom__link"
					>
						<svg
							className="footer-bottom__icon icon fadeInFromBottom"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<use
								href={
									iconSprites + "#icon-embed2"
								}
							/>
						</svg>
					</a>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
