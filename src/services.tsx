import { pool } from './mysql-pool';
import type { RowDataPacket } from 'mysql2';

export type Score = {
    name: string,
    score: number
}

class GameService {
    getScores(): Promise<Score[]> {
        return new Promise<Score[]>((resolve, reject) => {
            pool.query(
                "SELECT * FROM Scores",
                (error, results: RowDataPacket[]) => {
                    if (error) reject(error);
                    resolve(results as Score[])
                }
            );
        });
    }

    updateScore(name: string, score: number): Promise<RowDataPacket[]> {
        return new Promise<RowDataPacket[]>((resolve, reject) => {
            pool.query(
                "UPDATE Scores SET score = ? WHERE name = ?",
                [score, name],
                (error, results: RowDataPacket[]) => {
                    if (error) reject(error);
                    resolve(results);
                }
            )
        });
    }

    resetScores(): Promise<RowDataPacket[]> {
        return new Promise<RowDataPacket[]>((resolve, reject) => {
            pool.query(
                "UPDATE Scores SET score = 0",
                (error, results: RowDataPacket[]) => {
                    if (error) reject(error);
                    resolve(results);
                }
            );
        });
    }
}

export const gameService = new GameService();
