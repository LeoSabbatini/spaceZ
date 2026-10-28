import { BuscarPlanetas } from "@/api/getPlanetas";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";


export default function Catalogo() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["planetas"],
    queryFn: BuscarPlanetas,
  });

  if (isLoading) {
    return (
      <View /*style={style.centro}*/>
        <ActivityIndicator />
        <Text>Explorando planetas...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View /*style={style.centro}*/>
        <Text>Ops! Erro ao carregar planetas</Text>
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <View style={styles.info}>
        <Text style={styles.title}>SpaceZ</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/planetas/${item.id}` as any)}
          >
            <View style={styles.cardContainer}>
              <View style={styles.cardRight}>
                <Text style={styles.mercurioText}>{item.nome}</Text>
                <Image source={{ uri: item.imgUrl }} style={styles.mercurio} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.info}>
        <Text style={styles.subtitle}>Selecione um dos planetas</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightTerra: {
    backgroundColor: "#88B178",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightJupiter: {
    backgroundColor: "#9F4721",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardRightUrano: {
    backgroundColor: "#86C5C5",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftSaturno: {
    backgroundColor: "#B7987A",
    height: 50,
    borderRadius: 30,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftNetuno: {
    backgroundColor: "#323A80",
    height: 50,
    borderRadius: 30,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeft: {
    backgroundColor: "#D0BEA1",
    height: 50,
    borderRadius: 30,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardLeftMarte: {
    backgroundColor: "#7D3C31",
    height: 50,
    borderRadius: 30,
    flexDirection: "row-reverse",
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
  mercurio: {
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
  venus: {
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
  terra: {
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
  marte: {
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
  jupiter: {
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
  saturno: {
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
  urano: {
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
  netuno: {
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
  },
});
