import { Divider, Stack, Flex, Text, Image, UnorderedList } from "@chakra-ui/react";

const container = () => (
	<Flex
		direction={["column", "column", "column", "row"]}
		w={["86%", "92%", "96%", "91%"]}
		paddingLeft={["10px", "27px", "34px", "100px"]}
		paddingTop={["2px", "60px", "75px", "25px"]}
		margin="25px"
	>
		<Image
			src="https://media-exp1.licdn.com/dms/image/C4E03AQECg5KFTw5vBg/profile-displayphoto-shrink_200_200/0/1629295349810?e=1639008000&v=beta&t=v1aVZs6N5j7VCcapk3f572kekdZnOZdcEPxIHSLEiO8"
			alt="Raymundo-Cabrera"
			direction="column"
			boxShadow="dark-lg"
			boxSize={["100%", "95%", "98%", "35%"]}
			h={["100vw", "78vw", "80vw", "31vw"]}
		/>

		<Stack
			bgColor="#2F3438"
			direction="column"
			boxShadow="dark-lg"
			color="white"
			padding="25px"
			fontWeight="light"
			letterSpacing="1px"
			spacing={4}
			h={["100vw", "55vw", "45vw", "31vw"]}
			fontSize={["26px", "39px", "49px", "49px"]}
			w={["100%", "95%", "98%", "59%"]}
		>
			<Text paddingLeft="15px">Raymundo Cabrera Mena</Text>
			<Divider variant="solid" h="5px" orientation="horizontal" />
			<Stack direction="row" spacing={0} padding="0px">
				<UnorderedList>
					<Text
						color="white"
						fontWeight="light"
						paddingTop="10px"
						fontSize={["18px", "21px", "25px", "27px"]}
					>
						Universidad Autónoma del Estado de Hidalgo.
					</Text>

					<Text
						color="white"
						fontWeight="light"
						paddingTop="15px"
						fontSize={["18px", "21px", "25px", "27px"]}
					>
						Estudiante de Ingenieria de Software.
					</Text>
				</UnorderedList>
			</Stack>
		</Stack>
	</Flex>
);
export default container;
