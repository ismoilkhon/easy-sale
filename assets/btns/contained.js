import { Text, TouchableOpacity } from "react-native"
import { Styles } from "./style"

export const ContainedBtn = ({ btnLable, Press }) => {
    const styles = Styles
    return (
        <TouchableOpacity
            style={styles.contaibedBtn}
            onPress={Press}
        >

            <Text style={styles.contaibedBtnText}>
                {btnLable}
            </Text>
        </TouchableOpacity>

    )
}

