import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer/footer";
import Bodys from "../components/Container/body";

export default function Home() {
	return (
		<Box bg="#87929E">
			<Head>
				<title>Mi portafolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta title="Content" name="description" content="Mi portafolio" />
			</Head>
			<main>
				<div>
					<Navbar />
				</div>
				<div>
					<Container />
				</div>
				<div>
					<Bodys />
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</Box>
	);
}
