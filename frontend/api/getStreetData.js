module.exports = async (req, res) => {
  const { body } = req
  if (body.password !== process.env.PASSWORD) {
    return res.status(401).end('unauthorized');
  }
  const result = {
    form_url: process.env.FORM_URL,
    results_url: process.env.RESULTS_URL
  };

  res.end(JSON.stringify(result, null, '  '));
}