const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});
// refer to instructional #7 for the parameter in the .then above^^
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
      // might not need the Category model above^^
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//   // create a new category
//   //working on 
// //   Category.create({
// //     id: req.body.id,
// //     name: req.body.name

// //   }).then((newCategory) => {
// //     req.json(newCategory);
// //   })

// //     .catch((err) => {
// //       res.json(err);
// //     });
// // });
// // reference from class
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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
 const categoryData = await Category.update(req.body ,{
  where: {
    category_id: req.params.id,
 },
});
if (categoryData[0]) {
  res.status(404).json({ message: 'No user with this id!'});
  return;
}
res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  const categoryData = await Category.destroy({
    where: {
      category_id: req.params.id,
      // id :req.params.id, ?? which one do i need category_id or id?
    },
  });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
