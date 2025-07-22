export default (err, req, res, next) => {
  console.error(err);
  if (err.status) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
