import { Link } from "@react-navigation/native";
import {Text, View} from "react-native";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import {SafeAreaView} from "react-native-safe-area-context";
import { A } from '@expo/html-elements';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function About () {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: 15,
                gap: 10
            }}
        >
            <Text style={{fontSize: 30, fontWeight: "bold"}}>About</Text>
            <View style={{borderStartWidth: 3, borderStartColor: "black",}}>
                <Text style={{fontSize: 20, fontWeight: "bold", padding: 10}}>This app was made by 2 highschool students, who had enough of remembering debts.</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: "bold", backgroundColor: "black", padding: 20, width:"100%", borderRadius: 15, color: "white", overflow: 'hidden'}}>Debtzap allows you to track your debts and write down others'.</Text>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>You can find us on GitHub.</Text>
            <A style={{fontSize: 20, backgroundColor: "gray", color: "white", padding: 5, borderRadius: 5, overflow: "hidden"}} href="https://github.com/barnagoz"><AntDesign name="github" size={24} color="white" /> Barnabás Gőz</A>
            <A style={{fontSize: 20, backgroundColor: "gray", color: "white", padding: 5, borderRadius: 5, overflow: "hidden"}} href="https://github.com/abelanagy"><AntDesign name="github" size={24} color="white" /> Ábel Nagy</A>
            <Text style={{position: "absolute", bottom: 20, fontSize: 20, alignSelf: "center"}}>Thanks for using our application!</Text>
        </SafeAreaView>
    );
}