import { Router } from 'express'
import {
  addMember,
  addModeratorToSquad,
  approveMember,
  createSquad,
  deleteModerator,
  deleteSquad,
  getAllModerators,
  getAllSquads,
  leaveSquad,
  removeMember,
  requestToJoinSquad,
  updateModeratorRole,
  updateSquad,
} from '../../controllers/squad.Controller.js'
import { userAuth } from '../../middleware/userAuth.js'

const router = Router()

router.post('/create', userAuth, createSquad)
router.put('/join/request/:id', userAuth, requestToJoinSquad)
router.put('/leave/:id', userAuth, leaveSquad)
router.put('/update/:id', userAuth, updateSquad)
router.delete('/delete/:id', userAuth, deleteSquad)
router.get('/all', userAuth, getAllSquads)
router.put('/members/add/:id', userAuth, addMember)
router.put('/members/approve/:id', userAuth, approveMember)
router.delete('/members/delete/:id', userAuth, removeMember)
//Moderator routes
router.put('/moderator/add', userAuth, addModeratorToSquad)
router.put('/moderator/update', userAuth, updateModeratorRole)
router.get('/moderator/all', userAuth, getAllModerators)
router.put('/moderator/delete', userAuth, deleteModerator)
export default router
