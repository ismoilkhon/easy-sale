import { StyleSheet, Dimensions } from "react-native"
import { darkGray, lightGray } from "../../assets/constants/color";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const Styles = StyleSheet.create({

    wrapper: {
        alignItems: 'center',
        width: windowWidth,
    },
    h2: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#818181',
        marginTop: 50,
    },
    h4: {
        fontSize: 20,
        color: '#818181',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    form: {
        backgroundColor: lightGray,
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        paddingTop: 50,
        borderTopLeftRadius: 90,
    },
    p: {
        fontSize: 20,
        color: darkGray,
        fontWeight: '400',
    },
    link: {
        alignItems: 'flex-end',
        width: '80%',
        justifyContent: 'center',
        marginBottom: 70,
    },
    redirect: {
        display: 'flex',
        flexDirection: 'row',
    },
    linkText: {
        fontSize: 14,
        color: darkGray,
        fontWeight: '300',
        paddingTop: 15,
        alignSelf: 'flex-end'
    },
    linkTextBold: {
        fontSize: 16,
        color: darkGray,
        fontWeight: '700',
        marginTop: 10
    }
})