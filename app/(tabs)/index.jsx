import {Text, View, StyleSheet, Pressable, Share} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';


export default function Index () {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "start",
                alignItems: "start",
                padding: 15,
                gap: 10
            }}
        >
        <Text style={{ fontSize: "30em", fontWeight: "bold" }}>Hello World!</Text>
        <View style={{ backgroundColor: "#1C1C1C", padding: 20, width: "100%", borderRadius: 15 }}>
            <Text style={{ color: "white" }}>Debt</Text>
            <Text style={{ fontSize: "35em", color: "white" }}>$2.00</Text>
        </View>
        <Link href="/newtransaction" asChild>
            <Pressable style={styles.button}>
                <Text style={styles.text}>New transaction</Text>
            </Pressable>
        </Link>
        <Text style={{ fontSize: "25em", marginTop: 10, fontWeight: "600" }}>Recent transactions</Text>
        <Pressable onPress={() => Share.share({ message: "Hey bro, you owe me 100 dollars." })}>
            <View style={{ backgroundColor: "#ff686b", padding: 20, width: "100%", borderRadius: 15, flex: 1, flexDirection: "row", maxHeight: 90, justifyContent: "space-between", alignItems: "center" }}>
                <Entypo name="circle-with-minus" size={50} color="black" />
                <Text style={{ fontSize: "20em" }}>János Béla</Text>
                <Text style={{ fontSize: "35em", color: "black" }}>$2.00</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => Share.share({ message: "Hey bro, you owe me 100 dollars." })}>
                <View style={{ backgroundColor: "#84dcc6", padding: 20, width: "100%", borderRadius: 15, flex: 1, flexDirection: "row", maxHeight: 90, justifyContent: "space-between", alignItems: "center" }}>
                    <Entypo name="circle-with-plus" size={50} color="black" />
                    <Text style={{ fontSize: "20em" }}>János Béla</Text>
                    <Text style={{ fontSize: "35em", color: "black" }}>$4.00</Text>
                </View>
        </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 15,
      elevation: 3,
      width: "100%",
      backgroundColor: '#1C1C1C',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });