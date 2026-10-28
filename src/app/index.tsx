import { Text, View, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground  style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>SpaceZ</Text>
        <Text style={styles.subtitle}>
          Uma plataforma educativa e interativa concebida para ensinar os mais
          pequenos sobre o Sistema Solar. Através de personagens cativantes e conteúdos 
          visuais apelativos, transformamos a aprendizagem da astronomia numa grande aventura espacial!
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => router.push("/planetas")}>
          <Text style={styles.buttonText}>Começar</Text>
          <Text style={styles.seta}>→</Text>
        </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000"
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 13,
    color: "#CCCCCC",
    lineHeight: 18,
    marginBottom: 24,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  seta: {
    color: "#000000",
    fontSize: 18,
    marginLeft: 8,
    fontWeight: "bold",
  },
});