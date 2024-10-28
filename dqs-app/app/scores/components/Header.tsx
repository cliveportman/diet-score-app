import { Pressable } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import TailwindColors from "tailwindcss/colors";

import {TwContainer} from "@/core/components/TwContainer";

type HeaderProps = {
}

export function Header({}: HeaderProps) {      
    
    function handleSettingsPress() {
        console.log("Settings pressed");
    }
    
    return (
        <TwContainer twc={"flex-row justify-start items-center h-16"}>
            <Pressable tw={`flex-row justify-start items-center w-16 h-16 pl-3` } onPress={handleSettingsPress}>
                <MaterialIcons name={"menu"} size={42} color={TailwindColors.slate[400]} />
            </Pressable>
            
        </TwContainer>
    );
}


