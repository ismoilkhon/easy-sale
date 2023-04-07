import { SafeAreaView, Text, TouchableOpacity, city, View } from "react-native"
import { OutlinedBtn } from "../../assets/btns/outlined"
import { FilledInput } from "../../assets/inputs/filled"
import { Background } from "../../backgroun"
import { Styles } from "./style"

export const SignUp = (props) => {
    const styles = Styles
    return (
        <Background>
            <SafeAreaView>
                <View style={styles.wrapper}>
                    <Text style={styles.h2}>Sign Up</Text>
                    <Text style={styles.h4}>Create new account</Text>
                </View>
                <View style={styles.form}>
                    <FilledInput
                        placeholder='First Name'
                    />
                    <FilledInput
                        placeholder='Last Name'
                    />
                    <FilledInput
                        placeholder='Email adress'
                        keyboardType='email-address'
                    />
                    <FilledInput
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <FilledInput
                        placeholder='Conform password'
                        secureTextEntry={true}
                    />
                    <View style={styles.link}>
                        <Text style={styles.linkText}>By singing in you agree to our</Text>
                        <Text style={styles.linkTextBold}>Terms & Conditons</Text>
                    </View>
                    <OutlinedBtn btnLable='Sign Up' Press={() => {
                        alert('Account added')
                        props.navigation.navigate('LogIn')
                    }} />
                    <View style={styles.redirect}>
                        <Text style={styles.linkText}>
                            Already have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('LogIn')
                            }}
                        >
                            <Text style={styles.linkTextBold}>  Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Background>
    )
}