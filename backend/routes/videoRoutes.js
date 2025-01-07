const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const Video = require('../models/Video');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();
// Multer setup
const storage = multer.diskStorage({});
const upload = multer({ storage });

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload video
router.post('/upload', upload.fields([{name: 'video'}, {name: 'thumbnail'}]), async (req, res) => {
    try {
        console.log('Request received at /upload');
        console.log('Request body:', req.body);
        //console.log('Uploaded file:', req.file);

        if (!req.files.video || !req.files.thumbnail) {
            return res.status(400).json({ error: 'Video and thumbnail image files required.' });
        }

        console.log('Uploading video to Cloudinary...');
        const videoUploadResult = await cloudinary.uploader.upload(req.files.video[0].path, { resource_type: 'video' });
        console.log('Cloudinary upload result:', videoUploadResult);

        console.log('Uploading thumbnail to cloudinary...')
        const thumbnailUploadResult = await cloudinary.uploader.upload(req.files.thumbnail[0].path, {resource_type: 'image'});
        console.log('Cloudinary upload result:', thumbnailUploadResult);

        console.log('Saving video details to MongoDB...');
        const { title, description, category } = req.body;

        const newVideo = new Video({
            title,
            description,
            category,
            url: videoUploadResult.secure_url,
            thumbnailUrl: thumbnailUploadResult.secure_url,
        });

        await newVideo.save();
        console.log('Video saved successfully:', newVideo);

        res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
    } catch (err) {
        console.error('Error during video upload:', err);
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});

// Get videos by category
router.get('/:category', async (req, res) => {
    try {
        const videos = await Video.find({ category: req.params.category });
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;