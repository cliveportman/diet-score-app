import { Text, TouchableOpacity, View } from "react-native";


type TwButtonProps = {
    title: string;    
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'soft';
    twc?: string;
}

export function TwButton({title, onPress, variant = 'primary', twc = ''}: TwButtonProps) {
    let bg, txt: string;
    switch (variant) {
        case 'primary':
            bg = 'bg-slate-600';
            txt = 'text-white';
            break;
        case 'secondary':
            bg = 'bg-white border border-slate-300';
            txt = 'text-slate-900';
            break;
        case 'soft':
            bg = 'bg-slate-100';
            txt = 'text-slate-600';
            break;
    }
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View tw={`rounded-md px-5 py-2 text-sm shadow-sm ${bg} ${twc}`}>
                <Text tw={`font-semibold ${txt}`}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}