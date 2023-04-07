import { ImageBackground, View } from "react-native"

export const Background = ({ children }) => {
    return (
        <View>
            <ImageBackground
                source={require('./assets/images/bg.jpeg')}
                style={{ height: '100%' }}
            />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    )
}