export type Servings = {
    date: string;
    veg: number;
    fruit: number;
    nuts: number;
    wholegrains: number;
    dairy: number;
    leanproteins: number;
    beverages: number;
    refinedgrains: number;
    sweets: number;
    fattyproteins: number;
    friedfoods: number;
    alcohol: number;
    other: number;
}

export type SingleServingScore = -2 | -1 | 0 | 1 | 2;
export type PossibleSingleServingScores = [SingleServingScore, SingleServingScore, SingleServingScore, SingleServingScore, SingleServingScore, SingleServingScore];