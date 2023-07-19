const PoolConnector = require('../services/connector.service');
const { createFarmerValidator } = require('../services/validators.service');
const { createFarmerQuery, getFarmerQuery } = require('../services/queries.service');

const FarmerController = {
  create: async (req, res) => {
    try {
      const { error, value } = createFarmerValidator.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message, status: 'SUCCESS' })

      PoolConnector.query(
        createFarmerQuery,
        [value.first_name, value.last_name, value.age, value.address, value.phone_number, JSON.stringify(value.crops)],
        async (dbError, results) => {
          if (dbError) {
            console.error('Database Error:', dbError.message);
            return res.status(500).json({ message: dbError.message });
          }
          res.status(200).json({ message: "Successfully added farmer", data: results.rows[0], status: 'SUCCESS' });
        });
    } catch (error) {
      console.error('Unexpected Error:', error);
      res.status(500).json({ message: 'An unexpected error occurred', status: 'FAILURE' });
    }
  },

  getFarmer: async (req, res) => {
    try {
      PoolConnector.query(getFarmerQuery(res.locals.columns, res.locals.conditionals), async (dbError, results) => {
        if (dbError) {
          console.error('Database Error:', dbError.message);
          return res.status(500).json({ message: dbError.message });
        }
        res.status(200).json({ message: "Successfully fetched farmer's data", data: results.rows, status: 'SUCCESS' });
      });
    } catch (error) {
      console.error('Unexpected Error:', error);
      res.status(500).json({ message: 'An unexpected error occurred', status: 'FAILURE' });
    }
  }
};

module.exports = FarmerController;