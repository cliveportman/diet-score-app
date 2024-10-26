import { TouchableOpacity } from "react-native";
import { FoodCat } from "@/core/enums";
import {ScoreServing} from "@/app/scores/components/ScoreServing";
import {ScoreLabel} from "@/app/scores/components/ScoreLabel";

export type max = -2 | -1 | 0 | 1 | 2;

type ScoreProps = {
    text: string;
    cat: FoodCat;
    servings: number;
    maxScores: [max, max, max, max, max, max];
    onPress: (cat: FoodCat) => void;
    onLongPress: (cat: FoodCat) => void;
    twc?: string;
}

export function Score({text, cat, servings, maxScores, onPress, onLongPress, twc = ''}: ScoreProps) {
    
    return (
        <TouchableOpacity tw={`w-full flex-row mb-1.5 ${twc}` } onPress={() => onPress(cat)} onLongPress={() => onLongPress(cat)}>
            <ScoreLabel text={text} />
            {maxScores.map((max, i) => <ScoreServing key={i} maxScore={max} serving={servings >= i ? 1 : 0} />)}
        </TouchableOpacity>
    );
}


