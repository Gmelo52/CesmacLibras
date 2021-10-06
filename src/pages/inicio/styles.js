import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    boxTitulo:{
        flex: .85,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 50,
        marginTop:100,
    },
    textoTitulo:{
        color:"#fff",
        fontSize:30,
        fontWeight: "bold",
    },
    boxButton:{
        flex: .15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    botaoComecar:{
        backgroundColor: '#519548',
        height:60,
        width:175,
        borderColor:'#FFF',
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal:15
    },
    botaoComoFunciona:{
        height:60,
        width:135,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal:15
    }
});
export default styles;