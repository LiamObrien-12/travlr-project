// const Trip = require('../models/travlr');

module.exports = {
    travel: async function(req, res) {
        try {
            // Define API endpoint and options
            const tripsEndpoint = 'http://localhost:3000/api/trips';
            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            };

            // Fetch data from API
            const response = await fetch(tripsEndpoint, options);
            
            // Check if response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // Parse JSON response
            const json = await response.json();
            
            // Validate response data
            if (!Array.isArray(json)) {
                return res.status(500).render('error', { message: 'Invalid data format received from API' });
            }
            
            if (json.length === 0) {
                return res.status(404).render('error', { message: 'No trips found in database' });
            }
            
            // Render the view with the data from API
            res.render('travel', { title: 'Travlr Getaways', trips: json });
            
        } catch (error) {
            console.error('Error fetching trips from API:', error);
            res.status(500).render('error', { message: 'Error fetching trips from API' });
        }
    }
};
