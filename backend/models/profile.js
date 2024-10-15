import Sequelize from 'sequelize';
const sequelize = new Sequelize('data_fetcher', 'admin', '12345', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

const Profile = sequelize.define('profile', {
    // ... our profile fields
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    about: {
        type: Sequelize.TEXT,
        
    },
    location: {
        type: Sequelize.STRING,
        
    },
    followerCount: {
        type: Sequelize.STRING,
        
    },
    connectionCount: {
        type: Sequelize.STRING,
        
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        onUpdate: Sequelize.NOW   
    
      }
});

export default Profile;