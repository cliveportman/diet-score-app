import { FoodCat } from "@/core/enums";
import {DateString, Servings} from "@/core/types";

import {SQLiteDatabase} from "expo-sqlite";
import {TwContainer} from "@/core/components/TwContainer";
import {TwText} from "@/core/components/TwText";
import {Score} from "@/app/(app)/scores/components/Score";
import {defaultServings, maxScores} from "@/core/constants";
import { useEffect, useMemo, useState} from "react";
import database from "@/core/database";
import {format} from "date-fns";
import {View} from "react-native";
import {foodCatToText, shortToast} from "@/core/helpers";
import { getTotalScores } from "@/core/helpers";

type DayProps = {
    db: SQLiteDatabase;
    date: Date;
    width: number;
}

export function Day({db, date, width}: DayProps) {
    
    /**
     * Fetch servings for the current date from the database.
     * And if there are no servings for the current date, insert them.
     */
    const [servings, setServings] = useState<Servings>(defaultServings);
    useEffect(() => {
        const dateStr = date.toISOString().split('T')[0] as DateString;
        database.getServingsByDate(db, dateStr).then(async (results) => {
            if (results) setServings(results);
            else {
                const id = await database.insertServings(db, {...defaultServings, date: dateStr});
                if (!id) return; // Could be null if the insert failed, e.g. it'sa duplicate.
                const newServings = {...defaultServings, date: dateStr, id: id};
                setServings(newServings);
            }
        });
    }, [db, date]);

    /**
     * Press handler - increments the number of servings for a food category.
     * @param cat
     */
    async function handlePress(cat: FoodCat) {
        if (db && servings.id && servings[cat] < 6) {
            const result = await database.updateServingsCategory(db, servings.id, cat, servings[cat] + 1);
            setServings(result);
            shortToast(`+1 serving of ${foodCatToText(cat).toLowerCase()}`);
        }
    };

    /**
     * Long press handler - decrements the number of servings for a food category.
     * @param cat
     */
    async function handleLongPress (cat: FoodCat){
        if (db && servings.id && servings[cat] > 0) {
            const result = await database.updateServingsCategory(db, servings.id, cat, servings[cat] - 1);
            setServings(result);
            shortToast(`-1 serving of ${foodCatToText(cat).toLowerCase()}`);
        }
    };

    const totals = useMemo(() => getTotalScores(servings), [servings]);
    
    return (
        <View tw={`flex-col justify-center px-3`} style={{ width: width }}>

            <TwContainer twc={"mb-3"}><TwText variant="title" twc={"text-center"}>{format(date, 'EEE dd MMM')}</TwText></TwContainer>

            <Score servings={servings.veg} maxScores={maxScores.veg} text={foodCatToText(FoodCat.veg)} cat={FoodCat.veg} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.fruit} maxScores={maxScores.fruit} text={foodCatToText(FoodCat.fruit)} cat={FoodCat.fruit} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.nuts} maxScores={maxScores.nuts} text={foodCatToText(FoodCat.nuts)} cat={FoodCat.nuts} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.wholegrains} maxScores={maxScores.wholegrains} text={foodCatToText(FoodCat.wholegrains)} cat={FoodCat.wholegrains} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.dairy} maxScores={maxScores.dairy} text={foodCatToText(FoodCat.dairy)} cat={FoodCat.dairy} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.leanproteins} maxScores={maxScores.leanproteins} text={foodCatToText(FoodCat.leanproteins)} cat={FoodCat.leanproteins} onPress={handlePress} onLongPress={handleLongPress} />
            {/*<Score servings={servings.beverages} maxScores={maxScores.beverages} text={foodCatToText(FoodCat.beverages)} cat={FoodCat.beverages} onPress={handlePress} onLongPress={handleLongPress} />*/}
            <Score servings={servings.refinedgrains} maxScores={maxScores.refinedgrains} text={foodCatToText(FoodCat.refinedgrains)} cat={FoodCat.refinedgrains} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.sweets} maxScores={maxScores.sweets} text={foodCatToText(FoodCat.sweets)} cat={FoodCat.sweets} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.fattyproteins} maxScores={maxScores.fattyproteins} text={foodCatToText(FoodCat.fattyproteins)} cat={FoodCat.fattyproteins} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.friedfoods} maxScores={maxScores.friedfoods} text={foodCatToText(FoodCat.friedfoods)} cat={FoodCat.friedfoods} onPress={handlePress} onLongPress={handleLongPress} />
            <Score servings={servings.alcohol} maxScores={maxScores.alcohol} text={foodCatToText(FoodCat.alcohol)} cat={FoodCat.alcohol} onPress={handlePress} onLongPress={handleLongPress} />
            {/*<Score servings={servings.other} maxScores={maxScores.other} text={foodCatToText(FoodCat.other)} cat={FoodCat.other} onPress={handlePress} onLongPress={handleLongPress} />*/}

            <TwContainer twc={"flex-row justify-between px-1.5"}>
                <TwContainer twc={"w-1/4"}/>
                <TwContainer twc={"w-1/2 pt-3"}>
                    <TwText variant="title" twc={"text-center text-5xl mb-0"}>{totals.total}</TwText>
                    <TwText variant="copy" twc={"text-center"}>{totals.portions}</TwText>
                </TwContainer>
                <TwContainer twc={"w-1/4"}>
                    <TwText variant="subheading" twc={"text-right text-green-400 mb-0"}>{totals.healthy}</TwText>
                    <TwText variant="subheading" twc={"text-right text-red-400"}>{totals.unhealthy}</TwText>
                </TwContainer>
            </TwContainer>

        </View>
    );
}


