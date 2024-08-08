import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Switch} from "react-native";
import { useState } from 'react';

export default function Adddebt () {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);  
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

    </SafeAreaView>
    );
}
