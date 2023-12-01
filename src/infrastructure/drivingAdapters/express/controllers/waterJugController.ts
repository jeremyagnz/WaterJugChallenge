import { Request, Response } from "express";
import WaterJugUseCase from "../../../../features/waterJug/application/useCase/waterJugUseCase";
import { InvalidKeysException } from "../../../../features/waterJug/domain/exceptions/InvalidKeysException";

const WaterJugController = async (req: Request, res: Response) => {
    try {
        const { x, y, z } = req.body;

        if (!x || !y || !z) {
            throw new InvalidKeysException();
        }

        const waterJug = new WaterJugUseCase();
        const result = waterJug.execute(x, y, z);

        return res.status(200).json(result);

    } catch (error) {
        if (error instanceof InvalidKeysException) {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export default WaterJugController;