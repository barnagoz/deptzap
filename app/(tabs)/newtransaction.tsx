import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, Switch, Text, TextInput, View} from "react-native";
import {useState} from 'react';
import {addDept} from "@/lib/depts";

export default function Adddebt() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [amount, onChangeAmount] = useState('');
    const [name, onChangeName] = useState('');
    const [currency, onChangeCurrency] = useState('');
    const [desc, onChangeDesc] = useState('');

    async function submit() {
        await addDept(name, isEnabled ? amount : -amount, currency, desc, new Date().toISOString());
        alert("Transaction saved!")
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 15,
            gap: 10,
        }}>
            <Text style={{fontSize: 30, fontWeight: "bold", alignSelf: "flex-start"}}>New transaction</Text>
            <Text style={{fontSize: 22.5, alignSelf: "flex-start"}}>Who owes who?</Text>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: "row",
                maxHeight: 30,
                gap: 5,
                alignSelf: "center",
                marginTop: 15,
                marginBottom: 15,
            }}>
                <Text style={{fontSize: 18, alignSelf: "center", paddingRight: 5, fontWeight: "semibold"}}>Someone owes
                    me</Text>
                <Switch
                    trackColor={{false: '#84dcc6', true: '#ff686b'}}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#84dcc6"
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
                    value={isEnabled}
                />
                <Text style={{fontSize: 18, alignSelf: "center", paddingLeft: 5, fontWeight: "semibold"}}>I owe
                    someone</Text>
            </View>
            <Text style={{
                fontSize: 22.5,
                alignSelf: "flex-start"
            }}>{isEnabled ? "Who do you owe?" : "Who owes you?"}</Text>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: "row",
                gap: 5,
                alignSelf: "center",
                maxHeight: 50,
                marginBottom: 15
            }}>
                <TextInput
                    style={{
                        height: 'auto',
                        borderColor: 'gray',
                        borderWidth: 2,
                        width: "100%",
                        borderRadius: 18.5,
                        padding: 12,
                        fontSize: 18,
                    }}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Name"
                    placeholderTextColor="gray"
                />
            </View>
            <Text style={{
                fontSize: 22.5,
                alignSelf: "flex-start"
            }}>{isEnabled ? "How much do you owe?" : "How much do they owe you?"}</Text>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: "row",
                alignSelf: "center",
                maxHeight: 50,
                marginBottom: 15
            }}>
                <TextInput
                    style={{
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderRightWidth: 0,
                        width: "70%",
                        borderTopLeftRadius: 18.5,
                        borderBottomLeftRadius: 18.5,
                        padding: 12,
                        fontSize: 18
                    }}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="Amount"
                    keyboardType="numeric"
                    placeholderTextColor="gray"
                />
                <TextInput
                    style={{
                        borderColor: 'gray',
                        borderWidth: 2,
                        width: "30%",
                        borderTopRightRadius: 18.5,
                        borderBottomRightRadius: 18.5,
                        padding: 12,
                        fontSize: 18
                    }}
                    onChangeText={onChangeCurrency}
                    value={currency}
                    placeholder="Currency"
                    placeholderTextColor="gray"
                />
            </View>
            <Text style={{
                fontSize: 22.5,
                alignSelf: "flex-start"
            }}>{isEnabled ? "Why do you owe them?" : "Why do they owe you?"}</Text>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: "row",
                gap: 5,
                alignSelf: "center",
                height: 50,
                marginBottom: 15,
                maxHeight: 100
            }}>
                <TextInput
                    style={{
                        height: 'auto',
                        borderColor: 'gray',
                        borderWidth: 2,
                        width: "100%",
                        borderRadius: 18.5,
                        padding: 12,
                        fontSize: 18,
                    }}
                    onChangeText={onChangeDesc}
                    value={desc}
                    placeholder="Short description"
                    placeholderTextColor="gray"
                    multiline={true}
                />
            </View>
            <View style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: 'flex-start',
                flexDirection: "row",
                gap: 5,
                alignSelf: "center",
                maxHeight: 50
            }}>
                <Pressable
                    onPress={() => submit()}
                    accessibilityLabel="Submit"
                    style={{backgroundColor: "#1c1c1c", padding: 10, borderRadius: 18.5, paddingHorizontal: 15, width: "100%", flex: 1, alignItems: "center"}}>
                    <Text style={{fontSize: 20, color: "white"}}>Save</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}