/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Box, Stack, Flex, useDisclosure, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	return (
		<Flex
			as="nav"
			direction="column"
			fontSize="14px"
			letterSpacing="1px"
			wrap="wrap"
			boxShadow="dark-lg"
			padding={5}
			bg="#343A40"
			color="white"
			{...props}
		>
			<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
				<HamburgerIcon />
			</Box>

			<Stack
				direction={{ base: "column", md: "row-reverse" }}
				display={{ base: isOpen ? "block" : "none", md: "inline-flex" }}
				width={{ base: "full", md: "auto" }}
				alignItems="center"
				flexGrow={5}
				padding="5px"
				mt={{ base: 4, md: 0 }}
			>
				<Link
					href="/contactos"
					fontSize={["12px", "17px", "17px", "18px"]}
					paddingRight="8"
				>
					Contacto
				</Link>
				<Link
					href="/proyectos"
					fontSize={["12px", "17px", "17px", "18px"]}
					paddingRight="8"
				>
					Proyectos
				</Link>
				<Link href="/#" fontSize={["12px", "17px", "17px", "18px"]} paddingRight="8">
					Inicio
				</Link>
			</Stack>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 0, md: 0 }}
			/>
		</Flex>
	);
};

export default Navbar;
