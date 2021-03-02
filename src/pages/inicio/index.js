//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import styles from "./styles";

const Inicio = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/InicioBg.png')} style={styles.image}>
            <View style={styles.boxTitulo}>
                <Text style={styles.textoTitulo}>Libras</Text>
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.botaoComoFunciona} onPress={() => navigation.navigate('comoFunc')}>  
                    <Text style={{color:'#519548',fontWeight:'bold', fontSize:16}}>Como funciona?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoComecar} onPress={() => navigation.navigate('home')}> 
                    <Text style={{color:'#fff', fontSize:24}}>Começar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
export default Inicio;
