import * as SQLite from "expo-sqlite";
import {SQLiteDatabase} from "expo-sqlite";
import type { Servings } from "@/core/types";
import databaseMigrations from "@/core/database-migrations";

const DATABASE_VERSION = 3;

export default {
    openDatabase,
    getAllServings,
    insertServings,
    updateServings,
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
            `create table if not exists servings (id integer primary key not null, date TEXT, veg int, fruit int, nuts int, wholegrains int, dairy int, leanproteins int, beverages int, refinedgrains int, sweets int, fattyproteins int, friedfoods int, other int );`
        );
    });
    return db;
}

async function getAllServings(db: SQLiteDatabase): Promise<Servings[]> {
    const results: Servings[] = await db.getAllAsync(`select * from servings;`)
    console.log(`${results.length} Servings records (days) found`);
    console.log(results);
    return results;
}

async function insertServings(db: SQLiteDatabase, servings: Servings) {
    await db.runAsync(
        `insert into servings (date, veg, fruit, nuts, wholegrains, dairy, leanproteins, beverages, refinedgrains, sweets, fattyproteins, friedfoods, other) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [servings.date, servings.veg, servings.fruit, servings.nuts, servings.wholegrains, servings.dairy, servings.leanproteins, servings.beverages, servings.refinedgrains, servings.sweets, servings.fattyproteins, servings.friedfoods, servings.other]
    );
    console.log(`Servings added`);
}

async function updateServings(db: SQLiteDatabase, id: number, servings: Servings) {
    await db.runAsync(
        `update servings set date=?, veg=?, fruit=?, nuts=?, wholegrains=?, dairy=?, leanproteins=?, beverages=?, refinedgrains=?, sweets=?, fattyproteins=?, friedfoods=?, other=? where id=${id}`,
        [servings.date, servings.veg, servings.fruit, servings.nuts, servings.wholegrains, servings.dairy, servings.leanproteins, servings.beverages, servings.refinedgrains, servings.sweets, servings.fattyproteins, servings.friedfoods, servings.other]
    );
    console.log(`Servings updated`);
}

