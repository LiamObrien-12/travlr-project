const mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');

// Read the trips data from JSON file
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Clear existing records and insert new ones
const seedDatabase = async () => {
    try {
        // Clear existing trips
        await Trip.deleteMany({});
        console.log('Cleared existing trips');
        
        // Insert new trips
        await Trip.insertMany(trips);
        console.log('Inserted new trips');
        
        // Close the database connection
        mongoose.connection.close();
        console.log('Database connection closed');
        
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

// Run the seed function
seedDatabase();
