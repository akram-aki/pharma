import pool from "../db.js";
import { queries } from "./queries.js";
import jwt from "jsonwebtoken";
import axios from "axios";
import download from "image-downloader";
import { fileURLToPath } from "url";
import Path from "path";
import fs from "fs";
import { response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
const jwtSecret = "ASDADasldfakd&%*w12240810234598as%^kfdnjasf02as";
const cache = new Map();

const addUser = (req, res) => {
  const { email, username, password } = req.body;
  const values = [username, email, password];

  pool.query(queries.dupEmailCheck, [email], (error, results) => {
    if (error) {
      res.status(500).json({ msg: "an error occured, try again later" });
      throw error;
    }
    if (results.rows.length > 0)
      return res.json({ msg: "email already taken" });
    else {
      pool.query(queries.addUserQuery, values, (error, results) => {
        if (error) {
          res.status(500).json({ msg: "an error occured, try again later" });
          throw error;
        }
        res.status(200).json({ msg: "success" });
      });
    }
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  pool.query(queries.dupEmailCheck, [email], (error, results) => {
    if (error) {
      res.status(500).json({ msg: "an error occured, try again later" });
      throw error;
    }
    if (results.rows.length > 0) {
      const user = results.rows[0];

      if (password === user.password) {
        user.password = null;
        jwt.sign(
          { email: user.email, id: user.id, name: user.name },
          jwtSecret,
          {},
          (err, token) => {
            if (err) res.status(500).json("failed to generate token");

            return res.json(token);
          }
        );
      }
    } else res.status(500).json({ msg: "wrong credentials" });
  });
};

const getUserName = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;

      res.json({ name: userData.name, id: userData.id });
    });
  }
};

const updateUser = async (req, res) => {
  const { newUserName, newPassword, id } = req.body;

  const getNewToken = (email, password) => {
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((response) => res.status(200).json(response.data))
      .catch((error) => {
        console.error("Error making post request:", error);
      });
  };

  try {
    let query, values;
    if (newUserName && !newPassword) {
      query = queries.updateNameQuery;
      values = [newUserName, id];
    } else if (!newUserName && newPassword) {
      query = queries.updatePasswordQuery;
      values = [newPassword, id];
    } else if (newUserName && newPassword) {
      query = queries.updateNameAndPassQuery;
      values = [newUserName, newPassword, id];
    }

    await pool.query(query, values, (err, results) => {
      if (err) {
        res.status(500).json("failed to change settings");
        throw err;
      }
      const { email, password } = results.rows[0];
      getNewToken(email, password);
    });
  } catch {
    res.status(500).json("invalid settings");
    throw err;
  }
};

const deleteUser = (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM users WHERE ID=$1";

  pool.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json("failed to delete user");
      throw err;
    }
  });
  res.status(200).json("success");
};

const addPhotoLink = async (req, res) => {
  const { id, photoLink } = req.query;
  const dir = Path.join(Path.dirname(__dirname), "images");
  const newName = id + "000" + Date.now() + ".jpg";

  if (photoLink.slice(0, 4) === "blob") {
    //dosnt work yet :c
    try {
      const r = await axios.get(photoLink, { responseType: "arraybuffer" });
      console.log(r);

      // fs.copyFile(photoLink, dir + "/" + newName, {
      // done: function (err) {
      // console.log("done");
      // },
      // });
    } catch (e) {
      console.log("didnt work");
    }
  } else {
    const options = {
      url: photoLink,
      dest: dir + "/" + newName,
    };
    download
      .image(options)

      .catch((err) => console.error("workent"));
  }
  res.json(newName);
};

const addNewAccomodation = (req, res) => {
  const {
    id,
    title,
    adress,
    addedPhotos,
    Description,
    perks,
    extraInfo,
    chekIn,
    maxGuests,
  } = req.body;

  const VALUES = [
    id,
    title,
    adress,
    addedPhotos,
    Description,
    perks,
    extraInfo,
    chekIn,
    maxGuests,
  ];
  pool.query(queries.addUserAccomodationQuery, VALUES, (error, results) => {
    if (error) return console.log(error);
    return res.json("success!");
  });
};

const uploadPhoto = (req, res) => {
  const uploadedPhotos = [];
  const { id } = req.body;

  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];

    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath =
      path.replace(Path.basename(path), id + "000" + Date.now()) + "." + ext;
    fs.renameSync(path, newPath);

    uploadedPhotos.push(Path.basename(newPath));
  }
  res.json(uploadedPhotos);
};

const fetchPlaces = (req, res) => {
  const query = "SELECT * FROM useraccomodations";
  pool.query(query, (error, result) => {
    if (error) res.status(500).json("didnt work");
    else {
      res.status(200).json(result.rows);
    }
  });
};

export {
  addUser,
  loginUser,
  getUserName,
  updateUser,
  deleteUser,
  addPhotoLink,
  addNewAccomodation,
  uploadPhoto,
  fetchPlaces,
};
