const UserProfile = require('../models/userProfile');
const User = require('../models/User');


// Create or update user profile
exports.createOrUpdateProfile = async (req, res) => {
    const { 
      occupation, 
      stressFrequency, 
      previousTechniques, 
      usesDeadlines, 
      availableTime, 
      preferredTechniques 
    } = req.body;
  
    try {
      // Find existing profile or create new one
      let userProfile = await UserProfile.findOne({ userId: req.user.id });
      
      if (userProfile) {
        // Update existing profile
        userProfile.occupation = occupation || userProfile.occupation;
        userProfile.stressFrequency = stressFrequency || userProfile.stressFrequency;
        userProfile.previousTechniques = previousTechniques || userProfile.previousTechniques;
        userProfile.usesDeadlines = usesDeadlines !== undefined ? usesDeadlines : userProfile.usesDeadlines;
        userProfile.availableTime = availableTime || userProfile.availableTime;
        userProfile.preferredTechniques = preferredTechniques || userProfile.preferredTechniques;
      } else {
        // Create new profile
        userProfile = new UserProfile({
          userId: req.user.id,
          occupation,
          stressFrequency,
          previousTechniques,
          usesDeadlines,
          availableTime,
          preferredTechniques
        });
      }
  
      await userProfile.save();
      res.status(200).json({ msg: 'Profile updated successfully', userProfile });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Get user profile
  exports.getProfile = async (req, res) => {
    try {
      const userProfile = await UserProfile.findOne({ userId: req.user.id });
      
      if (!userProfile) {
        return res.status(404).json({ msg: 'Profile not found' });
      }
      
      res.json(userProfile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Get profile completion status
  exports.getProfileStatus = async (req, res) => {
    try {
      const userProfile = await UserProfile.findOne({ userId: req.user.id });
      
      if (!userProfile) {
        return res.json({ profileCompleted: false });
      }
      
      // Check if all necessary fields are filled
      const isComplete = 
        userProfile.occupation && 
        userProfile.stressFrequency && 
        userProfile.availableTime &&
        (userProfile.preferredTechniques && userProfile.preferredTechniques.length > 0);
      
      res.json({ profileCompleted: isComplete });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };