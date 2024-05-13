import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GoToPage from '../components/GoToPage'
import ProjectItem from '../components/ProjectItem'
import Contact from '../layout/Contact'
import LinkButton from '../components/LinkButton'

const Home: NextPage = () => {
	return (
		<>
			<div className={`container ${styles.container}`}>
				<Head>
					<title>Ramil Saavedra | Web Developer</title>
				</Head>
				<div className={styles.landing}>
					<h1>Ramil Saavedra</h1>
					<p className={styles.subheading}>Web Developer</p>
					<div className={styles.description}>
						Hi!<div className="wave">👋</div> I&lsquo;m a web developer from the Philippines. I love spending my time admiring the beauty of
						web development, from learning new technologies to building a web application that can simplify life.
					</div>
					<div className={styles.ctaDiv}>
						<LinkButton href="/static/Ramil_Saavedra_CV.pdf">Download CV</LinkButton>
						<GoToPage href="/about">Go to about page</GoToPage>
					</div>
				</div>

				<div className={styles.featuredProjectDiv}>
					<h2>Featured Project</h2>

					<ProjectItem
						title="Web Blocker"
						techs={['React', 'Typescript', 'Webpack', 'Manifest V3', 'Figma']}
						description="A chrome extension built with React and Typescript with Webpack lets the user block distracting websites to keep the user focused and improve their productivity."
						imageSrc="/static/images/projects/webblocker.png"
						homeUrl="https://www.webblockerextension.com/"
						homeText="Visit website"
						codeUrl="https://github.com/ramilsaavedra/webblocker-chrome-v2"
						codeText="View source code"
					/>

					<ProjectItem
						title="Tidal Discord Rich Presence"
						techs={['Manifest V3', 'Typescript', 'Discord RPC', 'Discord JS']}
						description="A tool designed to detect the currently playing track on the Tidal web app and update the rich presence on Discord via a local web server."
						homeUrl="https://chromewebstore.google.com/detail/tidal-discord-rich-presen/lnehmemdaeieccibicjpnamckdlgchdf"
						homeText="Visit chrome store"
						codeUrl="https://github.com/techbuddiesph/tidal-discord-rich-presence-chrome-extension"
						codeText="View source code"
					/>
					<GoToPage className={styles.goToProjects} href="/projects">
						Go to projects page
					</GoToPage>
				</div>

				<div className={styles.labDiv}>
					<h2>Lab</h2>
					<p className={styles.subheading}>This section shows what I’m currently working on or studying.</p>

					<ProjectItem
						title="WQAPH"
						techs={['NextJS 14', 'Typescript', 'Zod', 'React']}
						description="Revamp wqaph.com by implementing a dashboard feature using Next.js, Tailwind, and Next UI. This project aims to enhance user experience and functionality while providing a modern and sleek design."
						imageSrc="/static/images/projects/wqaph.png"
						homeUrl="https://www.figma.com/design/XJu6hQDjlWNjJvuig2jDFq/WQAPH-UI-Kit?node-id=0%3A1&t=oZZPJA6qwlkXnyCC-1"
						homeText="View UI Kit"
					/>
					<GoToPage className={styles.goToProjects} href="/certificates">
						View my certificates
					</GoToPage>
				</div>
			</div>
			<Contact />
		</>
	)
}

export default Home
