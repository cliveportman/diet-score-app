import { Text} from "react-native";
import type { ClassNames } from "nativewind";

type TwContainerProps = {
    children?: React.ReactNode;
    twc?: string;
}

export function TwContainer({children, twc = ''}: TwContainerProps) {    
    return (
        <Text tw={twc}>{children}</Text>
    );
}