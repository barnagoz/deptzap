import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

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
            <Text style={{fontSize: "30em", fontWeight: "bold"}}>Hello World!</Text>
            <View style={{backgroundColor: "#1C1C1C", padding: 20, width:"100%", borderRadius: 15}}>
                <Text style={{color: "white"}}>Balance</Text>
                <Text style={{fontSize:"35em", color: "white"}}>$0.00</Text>
            </View>
            <Text style={{fontSize: "25em", marginTop: 10, fontWeight:"600"}}>Asdasjhdkasj</Text>
            <View style={{backgroundColor: "#FFF", padding: 20, width:"100%", borderRadius: 15, flex: 1, flexDirection:"row", maxHeight:90, justifyContent:"space-between", alignItems:"center" }}>
                <View style={{flex: 1, alignItems:"center", justifyContent:"center", height:50, maxWidth: 50, maxHeight: 50, backgroundColor: "#F2F2F2", borderRadius: "100%"}}>
                    <Text style={{fontSize: "20em"}}>JB</Text>
                </View>
                <Text style={{fontSize:"20em"}}>János Béla</Text>
                <Text style={{fontSize:"35em", color: "black"}}>$0.00</Text>
            </View>
        </SafeAreaView>
    );
}
