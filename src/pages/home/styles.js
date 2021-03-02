import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%'
    },
    boxVideo:{
        flex:.4,
    },
    video:{
        height:'100%',
        width:'100%',
    },
    boxLista:{
        flex:.6,
        backgroundColor:"#fff",
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        marginTop: -65,
    },
    boxFixo:{
        width:'100%',
        height:'100%',
        flex:.3,
        justifyContent: 'center',
        alignItems:'flex-start',
        marginHorizontal: 20,
    },
    boxScroll:{
        width:'100%',
        height:'100%',
        flex:.7,
        marginHorizontal: 20,
    },
    itemLista:{ 
        backgroundColor: 'rgba(136,196,37,.2)',
        padding:20,
        width:'90%',
        height:60,
        borderRadius:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginVertical: 5,
    },

});
export default styles;