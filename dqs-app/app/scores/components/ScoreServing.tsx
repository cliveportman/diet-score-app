import { Text, View } from "react-native";

type ScoreServingProps = {
    serving: 0 | 0.5 | 1;
    maxScore: -2 | -1 | 0 | 1 | 2;
    twc?: string;
}

export function ScoreServing({serving, maxScore, twc = ''}: ScoreServingProps) {
    
    let bg: string;
    switch (maxScore) {
        case -2:
            bg = 'bg-red-400';
            break;
        case -1:
            bg = 'bg-orange-400';
            break;
        case 0:
            bg = 'bg-yellow-400';
            break;
        case 1:
            bg = 'bg-lime-400';
            break;
        case 2:
            bg = 'bg-green-400';
            break;
    }
    
    return (
        <View tw={`h-10 w-10 flex-col justify-center align-center ml-1 rounded-xs ${bg} shadow-sm ${twc} ${!serving ? 'opacity-50' : ''}`}>{serving > 0 && (<Text tw={`font-bold text-center text-xl text-slate-900 ${twc}`}>{serving * maxScore > 0 ? '+' : ''}{serving * maxScore}</Text>)}</View>
    );
}