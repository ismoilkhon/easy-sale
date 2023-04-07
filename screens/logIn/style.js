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
        color: '#717171',
        marginTop: 50,
    },
    form: {
        backgroundColor: lightGray,
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        paddingTop: 100,
        borderTopLeftRadius: 90,
    },
    h4: {
        fontSize: 40,
        color: darkGray,
        fontWeight: '400',
    },
    p: {
        fontSize: 20,
        color: darkGray,
        fontWeight: '400',
    },
    link: {
        alignItems: 'flex-end',
        width: '80%',
        marginBottom: 220,
    },
    redirect: {
        display: 'flex',
        flexDirection: 'row',
    },
    linkText: {
        fontSize: 14,
        color: darkGray,
        fontWeight: '300',
        paddingVertical: 15,
        alignSelf: 'flex-end'
    },
    linkTextBold: {
        fontSize: 16,
        color: darkGray,
        fontWeight: '700',
        paddingVertical: 15,
    }
})