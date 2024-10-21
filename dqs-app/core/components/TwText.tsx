import { Text} from "react-native";

type TwTextProps = {
    children?: React.ReactNode;
    variant?: 'title' | 'heading' | 'subheading' | 'copy';
    twc?: string;
}

export function TwText({children, variant = 'copy', twc = ''}: TwTextProps) {
    let txt: string;
    switch (variant) {
        case 'title':
            txt = 'mt-1.5 text-2xl font-bold tracking-tight text-slate-900';
            break;
        case 'heading':
            txt = 'mt-1.5 text-lg font-bold tracking-tight text-slate-900';
            break;
        case 'subheading':
            txt = 'mt-1.5 text-base font-bold tracking-tight text-slate-900';
            break;
        default: // copy
            txt = 'mt-1.5 text-base font-regular tracking-tight text-slate-900';
    }
    
    return (
        <Text tw={`text-left ${txt}`}>{children}</Text>
    );
}