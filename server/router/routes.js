const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");
const auth = require("../middleware/authDoc");
const Patient = require("../models/Patient");

router.get("/", (req, res) => {
  res.json({ message: "This is the api" });
});

// DOCTOR API --->

router.post("/register-as-doctor", async (req, res) => {
  const { name, phone, email, password, city, address, hospital, specials } =
    req.body;

  if (
    !name ||
    !phone ||
    !email ||
    !password ||
    !city ||
    !address ||
    !hospital ||
    !specials
  ) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }

  try {
    const userExist = await Doctor.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "user already exists." });
    }
    const user = new Doctor({
      name,
      phone,
      email,
      password,
      city,
      address,
      hospital,
      specials,
    });

    const registered = await user.save();

    res.status(201).json({ message: "Doctor Registered Successfully!" });
  } catch (e) {
    res.status(500).json({ message: `Could not create account! --> ${e}` });
  }
});

router.post("/login-as-doctor", async (req, res) => {
  try {
    const logEmail = req.body.email;
    const logPass = req.body.password;

    if (!logEmail || !logPass) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }

    const userEmail = await Doctor.findOne({ email: logEmail });
    const passCheck = await bcrypt.compare(logPass, userEmail.password);

    const token = await userEmail.generateAuthToken();

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60000000),
      httpOnly: true,
    });


    if (passCheck) {
      res.json({ message: "Logged In As Doctor Successfully!", token: token });
    } else {
      res.status(400).json({ message: "Invalid login credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid login credentials" });
  }
});


// PATIENT API --->

router.post("/register-as-patient", async (req, res) => {
  const { name, phone, email, password, city, address, username } = req.body;

  if (
    !name ||
    !phone ||
    !email ||
    !password ||
    !city ||
    !address ||
    !username
  ) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }

  try {
    const userExist =
      (await Patient.findOne({ email: email })) ||
      (await Doctor.findOne({ email: email }));

    if (userExist) {
      return res.status(422).json({ error: "user already exists." });
    }
    const user = new Patient({
      name,
      phone,
      email,
      password,
      city,
      address,
      username,
    });

    const registered = await user.save();

    res.status(201).json({ message: "Patient Registered Successfully!" });
  } catch (e) {
    res.status(500).json({ message: `Could not create account! --> ${e}` });
  }
});


router.post("/login-as-patient", async (req, res) => {
    try {
      const logEmail = req.body.email;
      const logPass = req.body.password;
  
      if (!logEmail || !logPass) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const userEmail = await Patient.findOne({ email: logEmail });
      const passCheck = await bcrypt.compare(logPass, userEmail.password);
  
      const token = await userEmail.generateAuthToken();
  
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000000),
        httpOnly: true,
      });
  
  
      if (passCheck) {
        res.json({ message: "Logged In As Patient Successfully!", token: token });
      } else {
        res.status(400).json({ message: "Invalid login credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Invalid login credentials" });
    }
  });

module.exports = router;
