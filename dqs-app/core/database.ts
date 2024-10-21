import * as SQLite from "expo-sqlite";
import {SQLiteDatabase} from "expo-sqlite";
import type { Score } from "@/core/types";
import databaseMigrations from "@/core/database-migrations";

const DATABASE_VERSION = 2;

export default {
    openDatabase,
    getAllScores,
    insertScore,
    updateScore,
}

function openDatabase() {
    console.log("Opening database");
    const db = SQLite.openDatabaseSync("db.db");
    db.withTransactionSync(async () => {
        // @ts-expect-error
        const versionResult: [{ user_version: number; }] = await db.getAllAsync("PRAGMA user_version");
        const currentVersion = versionResult[0]["user_version"] ?? 0;
        if (currentVersion < DATABASE_VERSION) {
            console.log(`Migrating database from version ${currentVersion} to version ${DATABASE_VERSION}`);
            databaseMigrations(db, currentVersion, DATABASE_VERSION);
        }
    });
    db.withTransactionSync(() => {
        db.runSync(
            `create table if not exists scores (id integer primary key not null, date TEXT, veg int, fruit int, nuts int, wholegrains int, dairy int, leanproteins int, beverages int, refinedgrains int, sweets int, fattyproteins int, friedfoods int, other int );`
        );
    });
    return db;
}

async function getAllScores(db: SQLiteDatabase): Promise<Score[]> {
    const results: Score[] = await db.getAllAsync(`select * from scores;`)
    console.log(`${results.length} records`);
    console.log(results);
    return results;
}

async function insertScore(db: SQLiteDatabase, score: Score) {
    await db.runAsync(
        `insert into scores (date, veg, fruit, nuts, wholegrains, dairy, leanproteins, beverages, refinedgrains, sweets, fattyproteins, friedfoods, other) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [score.date, score.veg, score.fruit, score.nuts, score.wholegrains, score.dairy, score.leanproteins, score.beverages, score.refinedgrains, score.sweets, score.fattyproteins, score.friedfoods, score.other]
    );
    console.log(`Record added`);
}

async function updateScore(db: SQLiteDatabase, id: number, score: Score) {
    await db.runAsync(
        `update scores set date=?, veg=?, fruit=?, nuts=?, wholegrains=?, dairy=?, leanproteins=?, beverages=?, refinedgrains=?, sweets=?, fattyproteins=?, friedfoods=?, other=? where id=${id}`,
        [score.date, score.veg, score.fruit, score.nuts, score.wholegrains, score.dairy, score.leanproteins, score.beverages, score.refinedgrains, score.sweets, score.fattyproteins, score.friedfoods, score.other]
    );
    console.log(`Record updated`);
}

