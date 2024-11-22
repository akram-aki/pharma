import Router from "express";
import multer from "multer";

import {
  addUser,
  loginUser,
  getUserName,
  updateUser,
  deleteUser,
  addPhotoLink,
  addPatient,
  uploadPhoto,
  fetchPatients,
} from "./controller.js";

const router = Router();

router.post("/register", addUser);

router.post("/login", loginUser);

router.post("/profile", getUserName);

router.post("/updateUser", updateUser);

router.post("/deleteUser", deleteUser);

router.get("/addPhotoLink", addPhotoLink);

const idk = multer({ dest: "C:/Users/songo/Desktop/hadjer/api/Images" });
router.post("/uploadPhoto", idk.array("photos", 100), uploadPhoto);

router.post("/addPatient", addPatient);

router.get("/fetchPatients", fetchPatients);

export default router;
