import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import dias from "../../assets/images/dias.png";
import tamanho from "../../assets/images/tamanho.png";
import temperatura from "../../assets/images/temperatura.png";

export default function PlanetCard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"  />
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        <View style={styles.imageContainer}>
          <Text style={styles.bgNumber}>1</Text>
          <Image
            source={require('../../assets/images/mercurio_P.svg')}
            style={styles.planetImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Mercurio</Text>
          
          <Text style={styles.description}>
            Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol. 
            Apresenta uma superfície rochosa e coberta de crateras de impacto, 
            muito semelhante à da Lua. Como a sua atmosfera é extremamente ténue 
            (uma exosfera), o planeta não consegue reter calor, resultando numa 
            oscilação térmica extrema entre o dia e a noite. Não possui luas 
            conhecidas nem anéis.
          </Text>

          {/* Rodapé com as métricas */}
          <View style={styles.metricsRow}>
            <View style={styles.metricItem}>
              <Image source={tamanho} style={styles.icon} />
              <Text style={styles.metricText}>4.879 km</Text>
            </View>

            <View style={styles.metricItem}>
              <Image source={temperatura} style={styles.icon} />
              <Text style={styles.metricText}>167° C</Text>
            </View>

            <View style={styles.metricItem}>
              <Image source={dias} style={styles.icon} />
              <Text style={styles.metricText}>88 dias</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 36,
  },
  imageContainer: {
    height: 280,
    position: 'relative',
    justifyContent: 'center',
  },
  bgNumber: {
    position: 'absolute',
    left: 0,
    top: 130,
    fontSize: 280,
    fontWeight: 'bold',
    color: '#D8D8D8',
    zIndex: 1,
  },
  planetImage: {
    position: 'absolute',
    right: -150,
    top: -20,
    width: 460,
    height: 460,
    zIndex: 2,
  },
  contentContainer: {
    marginTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: '#D0D0D0',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '300',
    marginBottom: 36,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  metricText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});