import { SafeAreaView, Text, TouchableOpacity, city, View } from "react-native"
import { OutlinedBtn } from "../../assets/btns/outlined"
import { FilledInput } from "../../assets/inputs/filled"
import { Background } from "../../backgroun"
import { Styles } from "./style"

export const LogIn = (props) => {
    const styles = Styles
    return (
        <Background>
            <SafeAreaView>
                <View style={styles.wrapper}>
                    <Text style={styles.h2}>Log In</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.h4}>Welcome Back</Text>
                    <Text style={styles.p}>Login to your account</Text>
                    <FilledInput
                        placeholder=' Email/Username'
                        keyboardType='email-address'
                    />
                    <FilledInput
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <View style={styles.link}>
                        <Text style={styles.linkText}>Forgot password ?</Text>
                    </View>
                    <OutlinedBtn btnLable='Log In' Press={() => {
                        alert('Logged In')
                    }} />
                    <View style={styles.redirect}>
                        <Text style={styles.linkText}>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('SignUp')
                            }}
                        >
                            <Text style={styles.linkTextBold}>  Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Background>
    )
}