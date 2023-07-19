const AppService = {
  formatGetQuery(req, res, next) {

    const { columns, first_name, last_name, age, address, phone_number, crops } = req.query;
    if (columns) {
      res.locals.columns = columns;
    } else res.locals.columns = '*';

    // where clauses
    res.locals.conditionals = " ";
    if (first_name) res.locals.conditionals += `first_name = '${first_name}' `;

    if (last_name) {
      let condition = `last_name = '${last_name}'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    if (age) {
      let condition = `age = '${age}'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    if (address) {
      let condition = `address = '${address}'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    if (phone_number) {
      let condition = `phone_number = '${phone_number}'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    if (crops) {
      let cropsArray = crops.split(',').map(crop => `"${crop.trim()}"`);
      let condition = cropsArray.length === 1
        ? `crops @> '[${cropsArray[0]}]'`
        : `crops @> '[${cropsArray.join(', ')}]'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    next();
  }
};

module.exports = AppService;