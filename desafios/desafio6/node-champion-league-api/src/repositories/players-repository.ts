import fs from "fs/promises";
import path from "path";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { Charset } from "../utils/charset-enum";
import { Database } from "../utils/database-enums";

const DATA_BASE = path.join(__dirname, Database.PLAYERS);

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const database = await fs.readFile(DATA_BASE, Charset.UTF8);
  const players = JSON.parse(database);
  return players;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const database = await fs.readFile(DATA_BASE, Charset.UTF8);
  const players = JSON.parse(database);
  return players.find((player: PlayerModel) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  const database = await fs.readFile(DATA_BASE, Charset.UTF8);
  const players = JSON.parse(database);
  players.push(player);
  await fs.writeFile(DATA_BASE, JSON.stringify(players, null, 2));
};

export const deleteOnePlayer = async (id: number) => {
  const database = await fs.readFile(DATA_BASE, Charset.UTF8);
  const players = JSON.parse(database);
  const index = players.findIndex((p: PlayerModel) => p.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    await fs.writeFile(DATA_BASE, JSON.stringify(players, null, 2));
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel | undefined> => {
  const database = await fs.readFile(DATA_BASE, Charset.UTF8);
  const players = JSON.parse(database);
  const playerIndex = players.findIndex((player: PlayerModel) => player.id === id);

  if (playerIndex !== -1) {
    players[playerIndex].statistics = statistics;
    await fs.writeFile(DATA_BASE, JSON.stringify(players, null, 2));
    return players[playerIndex];
  }

  return undefined;
};
