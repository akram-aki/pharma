import Router from "express";
import multer from "multer";

import {
  addUser,
  loginUser,
  getUserName,
  updateUser,
  deleteUser,
  addPhotoLink,
  addNewAccomodation,
  uploadPhoto,
  fetchPlaces,
} from "./controller.js";

const router = Router();

router.post("/register", addUser);

router.post("/login", loginUser);

router.post("/profile", getUserName);

router.post("/updateUser", updateUser);

router.post("/deleteUser", deleteUser);

router.get("/addPhotoLink", addPhotoLink);

const idk = multer({ dest: "C:/Users/aki/Desktop/air2/api/images/" });
router.post("/uploadPhoto", idk.array("photos", 100), uploadPhoto);

router.post("/userAccomodation", addNewAccomodation);

router.get("/fetchPlaces", fetchPlaces);

export default router;
