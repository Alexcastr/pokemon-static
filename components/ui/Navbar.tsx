import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {

const {theme} = useTheme()

 return (
  <div
   style={{
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    padding: "0 20px",
    backgroundColor: theme?.colors.gray200.value,
   }}
  >
   <Image
    alt="pokemon logo"
    width={"70px"}
    height={"70px"}
    src={
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    }
   />
   <NextLink href="/" passHref>
    <Link color="secondary">
     <Text h2 color="white">P</Text>
     <Text h2 color="white">okémon</Text>
    </Link>
   </NextLink>

   <Spacer css={{ flex: 1 }} />
   <NextLink href="/favorites" passHref>
    <Link color="success">
     <Text h3 color="white">Favoritos</Text>
    </Link>
   </NextLink>
  </div>
 );
}
