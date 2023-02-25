const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((catinfo))
});
// refer to instructional #7 for the parameter in the .then above^^
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  //working on 
  Category.create({
    id: req.body.id

  }).then((newCategory) => {
    req.json(newCategory);
  })

    .catch((err) => {
      res.json(err);
    });
});
// reference from class
router.post('/', async (req, res) => {
  try {
    const catCreate = await Category.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(catCreate);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    id: id.body.id
  },
    {
      where: {
        id: req.params.id,
      },

    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id,
    }
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err))

});

module.exports = router;
