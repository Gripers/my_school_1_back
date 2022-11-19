const router = require('express').Router();

const Filial = require('../models/Filial');

router.get('/', async (req, res) => {
  try {
    const filials = await Filial.find();
    res.status(200).json(filials);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    if (req.body.key === 'rz6zYZDCyetgCKZkHy4hQFdmb6caJd') {
      const newFilial = new Filial({
        filial: req.body.filial,
      });
      await newFilial.save();
      res.status(201).json(newFilial);
    } else {
      res.status(400).json('Invalid key!');
    }
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    if (req.body.key === 'rz6zYZDCyetgCKZkHy4hQFdmb6caJd') {
      await Filial.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true });
    } else {
      res.status(400).json('Invalid key!');
    }
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;
