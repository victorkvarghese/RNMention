import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
const borderColor = '#95a5a6';

const styles = StyleSheet.create({
    input: {
        width: width - 16,
        height: 100,
        fontSize: 24,
        borderWidth: 1,
        borderColor,
        padding: 4
    },
    btnView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
        margin: 4
    },

    list: {
        marginTop: 16
    },
    footer: {
        height: 500
    }
});

export default styles;
