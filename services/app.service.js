const AppService = {
  formatGetQuery(req, res, next) {
    console.log(req.query);
    res.locals.conditionals = " ";
    const { columns, first_name, last_name, age, address, phone_number, crops } = req.query;
    if (columns) {
      res.locals.columns = columns;
    }
    if (first_name) res.locals.conditionals += `first_name = '${first_name}' `;

    if (last_name) {
      let condition = `last_name = '${last_name}'`;
      res.locals.conditionals === " " ? res.locals.conditionals += ` ${condition}` : res.locals.conditionals += ` AND ${condition}`;
    }

    // if (age) {
    //   let condition = `age = ${age}`;
    //   res.locals.conditionals === " " ? res.locals.conditionals += ` AND ${condition}` : res.locals.conditionals += ` ${condition}`;
    // }
    
    // if (address) {
    //   let condition = `address = ${address}`;
    //   res.locals.conditionals === " " ? res.locals.conditionals += ` AND ${condition}` : res.locals.conditionals += ` ${condition}`;
    // }

    // if (phone_number) {
    //   let condition = `phone_number = ${phone_number}`;
    //   res.locals.conditionals === " " ? res.locals.conditionals += ` AND ${condition}` : res.locals.conditionals += ` ${condition}`;
    // }

    next();
  }
};

module.exports = AppService;