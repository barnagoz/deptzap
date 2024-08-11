import {Modal, Pressable, RefreshControl, ScrollView, Share, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import {Link} from 'expo-router';
import {deleteDept, getDeptList} from "../../lib/depts";
import {useCallback, useState} from "react";
import getShareText from "@/lib/share";
import {useFocusEffect} from "@react-navigation/native";


export default function Index ({navigation}) {
    const [depts, setDepts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDept, setSelectedDept] = useState({});

    async function getData () {
        setRefreshing(true)
        const depts = await getDeptList();
        setDepts(depts);
        setRefreshing(false)
    }

    useFocusEffect(useCallback(() => {
        getData()
    }, [navigation]));

    return (<SafeAreaView style={{heigth: "100%"}}>
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            presentationStyle={"pageSheet"}
        >
            <View style={{
                flex: 1, justifyContent: 'flex-start', alignItems: 'start', padding: 20, paddingTop: 18
            }}>

                <Text style={{
                    marginBottom: 15, textAlign: 'center', width: '100%', fontSize: 18.5, fontWeight: 'bold',
                }}>{selectedDept.amount > 0 ? `You owe ${selectedDept.name}` : `${selectedDept.name} owes you`}</Text>
                <Text style={{
                    fontSize: 60,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginVertical: 80,
                    color: selectedDept.amount > 0 ? "#ff393d" : "#34b946",
                    width: "100%"
                }}>
                    {Math.abs(selectedDept.amount)} {selectedDept.currency}
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>Description</Text>
                <Text style={{fontSize: 20, marginBottom: 20,}}>{selectedDept.description}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>Date</Text>
                <Text style={{fontSize: 20, marginBottom: 20,}}>{new Date(selectedDept.date).toLocaleString()}</Text>
                <Pressable
                    onPress={() => Share.share({
                        message: getShareText(selectedDept),
                        title: "Share dept"
                    })}
                    accessibilityLabel="Delete"
                    style={{
                        backgroundColor: "#1c1c1c",
                        padding: 10,
                        borderRadius: 18.5,
                        paddingHorizontal: 15,
                        width: "100%",
                        flex: 1,
                        alignItems: "center",
                        maxHeight: 42,
                        marginBottom: 10
                    }}>
                    <Text style={{fontSize: 20, color: "white"}}>Share</Text>
                </Pressable>
                <Pressable
                    onPress={() => deleteDept(selectedDept.name, selectedDept.date).then(() => {
                        setModalVisible(!modalVisible);
                        getData()
                    }).catch(() => alert("An error occurred while deleting the transaction. Please try again."))}
                    accessibilityLabel="Delete"
                    style={{
                        backgroundColor: "#ff0000",
                        padding: 10,
                        borderRadius: 18.5,
                        paddingHorizontal: 15,
                        width: "100%",
                        flex: 1,
                        alignItems: "center",
                        maxHeight: 42
                    }}>
                    <Text style={{fontSize: 20, color: "white"}}>Delete</Text>
                </Pressable>
            </View>
        </Modal>
        <ScrollView style={{height: "105%"}} contentContainerStyle={{
            justifyContent: "start", alignItems: "start", padding: 15, gap: 10, flexGrow: 1, paddingBottom: 150
        }} refreshControl={(<RefreshControl refreshing={refreshing} onRefresh={getData} title={"Updating..."}/>)}>
            <Text style={{fontSize: "30em", fontWeight: "bold"}}>Hoowdy fellow DeptZapper!</Text>
            <Link href="/newtransaction" asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>New transaction</Text>
                </Pressable>
            </Link>
            <Text style={{fontSize: "25em", marginTop: 10, fontWeight: "600"}}>Recent transactions</Text>
            {depts.map((dept, index) => (
                <Pressable onPress={() => {
                    setSelectedDept(dept);
                    setModalVisible(true);
                }} key={index}>
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
                        <Text style={{
                            fontSize: "30em", color: "black"
                        }}>{Math.abs(dept.amount)} {dept.currency}</Text>
                    </View>
                </Pressable>))}
            {depts.length === 0 &&
                <Text style={{fontSize: "16em", color: 'gray', marginTop: 10, textAlign: "center", width: '100%'}}>Hmm...
                    It looks like there are no transactions here..</Text>}
        </ScrollView>
    </SafeAreaView>);
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
    }, text: {
        fontSize: 16, lineHeight: 21, fontWeight: 'bold', letterSpacing: 0.25, color: 'white',
    },
});