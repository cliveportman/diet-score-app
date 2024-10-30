import React from "react";
import { View } from "react-native";

type TwContainerProps = {
    children?: React.ReactNode;
    twc?: string;
}

export function TwContainer({children, twc = ''}: TwContainerProps) {    
    return (
        <View tw={twc}>{children}</View>
    );
}