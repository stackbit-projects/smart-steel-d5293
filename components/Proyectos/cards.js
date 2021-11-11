import {
	WrapItem,
	Flex,
	Box,
	Image,
	HStack,
	Stack,
	Text,
	Center,
	Heading,
	Wrap,
	Link,
	Button,
} from "@chakra-ui/react";

const Cards = () => (
	<Flex w="100%" h="100%">
		<Center>
			<Wrap
				spacing="30px"
				paddingTop="30px"
				margin="25px"
				justify="center"
				alignItems="center"
			>
				<WrapItem>
					<HStack>
						<Box
							_hover={{ background: "rgb(255,255,255,0.9)" }}
							bg="white"
							maxW="350px"
							rounded="lg"
							boxShadow="dark-lg"
							p={8}
							overflow="hidden"
						>
							<Image
								htmlWidth="180%"
								htmlHeight="110%"
								bg="gray.100"
								src="https://firebasestorage.googleapis.com/v0/b/portafolio-79b05.appspot.com/o/card1%20(1).jpg?alt=media&token=5798500f-82e2-4dbb-b5e4-52dbd4b55638"
								alt="App-dietario"
								mb={9}
							/>
							<Stack>
								<Heading fontSize="2xl" fontFamily="body" mb={3}>
									App Dietario
								</Heading>

								<Text color="blackAlpha.900">
									Aplicacion movil que nos ayuda a calcular el numero de calorias
									por dia de forma personalizada, ademas de conocer tu indice de
									masa corporal, gasto energetico y tasa metabolica basal.
								</Text>
							</Stack>
							<Stack mt={8} direction="row" spacing={5} align="center">
								<Stack direction="column" spacing={5} fontSize="sm">
									<Text fontWeight={600}>
										Agencia Digital Terrabionic - Servicio Social
									</Text>
									<Text color="gray.900">Enero - Julio, 2021</Text>
									<Button colorScheme="teal" variant="outline">
										<Link href="https://gitlab.com/terrabionic/dieta-app">
											Ir a proyecto
										</Link>
									</Button>
								</Stack>
							</Stack>
						</Box>
					</HStack>
				</WrapItem>
				<WrapItem>
					<HStack>
						<Box
							_hover={{ background: "rgb(255,255,255,0.9)" }}
							bg="white"
							maxW="350px"
							boxShadow="dark-lg"
							rounded="lg"
							p={10}
							overflow="hidden"
						>
							<Image
								htmlWidth="180%"
								htmlHeight="110%"
								bg="gray.100"
								src="https://firebasestorage.googleapis.com/v0/b/portafolio-79b05.appspot.com/o/card2.png?alt=media&token=7ffe245f-c1ab-4dab-9635-63ee4cd82cec"
								alt="Pagina-Tributo"
								mb={9}
							/>
							<Stack>
								<Heading fontSize="2xl" fontFamily="body" mb={3}>
									Pagina tributo | Steve Jobs
								</Heading>
								<Text color="blackAlpha.900">
									Proyecto de diseño web que muestra un tributo a Steve Jobs.
									Creada en el curso de FreeCodeCamp - Responsive Web Design
									Certifications.
								</Text>
							</Stack>
							<Stack mt={8} direction="row" spacing={5} align="center">
								<Stack direction="column" spacing={5} fontSize="sm">
									<Text fontWeight={600}>
										Zeniaq Technologies - Practicas Profesionales.
									</Text>
									<Text color="gray.900">Agosto, 2021</Text>
									<Button colorScheme="teal" variant="outline">
										<Link
											href="
https://codepen.io/RaymundoC13/full/abWxQJb"
										>
											Ir a proyecto
										</Link>
									</Button>
								</Stack>
							</Stack>
						</Box>
					</HStack>
				</WrapItem>
				<WrapItem>
					<HStack>
						<Box
							_hover={{ background: "rgb(255,255,255,0.9)" }}
							bg="white"
							maxW="350px"
							boxShadow="dark-lg"
							rounded="lg"
							p={9}
							overflow="hidden"
						>
							<Image
								htmlWidth="110%"
								htmlHeight="80%"
								bg="gray.100"
								src="https://firebasestorage.googleapis.com/v0/b/portafolio-79b05.appspot.com/o/card4.png?alt=media&token=4b37d4b1-cbe2-4a0d-8b44-4eda3c5a2b58"
								alt="Portafolio-personal"
								mb={5}
							/>
							<Stack>
								<Heading fontSize="2xl" fontFamily="body" mb={3}>
									Portafolio Personal
								</Heading>
								<Text color="blackAlpha.900">
									Proyecto de mi portafolio personal desarrollada usando
									frameworks de Next.JS y Chakra UI.
								</Text>
							</Stack>
							<Stack mt={8} direction="row" spacing={5} align="center">
								<Stack direction="column" spacing={5} fontSize="sm">
									<Text fontWeight={600}>
										Zeniaq Technologies - Practicas Profesionales.
									</Text>
									<Text color="gray.900">Agosto - Octubre, 2021</Text>
								</Stack>
							</Stack>
						</Box>
					</HStack>
				</WrapItem>
				<WrapItem>
					<HStack>
						<Box
							_hover={{ background: "rgb(255,255,255,0.9)" }}
							bg="white"
							maxW="350px"
							boxShadow="dark-lg"
							rounded="lg"
							p={9}
							overflow="hidden"
						>
							<Image
								htmlWidth="190%"
								htmlHeight="110%"
								bg="gray.100"
								src="https://firebasestorage.googleapis.com/v0/b/portafolio-79b05.appspot.com/o/card3.png?alt=media&token=ded4d6cf-8f0d-4e4f-ba77-2604e71ffdee"
								alt="Asist-Proy"
								mb={10}
							/>
							<Stack>
								<Heading fontSize="2xl" fontFamily="body" mb={2}>
									Asist-Proy
								</Heading>
								<Text color="blackAlpha.900">
									Aplicacion de escritorio que ayuda a la gestion, planeacion y
									controlar tareas de proyectos de software. Ademas de implementar
									de BI en reportes y generar reportes dinamicos.
								</Text>
							</Stack>
							<Stack mt={8} direction="row" spacing={5} align="center">
								<Stack direction="column" spacing={5} fontSize="sm">
									<Text fontWeight={600}>RAXE-TECH - Proyecto Integrador</Text>
									<Text color="gray.900">Agosto - Diciembre, 2020</Text>
								</Stack>
							</Stack>
						</Box>
					</HStack>
				</WrapItem>
				<WrapItem>
					<HStack>
						<Box
							_hover={{ background: "rgb(255,255,255,0.9)" }}
							bg="white"
							maxW="350px"
							boxShadow="dark-lg"
							rounded="lg"
							p={9}
							overflow="hidden"
						>
							<Image
								htmlWidth="180%"
								htmlHeight="110%"
								bg="gray.100"
								src="https://firebasestorage.googleapis.com/v0/b/portafolio-79b05.appspot.com/o/card5.png?alt=media&token=1ce4777a-5b8a-43d7-81c6-3afcb41111ea"
								alt="Proyecto-CMO"
								mb={9}
							/>
							<Stack>
								<Heading fontSize="2xl" fontFamily="body" mb={2}>
									Proyecto CMO
								</Heading>
								<Text color="blackAlpha.900">
									Aplicacion de escritorio que ayuda a realizar calculos de mano
									de obra, estimaciones de costo por proyecto y determinar que
									proyecto es mas factible por Cluster aplicando Inteligencia de
									negocios con PowerBI por medio de la herramienta de Microsoft
									Excel.
								</Text>
							</Stack>
							<Stack mt={8} direction="row" spacing={5} align="center">
								<Stack direction="column" spacing={5} fontSize="sm">
									<Text fontWeight={600}>Grupo Holcim - SQDesarrollo</Text>
									<Text color="gray.900">Enero - Julio, 2019</Text>
								</Stack>
							</Stack>
						</Box>
					</HStack>
				</WrapItem>
			</Wrap>
		</Center>
	</Flex>
);
export default Cards;
