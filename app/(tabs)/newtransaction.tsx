import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Switch, TextInput, Pressable, Keyboard} from "react-native";
import { useState } from 'react';

export default function Adddebt () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [amount, onChangeAmount] = useState('');
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 15,
            gap: 10,
        }}>
        <Text style={{fontSize: 30, fontWeight: "bold", alignSelf: "center"}}>New transaction</Text>
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: "row", maxHeight: 30, gap: 5, alignSelf: "center", marginTop: 50}}>
            <Text style={{fontSize: 20, alignSelf: "center", paddingRight: 15, fontWeight: "bold"}}>Add debt</Text>
            <Switch
                trackColor={{false: '#84dcc6', true: '#ff686b'}}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#84dcc6"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={{fontSize: 20, alignSelf: "center", paddingLeft: 25, fontWeight: "bold"}}>I owe</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: "row", gap: 5, alignSelf: "center", marginTop: 50, maxHeight: 100}}>
        <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 3, width: 300, borderRadius: 10, padding: 10, fontSize: 20}}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder="Amount"
            keyboardType="numeric"
            placeholderTextColor="gray"
        />
        <Text style={{fontSize: 40, paddingLeft: 10}}>$</Text>
        </View>
        <View style={{flex: 1, alignItems: "flex-start", justifyContent: 'flex-start', flexDirection: "row", gap: 5, alignSelf: "center", maxHeight: 50}}>
            <Pressable
                onPress={() => Keyboard.dismiss()}
                accessibilityLabel="Back"
                style={{backgroundColor: "#1c1c1c", paddingHorizontal: 20, borderRadius: 10, padding: 10}}>
                <Text style={{fontSize: 20, color: "white"}}>Back</Text>
            </Pressable>
            <Pressable
                onPress={() => Keyboard.dismiss()} // TODO: Add submit function
                accessibilityLabel="Submit"
                style={{backgroundColor: "#1c1c1c", padding: 10, borderRadius: 10, paddingHorizontal: 15}}>
                <Text style={{fontSize: 20, color: "white"}}>Submit</Text>
            </Pressable>
        </View>
    </SafeAreaView>
    );
}