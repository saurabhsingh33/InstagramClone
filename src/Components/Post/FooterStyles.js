import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    likes: {
        fontWeight: 'bold',
        margin: 3,
    },
    caption: {
        margin: 3,
    },
    postedAt: {
        margin: 3,
        color: '#3c3c3c'
    },
    left: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    }
})

export default Styles;
