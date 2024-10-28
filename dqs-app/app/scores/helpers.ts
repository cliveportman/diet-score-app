import {maxScores} from "@/app/scores/constants";
import {FoodCat} from "@/core/enums";
import {Servings} from "@/core/types";

type ScoresDisplay = {
    healthy: string | "---"; // Either "---" or "+n" where n is a number (+ sign)
    unhealthy: number | "---"; // Either "---" or n where n is a number (sign is part of the number)
    total: string | number | "---"; // Either "---" or "+n" where n is a number (+ sign) or n where n is a number (sign is part of the number)
    portions: string; // "n portions" where n is a number
}

export function getTotalScores(servings: Servings): ScoresDisplay {
    const healthyScore = getHealthyServingsScore(servings);
    const unhealthyScore = getUnhealthyServingsScore(servings);
    const portions = getNumberOfServings(servings);
    if (healthyScore === 0 && unhealthyScore === 0) return {
        healthy: "---",
        unhealthy: "---",
        total: "---",
        portions: "0 portions"
    };
    else return {
        healthy: '+' + healthyScore,
        unhealthy: unhealthyScore,
        total: (healthyScore + unhealthyScore > 0) ? '+' + (healthyScore + unhealthyScore) : healthyScore + unhealthyScore,
        portions: `${portions} portion${portions !== 1 ? 's' : ''}`
    };
}

export function getHealthyServingsScore(servings: Servings) {
    let total = 0;
    for (const cat in servings) {
        // Filter out the unhealthy stuff
        if (cat === 'id' || cat === 'date' || cat === FoodCat.refinedgrains || cat === FoodCat.sweets || cat === FoodCat.fattyproteins || cat === FoodCat.friedfoods  || cat === FoodCat.alcohol  || cat === FoodCat.other) continue;
        // Map the scores from SingleServingScores to numbers, then reduce them to a single number.
        total += maxScores[cat as FoodCat].map(score => Number(score)).reduce((acc, curr, i) => {
                return servings[cat as FoodCat] > i ? acc + curr : acc
            }, 0 // Don't forget the initial value!
        );
    }
    return total;
}

export function getUnhealthyServingsScore(servings: Servings) {
    let total = 0;
    for (const cat in servings) {
        // Filter out the healthy stuff
        if (cat === 'id' || cat === 'date' || cat === FoodCat.veg || cat === FoodCat.fruit || cat === FoodCat.nuts || cat === FoodCat.wholegrains  || cat === FoodCat.dairy  || cat === FoodCat.leanproteins || cat === FoodCat.beverages) continue;
        // Map the scores from SingleServingScores to numbers, then reduce them to a single number.
        total += maxScores[cat as FoodCat].map(score => Number(score)).reduce((acc, curr, i) => {
                return servings[cat as FoodCat] > i ? acc + curr : acc
            }, 0 // Don't forget the initial value!
        );
    }
    return total;
}

function getNumberOfServings(servings: Servings) {
    let total = 0;
    for (const cat in servings) {
        if (cat === 'id' || cat === 'date') continue;
        total += servings[cat as FoodCat];
    }
    return total;
}