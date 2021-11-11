import { Text, Flex, Box } from "@chakra-ui/react";

const Footer = () => (
	<Flex direction={["column", "column", "column", "row"]} w={["100%", "100%", "100%", "100%"]}>
		<Box padding="15px" bg="#343A40" w="100%" color="white">
			<Text
				fontSize={["12px", "16px", "18px", "22px"]}
				textAlign="center"
				textColor="gray.100"
				letterSpacing="1px"
				fontWeight="light"
			>
				© 2021
			</Text>
		</Box>
	</Flex>
);
export default Footer;
