import {Pressable, ScrollView, Share, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import {Link} from 'expo-router';
import {getDeptList} from "../../lib/depts";
import {useEffect, useState} from "react";


export default function Index () {
    const [depts, setDepts] = useState([
    ]);

    async function getData () {
        const depts = await getDeptList();
        console.log(depts);
        setDepts(depts);
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <SafeAreaView style={{heigth: "100%"}}
        >
            <ScrollView style={{height: "105%"}} contentContainerStyle={{
                justifyContent: "start",
                alignItems: "start",
                padding: 15,
                gap: 10,
                flexGrow: 1,
                paddingBottom: 150
            }}>
            <Text style={{fontSize: "30em", fontWeight: "bold"}}>Hello World!</Text>
            <View style={{backgroundColor: "#1C1C1C", padding: 20, width: "100%", borderRadius: 15}}>
                {/* "TODO: remove this, as it can't be calculated due to different currencies */}
                <Text style={{color: "white"}}>Debt</Text>
                <Text style={{fontSize: "35em", color: "white"}}>$2.00</Text>
            </View>
            <Link href="/newtransaction" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>New transaction</Text>
                </Pressable>
            </Link>
            <Text style={{fontSize: "25em", marginTop: 10, fontWeight: "600"}}>Recent transactions</Text>
                {/* TODO: add a "no transactions" message if there are no transactions */}
                {/* TODO: add option to remove transactions */}
                {/* TODO: change the share message to include the description and date of the transaction */}
            {depts.map((dept, index) => (
                <Pressable onPress={() => Share.share({message: "Hey bro, you owe me 100 dollars."})}>
                    <View style={{
                        backgroundColor: dept.amount > 0 ? "#ff686b" : "#84dcc6",
                        padding: 20,
                        width: "100%",
                        borderRadius: 15,
                        flex: 1,
                        flexDirection: "row",
                        maxHeight: 90,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Entypo name={dept.amount > 0 ? "circle-with-minus" : "circle-with-plus"} size={40}
                                color="black"/>
                        <Text style={{fontSize: "20em"}}>{dept.name}</Text>
                        <Text style={{fontSize: "30em", color: "black"}}>{Math.abs(dept.amount)} {dept.currency}</Text>
                    </View>
                </Pressable>
            ))}
            </ScrollView>
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