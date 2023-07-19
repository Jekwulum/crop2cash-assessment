const AppService = {
  formatGetQuery(req, res, next) {
    console.log(req.query);
    let newQuery = "";
    let conditionals = "";
    const { columns } = req.query;
    if (columns) {
      res.locals.columns = columns;
    }

    next();
  }
};

module.exports = AppService;