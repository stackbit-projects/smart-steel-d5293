import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";
import Cards from "../components/Proyectos/cards";
import Footer from "../components/Footer/footer";

export default function Proyecto() {
	return (
		<Box bg="#87929E">
			<title>Mi portafolio</title>
			<link rel="icon" href="/favicon.ico" />
			<meta title="Proyectos" name="description" content="Mis proyectos" />
			<div>
				<Navbar />
				<Proyectos />
				<Cards />
			</div>
			<footer>
				<Footer />
			</footer>
		</Box>
	);
}
