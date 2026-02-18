import { Platform } from "react-native";

let db: any = null;

if (Platform.OS !== "web") {
  const SQLite = require("expo-sqlite");
  db = SQLite.openDatabase("flossy.db");
}

export { db };

export function init() {
  if (!db) return;

  db.transaction((tx: any) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS profile (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT,
        goal TEXT,
        frequency TEXT,
        chronotype TEXT,
        onboarded INTEGER
      );
    `);
  });
}

export function saveProfile(profile: {
  name: string;
  goal: string;
  frequency: string;
  chronotype: string;
}) {
  if (!db) return;

  db.transaction((tx: any) => {
    tx.executeSql(
      `
      INSERT OR REPLACE INTO profile
      (id, name, goal, frequency, chronotype, onboarded)
      VALUES (1, ?, ?, ?, ?, 1);
      `,
      [
        profile.name,
        profile.goal,
        profile.frequency,
        profile.chronotype,
      ]
    );
  });
}

export function getProfile(
  callback: (profile: any | null) => void
) {
  if (!db) {
    callback(null);
    return;
  }

  db.transaction((tx: any) => {
    tx.executeSql(
      `SELECT * FROM profile WHERE id = 1;`,
      [],
      (_: any, result: any) => {
        if (result.rows.length > 0) {
          callback(result.rows.item(0));
        } else {
          callback(null);
        }
      }
    );
  });
}
