import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";

const Home = () => {
  const [id, setid] = useState("-pWfb0iCxr0");
  return (
    <View style={styles.container}>
      <View style={styles.boxVideo}>
        <WebView
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${id}`,
          }}
        />
        {/*
        <Image
          source={require("../../assets/videoBG.png")}
          style={styles.video}
        />*/}
      </View>
      <View style={styles.boxLista}>
        <View style={styles.boxFixo}>
          <Text style={{ fontSize: 22, marginBottom: 10 }}>
            Seja bem-vindo!
          </Text>
          <Text style={{ fontSize: 16, color: "#519548" }}>
            Acolhimento na saúde
          </Text>
        </View>
        <ScrollView style={styles.boxScroll}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Vídeos</Text>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>Bom dia!</Text>
            <TouchableOpacity
              onPress={() => {
                setid("-pWfb0iCxr0");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>Boa Tarde!</Text>
            <TouchableOpacity
              onPress={() => {
                setid("Rg9Q4ZqRjy0");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>Boa Noite!</Text>
            <TouchableOpacity
              onPress={() => {
                setid("NMK47NwDxzw");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>Pedir identificação</Text>
            <TouchableOpacity
              onPress={() => {
                setid("E6KQvHmFwbs");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>
              Comprovante de Residência
            </Text>
            <TouchableOpacity
              onPress={() => {
                setid("NPKdapOJcZ8");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemLista}>
            <Text style={{ color: "#519548", fontSize: 20 }}>
              Acompanhante do surdo
            </Text>
            <TouchableOpacity
              onPress={() => {
                setid("iSpFLCpv3Lc");
              }}
            >
              <Image
                source={require("../../assets/btn_play.png")}
                style={{ width: 35, height: 35 }}
              />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
