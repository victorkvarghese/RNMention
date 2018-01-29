import { StyleSheet } from 'react-native';
const backgroundColor = '#FFFFFF';
const btnColor = '#27ae60';
const whiteColor = '#ffffff';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor,
        paddingVertical: 24,
        paddingHorizontal: 8
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    main: {
        alignItems: 'flex-end',
        marginBottom: 4
    },
    btn: {
        width: 60,
        height: 30,
        backgroundColor: btnColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: whiteColor
    }
});

export default styles;
