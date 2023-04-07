import { Text, TouchableOpacity } from "react-native"
import { Styles } from "./style"

export const OutlinedBtn = ({ btnLable, Press }) => {
    const styles = Styles
    return (
        <TouchableOpacity
            style={styles.outlinedBtn}
            onPress={Press}
        >
            <Text style={styles.outlinedBtnText}>
                {btnLable}
            </Text>
        </TouchableOpacity>

    )
}