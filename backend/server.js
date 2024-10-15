import express from 'express';
import sequelize from './models/profile.js';
import cors from 'cors';
import Profile from './models/profile.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

async function createProfile(profileData) {
    try {
      const newProfile = await Profile.create(profileData);
      console.log('Profile created successfully:', newProfile);
      return newProfile;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }

// API endpoint to create a new profile
app.post('/api/profiles/', async (req, res) => {
    try {
        const profileData = req.body;
        console.log("server's post is working the value of profileData is: ",profileData);
        // const newProfile = await sequelize.models.Profile.create(profileData);
        let newProfile =  await createProfile(profileData);
    //    console.log('the value of the a is: ',a);
        if(newProfile){
            res.json('Data are fetched successfully. Check your DB');
        }
        
        // console.log('value of new Prifile',newProfile);
        // res.json(newProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create profile' });
    }
});



app.get('/',()=>{
    console.log('welcome to the server')
})

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});