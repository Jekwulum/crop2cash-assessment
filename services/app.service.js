const AppService = {
  formatGetQuery(req, res, next) {
    const { columns, first_name, last_name, age, address, phone_number, crops } = req.query;
    res.locals.columns = columns ? columns : '*';

    const conditions = [];

    if (first_name) conditions.push(`first_name = '${first_name}'`);
    if (last_name) conditions.push(`last_name = '${last_name}'`);
    if (age) conditions.push(`age = '${age}'`);
    if (address) conditions.push(`address = '${address}'`);
    if (phone_number) conditions.push(`phone_number = '${phone_number}'`);

    if (crops) {
      const cropsArray = crops.split(',').map(crop => `"${crop.trim()}"`);
      const condition = cropsArray.length === 1
        ? `crops @> '[${cropsArray[0]}]'`
        : `crops @> '[${cropsArray.join(', ')}]'`;
      conditions.push(condition);
    }

    res.locals.conditionals = conditions.length > 0 ? conditions.join(' AND ') : ' ';

    next();
  }
};

module.exports = AppService;
