import {Router} from 'express';
import users from './users';
import docs from './docs';
import groups from './groups';
import socket from './socket';

const router = Router();
router.use('/users', users)
router.use('/docs', docs)
router.use('/groups', groups)

export default router;
export const setupSocketIO = socket;
