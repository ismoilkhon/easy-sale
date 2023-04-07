import { Text, View } from "react-native"
import { ContainedBtn } from "../../assets/btns/contained";
import { OutlinedBtn } from "../../assets/btns/outlined";
import { darkGray, lightGray } from "../../assets/constants/color";
import { Background } from "../../backgroun";
import { Styles } from "./style";

export const Home = (props) => {
    const styles = Styles
    return (
        <Background>
            <View style={styles.textCont}>
                <Text style={styles.h1}>Let's make it</Text>
                <Text style={styles.h1}>Easy</Text>
                <ContainedBtn
                    btnLable='Log In'
                    Press={() => {
                        props.navigation.navigate('LogIn')
                    }}
                />
                <OutlinedBtn
                    btnLable='Sign Up'
                    Press={() => {
                        props.navigation.navigate('SignUp')
                    }}
                />
            </View>
        </Background>
    );
}

