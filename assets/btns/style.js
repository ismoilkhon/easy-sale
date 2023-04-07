import { StyleSheet } from "react-native";
import { darkGray, lightGray } from "../constants/color";

export const Styles = StyleSheet.create({
    contaibedBtn: {
        width: 330,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: lightGray,
        paddingVertical: 5,
        marginTop: 20,
    },
    contaibedBtnText: {
        fontSize: 25,
        color: darkGray,
        fontWeight: 'bold',
    },
    outlinedBtn: {
        width: 330,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: darkGray,
        paddingVertical: 5,
        marginTop: 20,
    },
    outlinedBtnText: {
        fontSize: 25,
        color: lightGray,
        fontWeight: 'bold',
    }

})