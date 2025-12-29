exports.check = (req, res) => {
  res.json({
    status: 'ok',
    service: 'backend-node',
    time: new Date().toISOString()
  });
};
