import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Pressable} from "react-native";
import { Link } from 'expo-router';

export default function Iowe () {
    return (

        <SafeAreaView
        style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 20,
            gap: 10
        }}>
        <Link href="/" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Back</Text>
            </Pressable>
        </Link>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>I owe</Text>

    </SafeAreaView>
    );
}

const styles = {
    button: {
        backgroundColor: '#1C1C1C',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
}