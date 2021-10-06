//import liraries
import React, { Component } from "react";
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

const comoFunc = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/CFuncBG.png")}
      style={styles.image}
    >

      <View style={styles.boxTexto}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={{ fontSize: 20, color: "#519548", textAlign: 'justify' }}>


            Em virtude das barreiras de comunicação existentes entre os profissionais de saúde e pacientes surdos,
            foi desenvolvido um aplicativo de fácil manuseio e de ampla acessibilidade para atendimento ao surdo,
            com o intuito de facilitar o diálogo terapêutico na Língua Brasileira de Sinais (Libras).{"\n"}
            O aplicativo recebeu o nome de Hand Cure, e faz parte de um projeto de mestrado vinculado ao
            Programa de Pós-Graduação Stricto Sensu em Biotecnologia em Saúde Humana e Animal no Centro
            Universitário CESMAC-Maceió-Alagoas.{"\n"}{"\n"}

            O dispositivo móvel funciona da seguinte forma:{"\n"}

            Na chegada do paciente surdo à recepção dos serviços de saúde, o acolhimento realizado pelo 
            profissional de saúde, será feito clica nos botões: Bom Dia, Boa Tarde ou Boa Noite."
            Em seguida,
            logo aparecerá um vídeo com essas saudações em libras. Posteriormente, o profissional de saúde
            clica na tela referente a identificação pessoal, no qual constará os seguintes itens: identidade,
            residência, telefone e se está acompanhado de alguém.{"\n"} Posteriormente, será coletada a informação
            sobre o local da dor, por meio de um vídeo, solicitando que o paciente surdo aponte em bonecos
            masculino ou feminino, expressos na tela do celular. Por último, será solicitado ao paciente
            surdo que informe a intensidade da dor que está sentido, constando no aplicativo uma tela com
            uma escala de dor universal (zero a dez) para o paciente surdo apontar.{"\n"} Dessa forma, mesmo sem
            saber Libras serão obtidas informações preliminares para encaminhar o paciente surdo ao
            especialista/tratamento adequado.{"\n"}{"\n"}

          </Text>
        </ScrollView>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.botaoComecar} onPress={() => navigation.navigate('home')}>
          <Text style={{ fontSize: 24, color: '#fff' }}>
            Começar
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default comoFunc;
