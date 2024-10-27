import database from "@/core/database";
import {PossibleSingleServingScores, Servings} from "@/core/types";
import {FoodCat} from "@/core/enums";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import {TwContainer} from "@/core/components/TwContainer"
import {TwText} from "@/core/components/TwText"
import {Score} from "@/app/scores/components/Score";

// Maximum possible scores for each food category, if a user eats the max number of servings (6).
const maxScores = {
    veg: [2, 2, 2, 1, 0, 0] as PossibleSingleServingScores,
    fruit: [2, 2, 2, 1, 0, 0] as PossibleSingleServingScores,
    nuts: [2, 2, 1, 0, 0, -1] as PossibleSingleServingScores,
    wholegrains: [2, 2, 1, 0, 0, -1] as PossibleSingleServingScores,
    dairy: [2, 1, 1, 0, -1, -2] as PossibleSingleServingScores,
    leanproteins: [2, 1, 1, 0, -1, -2] as PossibleSingleServingScores,
    beverages: [1, 1, 0, 0, 0, 0] as PossibleSingleServingScores,
    refinedgrains: [-1, -1, -2, -2, -2, -2] as PossibleSingleServingScores,
    sweets: [-2, -2, -2, -2, -2, -2] as PossibleSingleServingScores,
    fattyproteins: [-2, -2, -2, -2, -2, -2] as PossibleSingleServingScores,
    friedfoods: [-2, -2, -2, -2, -2, -2] as PossibleSingleServingScores,
    alcohol: [-2, -2, -2, -2, -2, -2] as PossibleSingleServingScores,
    other: [-1, -2, -2, -2, -2, -2] as PossibleSingleServingScores,
}

const defaultServings: Servings = {
    date: '2021-10-05',
    veg: 3,
    fruit: 4,
    nuts: 2,
    wholegrains: 4,
    dairy: 2,
    leanproteins: 1,
    beverages: 2,
    refinedgrains: 1,
    sweets: 0,
    fattyproteins: 0,
    friedfoods: 0,
    alcohol: 1,
    other: 0,
};

export default function App() {
    
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);
    
    const [scores, setScores] = useState<Servings[]>([]);
    useEffect(() => {
        if (db) {
            database.getAllServings(db).then((results) => setScores(results));
        }
    }, [db]);
    
    const [servings, setServings] = useState<Servings>(defaultServings);
    
    function handlePress(cat: FoodCat) {
        console.log('serving press:', cat);
        if (servings[cat] < 6) setServings(prevServings => ({
            ...prevServings,
            [cat]: prevServings[cat] < 6 ? prevServings[cat] + 1 : prevServings[cat]
        }));
    }

    function handleLongPress(cat: FoodCat) {
        console.log('serving longpress:', cat);
        if (servings[cat] > 0) setServings(prevServings => ({
            ...prevServings,
            [cat]: prevServings[cat] < 6 ? prevServings[cat] - 1 : prevServings[cat]
        }));
        
    }
        
    return (
        <TwContainer twc="flex-1 flex-col justify-center px-3 bg-slate-950">
            
            <TwContainer twc={"mb-3"}><TwText variant="title" twc={"text-center"}>Today</TwText></TwContainer>
            
            <Score servings={servings.veg} maxScores={maxScores.veg} text={"Vegetables"} cat={FoodCat.veg} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score  servings={servings.fruit} maxScores={maxScores.fruit} text={"Fruit"} cat={FoodCat.fruit} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.nuts} maxScores={maxScores.nuts} text={"Nuts + seeds"} cat={FoodCat.nuts} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.wholegrains} maxScores={maxScores.wholegrains} text={"Whole grains"} cat={FoodCat.wholegrains} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.dairy} maxScores={maxScores.dairy} text={"Dairy"} cat={FoodCat.dairy} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.leanproteins} maxScores={maxScores.leanproteins} text={"Lean meats"} cat={FoodCat.leanproteins} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.beverages} maxScores={maxScores.beverages} text={"Coffee + tea"} cat={FoodCat.beverages} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.refinedgrains} maxScores={maxScores.refinedgrains} text={"Refined grains"} cat={FoodCat.refinedgrains} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score  servings={servings.sweets} maxScores={maxScores.sweets} text={"Sweets"} cat={FoodCat.sweets} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.fattyproteins} maxScores={maxScores.fattyproteins} text={"Fatty meats"} cat={FoodCat.fattyproteins} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.friedfoods} maxScores={maxScores.friedfoods} text={"Fried foods"} cat={FoodCat.friedfoods} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.alcohol} maxScores={maxScores.alcohol} text={"Alcohol"} cat={FoodCat.alcohol} onPress={handlePress} onLongPress={handleLongPress} />
            
            <Score servings={servings.other} maxScores={maxScores.other} text={"Other"} cat={FoodCat.other} onPress={handlePress} onLongPress={handleLongPress} />   
      
            <TwContainer twc={"flex-row justify-between"}>
                <TwContainer twc={"w-1/4"}/>
                <TwContainer twc={"w-1/2 pt-3"}>
                    <TwText variant="title" twc={"text-center text-5xl mb-0"}>---</TwText>
                    <TwText variant="copy" twc={"text-center"}>(0 portions)</TwText>
                </TwContainer>
                <TwContainer twc={"w-1/4"}>
                    <TwText variant="subheading" twc={"text-right text-green-400 mb-0"}>---</TwText>
                    <TwText variant="subheading" twc={"text-right text-red-400"}>---</TwText>
                </TwContainer>
            </TwContainer>
            
        </TwContainer>
    );
}