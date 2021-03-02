import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    boxTexto:{
        flex: .8,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    boxButton:{
        flex: .2,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    botaoComecar:{
        backgroundColor: '#519548',
        height:60,
        width:'100%',
        borderColor:'#FFF',
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal:15
    },
});
export default styles;