const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//admin register
router.post('/admin_sigup', async(req,res)=>{
    const { name, email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (admin) return res.status(400).json({ msg: 'admin already exists' });
  
      admin = new Admin({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
  
      await admin.save();
  
      const payload = { admin: { id: admin.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(201).json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
});

//admin login
router.post('/admin_login', async(req,res)=>{
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { admin: { id: admin.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

