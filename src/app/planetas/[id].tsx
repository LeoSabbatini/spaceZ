import { BuscarPlaneta } from "@/api/getPlaneta";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocalSearchParams } from "expo-router";
import {ActivityIndicator,Image,ScrollView,StatusBar,StyleSheet,Text,TouchableOpacity,View,} from "react-native";

import dias from "../../../assets/images/dias.png";
import tamanho from "../../../assets/images/tamanho.png";
import temperatura from "../../../assets/images/temperatura.png";
import voltar from "../../../assets/images/voltar.png";

export default function PlanetCard() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["planeta", id],
    queryFn: () => BuscarPlaneta(id),
  });

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Carregando planeta...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Erro ao carregar planeta</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}
      >
        <Link href={"/planetas"}>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
        </Link>
        <View style={styles.imageContainer}>
          <Text style={styles.bgNumber}>{data.id}</Text>
          <Image
            source={{uri:data.imgUrl}}
            style={styles.planetImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{data.nome}</Text>

          <Text style={styles.description}>{data.descricao}</Text>

          <View style={styles.metricsRow}>
            <View style={styles.metricItem}>
              <Image source={tamanho} style={styles.icon} />
              <Text style={styles.metricText}>{data.tamanho} km</Text>
            </View>

            <View style={styles.metricItem}>
              <Image source={temperatura} style={styles.icon} />
              <Text style={styles.metricText}>{data.temperatura}° C</Text>
            </View>

            <View style={styles.metricItem}>
              <Image source={dias} style={styles.icon} />
              <Text style={styles.metricText}>{data.duracaoAno} dias</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 36,
  },
  imageContainer: {
    height: 280,
    position: "relative",
    justifyContent: "center",
  },
  bgNumber: {
    position: "absolute",
    left: 0,
    top: 10,
    fontSize: 280,
    fontWeight: "bold",
    color: "#D8D8D8",
    zIndex: 1,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingRight: 16,
    zIndex: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    tintColor: "#FFFFFF",
  },
  planetImage: {
    position: "absolute",
    right: -420,
    top: -350,
    width: 1100,
    height: 760,
    zIndex: 2,
  },
  contentContainer: {
    marginTop: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "#D0D0D0",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "300",
    marginBottom: 36,
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metricItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#FFFFFF",
  },
  metricText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
