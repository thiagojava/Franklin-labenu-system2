import { Request, Response } from "express";
import connection from "../conection";

export default async function searchStudentByName(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const activeClassrooms = await connection("lbn_system_student");
        res.send(activeClassrooms);
    } catch (error: any) {
        if (res.statusCode === 200) {
            console.log(error);
            res.status(500).send({ message: "Internal server error" });
        } else {
            console.log(error);
            res.send({ message: error.message });
        }
    }
}