import { Router } from "express";
const router=Router()
router.post("/payment", (req, res) => {
  console.log(req.body)


})
 export default router;