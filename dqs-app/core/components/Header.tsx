import { Pressable } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import {MaterialIcons} from "@expo/vector-icons";
import TailwindColors from "tailwindcss/colors";

import {TwContainer} from "@/core/components/TwContainer";

export function Header() {

    const navigation = useNavigation();    
    function handleMenuPress() {
        console.log("Settings pressed");
        navigation.dispatch(DrawerActions.openDrawer());
    }
    
    return (
        <TwContainer twc={"flex-row justify-start items-center h-16 bg-slate-950"}>
            <Pressable tw={`flex-row justify-start items-center w-16 h-16 pl-3` } onPress={handleMenuPress}>
                <MaterialIcons name={"menu"} size={42} color={TailwindColors.slate[400]} />
            </Pressable>            
        </TwContainer>
    );
}


