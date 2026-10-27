import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";

import JupiterP from "../../assets/images/jupter_P.svg";
import MarteP from "../../assets/images/marte_P.svg";
import MercurioP from "../../assets/images/mercurio_P.svg";
import NetunoP from "../../assets/images/netuno_P.svg";
import SaturnoP from "../../assets/images/saturno_P.svg";
import TerraP from "../../assets/images/terra_P.svg";
import UranoP from "../../assets/images/urano_P.svg";
import VenusP from "../../assets/images/venus_P.svg";

export default function Catalogo() {
  return (
    <View style={styles.background}>
      <View style={styles.info}>
        <Text style={styles.title}>SpaceZ</Text>
      </View>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.cardContainer}>
          <View style={styles.cardRight}>
            <Text style={styles.mercurioText}>Mercúrio</Text>
            <Image source={MercurioP} style={styles.mercurio} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardLeft}>
            <Text style={styles.venusText}>Vénus</Text>
            <Image source={VenusP} style={styles.venus} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardRightTerra}>
            <Text style={styles.terraText}>Terra</Text>
            <Image source={TerraP} style={styles.terra} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardLeftMarte}>
            <Text style={styles.marteText}>Marte</Text>
            <Image source={MarteP} style={styles.marte} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardRightJupiter}>
            <Text style={styles.jupiterText}>Júpiter</Text>
            <Image source={JupiterP} style={styles.jupiter} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardLeftSaturno}>
            <Text style={styles.marteText}>Saturno</Text>
            <Image source={SaturnoP} style={styles.saturno} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardRightUrano}>
            <Text style={styles.uranoText}>Urano</Text>
            <Image source={UranoP} style={styles.urano} />
          </View>
        </Pressable>

        <Pressable style={styles.cardContainer}>
          <View style={styles.cardLeftNetuno}>
            <Text style={styles.netunoText}>Netuno</Text>
            <Image source={NetunoP} style={styles.netuno} />
          </View>
        </Pressable>

        <View style={styles.info}>
          <Text style={styles.subtitle}>Selecione um dos planetas</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  scrollContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  cardContainer: {
    flexDirection: "row",
    marginVertical: 14,
    justifyContent: "center",
  },

  cardRight: {
    backgroundColor: "#605B5B",
    height: 50,
    borderRadius: 30,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightTerra: {
    backgroundColor: "#88B178",
    height: 50,
    borderRadius: 30,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightJupiter: {
    backgroundColor: "#9F4721",
    height: 50,
    borderRadius: 30,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightUrano: {
    backgroundColor: "#86C5C5",
    height: 50,
    borderRadius: 30,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftSaturno: {
    backgroundColor: "#B7987A",
    height: 50,
    borderRadius: 30,
    flexDirection:"row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftNetuno: {
    backgroundColor: "#323A80",
    height: 50,
    borderRadius: 30,
    flexDirection:"row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeft: {
    backgroundColor: "#D0BEA1",
    height: 50,
    borderRadius: 30,
    flexDirection:"row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftMarte: {
    backgroundColor: "#7D3C31",
    height: 50,
    borderRadius: 30,
    flexDirection:"row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  mercurioText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    left: 25,
  },
  mercurio:{
    marginTop: 7,
    left: 90,
    width: 90,
    height: 90,
  },
  venusText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    right: 25,
  },
  venus:{
    marginTop: 7,
    right: 110,
    width: 90,
    height: 90,
  },
  terraText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    left: 25,
  },
  terra:{
    marginBottom: 3,
    left: 110,
    width: 87,
    height: 87,
  },
    marteText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    right: 25,
  },
  marte:{
    marginTop: 7,
    right: 110,
    width: 90,
    height: 90,
  },
  jupiterText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    left: 25,
  },
  jupiter:{
    left: 100,
    width: 90,
    height: 90,
  },
  SaturnoText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    right: 25,
  },
  saturno:{
    marginTop: 2,
    right: 100,
    width: 110,
    height: 100,
  },
  uranoText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    left: 25,
  },
  urano:{
    top: 2,
    left: 110,
    width: 110,
    height: 100,
  },
  netunoText: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    right: 25,
  },
  netuno:{
    marginTop: 2,
    right: 100,
    width: 85,
    height: 85,
  },
  subtitle: {
    fontSize: 13,
    color: "#CCCCCC",
    lineHeight: 18,
    marginBottom: 24,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  }
});     