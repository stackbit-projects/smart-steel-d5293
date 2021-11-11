import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Contacto from "../components/Contacto";

import Footer from "../components/Footer/footer";

export default function Contactos() {
	return (
		<Box bg="#87929E">
			<title>Mi portafolio</title>
			<link rel="icon" href="/favicon.ico" />
			<meta title="Contactos" name="description" content="Contactos" />
			<div>
				<Navbar />
				<Contacto />
			</div>
			<footer>
				<Footer />
			</footer>
		</Box>
	);
}
