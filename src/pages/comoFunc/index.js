//import liraries
import React, { Component } from "react";
import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";

const comoFunc = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/CFuncBG.png")}
      style={styles.image}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.boxTexto}>
        <Text style={{ fontSize: 20, color: "#519548", textAlign:'justify'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt,
          enim sed blandit dictum, ex nulla pulvinar neque, ut placerat libero
          libero in lectus. Vestibulum pellentesque convallis volutpat.{"\n"}
          {"\n"}
          Curabitur sollicitudin orci turpis, finibus convallis orci molestie
          vel. Aliquam in elit felis. Suspendisse scelerisque ante sit amet sem
          pellentesque, quis euismod lectus tincidunt. Nam id metus nec ligula
          porta consequat vitae ac velit. Quisque urna ex, rhoncus non fringilla
          eget, fringilla consectetur diam. Sed laoreet cursus lacus, sed rutrum
          enim malesuada eu. Nam turpis velit, commodo at luctus a, feugiat a
          lacus. Sed accumsan vehicula nunc quis euismod.{"\n"}
          {"\n"}
          Nulla rhoncus ante at lacus dignissim, vel vulputate libero posuere.
          Proin nulla tellus, mattis a posuere eu, eleifend non odio.
          Pellentesque non nulla enim. Vivamus blandit euismod tellus.
        </Text>
      </View>
      <View style={styles.boxButton}>
          <TouchableOpacity style={styles.botaoComecar} onPress={() => navigation.navigate('home')}>
              <Text style={{fontSize:24, color:'#fff'}}>
                  Começar
              </Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default comoFunc;
