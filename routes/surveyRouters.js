module.exports = (app) => {
  app.post('./api/surveys', (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' });
    }
  });
};
