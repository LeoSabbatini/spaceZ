import { BuscarPlanetas } from "@/api/getPlanetas";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import {ActivityIndicator,FlatList,Image,StyleSheet,Text,TouchableOpacity,View,} from "react-native";

export default function Catalogo() {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["planetas"],
    queryFn: BuscarPlanetas,
  });

  if (isLoading) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator color="#FFFFFF" size="large" />
        <Text style={styles.carregando}>Explorando planetas...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centro}>
        <Text style={styles.carregando}>Ops! Erro ao carregar planetas</Text>
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/planetas/${item.id}` as any)}
          >
            <View style={styles.cardContainer}>
              <View style={[styles.card, { backgroundColor: item.cor }]}>
                <Text style={styles.planetaTexto} numberOfLines={1}>
                  {item.nome}
                </Text>

                <Image
                  source={{ uri: item.imgUrl }}
                  style={styles.planetaImagem}
                  resizeMode="contain"
                />
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
  },
  centro: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  carregando: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardContainer: {
    alignItems: "center",
    marginVertical: 14,
  },
  card: {
    height: 60,
    borderRadius: 30,
    justifyContent: "center", 
    width: 350,
    overflow: "visible", 
    position: "relative", 
  },
  planetaTexto: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "700",
    maxWidth: 160, 
    left: 15,
  },
  planetaImagem: {
    width: 250,
    height: 150,
    position: "absolute",
    right: -90, 
    top: -45, 
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