import { TextInput } from "react-native";
import { lightGray } from "../constants/color";
import { Styles } from "./style";

export const FilledInput = props => {
    const styles = Styles
    return (
        <TextInput
            {...props}
            style={styles.filledInput}
            placeholderTextColor={lightGray}
        >

        </TextInput>
    );
}