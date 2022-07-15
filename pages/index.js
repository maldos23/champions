import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Script from "next/script";
import { motion } from "framer-motion";
import Image from "next/image";
import AcceptButton from "../components/AcceptButton";

const line1 = `Hola bienvenida se que tienes dudas que demonios hacemos y ahora que
se fumo gino y que no era mas facil decirlo en la parada de un
camion 🚌 o en un uber con el conductor de metiche 🚗 y mira la neta
si pero aqui andamos de mamador. Asi que aqui van las propuestas:`;

export default function Init() {
  return (
    <div>
      <Script src="https://cdn.lordicon.com/lusqsztk.js"></Script>
      <div style={{ textAlign: "center" }}>
        <lord-icon
          src="https://cdn.lordicon.com/lupuorrc.json"
          trigger="loop"
          colors="primary:#121331,secondary:#bb00ff"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
        <Heading
          size="3xl"
          style={{
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Presentamos la{" "}
          <b
            style={{
              background:
                "linear-gradient(90deg, rgba(123,81,222,1) 0%, rgba(187,0,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            champions
          </b>
        </Heading>
        <Text>Presentado por Gino color caguama🍾</Text>
      </div>

      <Container maxW="2xl" centerContent>
        <Box padding="5" color="black" maxW="md">
          <motion.p
            style={{ textAlign: "justify" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 1, staggerChildren: 0.5 },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {line1}
          </motion.p>
          <br />
          <Box
            bg="#bb00ff"
            borderRadius="3xl"
            w="100%"
            m={2}
            p={4}
            color="white"
            textAlign="center"
          >
            Modular siempre y dispuesto a escuchar siempre
            <Image
              src="/patricio.webp"
              width={150}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
          </Box>

          <Box
            bg="#bb00ff"
            borderRadius="3xl"
            w="100%"
            m={2}
            p={4}
            color="white"
            textAlign="center"
          >
            Ver peliculas y escuchar rolitas aun que sean medio chacalonas o de
            barrio tambien te vengo manejando la gata bajo la lluvia
            <Image
              src="/gata.png"
              width={150}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
          </Box>
          <Box
            bg="#bb00ff"
            borderRadius="3xl"
            w="100%"
            m={2}
            p={4}
            color="white"
            textAlign="center"
          >
            Si peleamos no hay problema siempre abriremos la democracia como el
            peje y nos pondremos de acuerdo
            <br />
            <Image
              src="/peje.webp"
              width={150}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
          </Box>
          <Box
            bg="#bb00ff"
            borderRadius="3xl"
            w="100%"
            m={2}
            p={4}
            color="white"
            textAlign="center"
          >
            Como se que eres estudiambre te voy a echar para que duermas
            temprano y si no me desvelo contigo igual ojeroso estoy
            <br />
            <Image
              src="/mishi.jpg"
              width={150}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
          </Box>
          <Box
            bg="#bb00ff"
            borderRadius="3xl"
            w="100%"
            m={2}
            p={4}
            color="white"
            textAlign="center"
          >
            Si necesita se apapachada siempre estare dispuesto para responder a
            tiempo ⏱ y mas propuestas pero mi servidor es pequeño pero es felz
            alojando esta propuesta
            <br />
            <Image
              src="/mishillora.jpg"
              width={150}
              height={150}
              layout="fixed"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Container>
      <Heading
        textAlign="center"
        size="3xl"
        style={{
          fontFamily: "'Kanit', sans-serif",
        }}
      >
        Conclusion
      </Heading>
      <Container maxW="2xl" centerContent>
        <Box padding="5" color="black" maxW="md">
          <motion.p
            style={{ textAlign: "justify" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 1, staggerChildren: 0.5 },
              },
            }}
            initial="hidden"
            animate="show"
          >
            Mira no sere ni un sujeto asi que digas guapo o lo mejor de lo mejor
            pero y tampoco te voy a decir que vamos a ser como una serie de
            Disney Plus seremos mas como una de Netflix con temporadas chidas,
            con escenas epicas, con chilladeras porque no si no no estaria
            buena, pero eso si de las mas chidas si apruebas la primera
            temporada.
          </motion.p>
          <br />
          <AcceptButton />
        </Box>
      </Container>
    </div>
  );
}
