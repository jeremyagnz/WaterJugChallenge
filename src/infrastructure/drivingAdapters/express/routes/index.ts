import { Router } from 'express';
import WaterJugController from '../controllers/waterJugController';

const router = Router();

router.post('/challenge', WaterJugController);

export default router;