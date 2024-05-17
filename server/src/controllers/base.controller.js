const getHome = (_req, res) => {
  res
    .status(200)
    .send(
      `<h1 style="text-align: center; color:green; margin-top:5%">Travel Tour Server is running...</h1>`
    );
};
const getHealth = (_req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

module.exports = { getHome, getHealth };
