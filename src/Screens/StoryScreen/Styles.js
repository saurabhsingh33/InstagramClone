import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
    },
    userInfo: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    postedTime: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        height: 50,
        margin: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    textInput: {
        height: '100%',
        color: 'white'
    },
    sendButton: {
        width: '10%'
    }
})

export default Styles;
