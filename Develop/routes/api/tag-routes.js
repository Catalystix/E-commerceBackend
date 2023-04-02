const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {

  try {
    const tagData = await Tag.findAll({
      include: [{model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
  
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{model: Product}],
        // might not need the Category model above^^
      });
      if (!tagData) {
        res.status(404).json({ message: 'Not category with that id!'});
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new tag
  router.post('/', async (req, res) => {
    try {
      const tagCreate = await tag.create(req.body);
      // 200 status code means the request is successful
      res.status(200).json(tagCreate);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });



  // update a tag's name by its `id` value
  router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
   const tagData = await Tag.update(req.body ,{
    where: {
      tag_id: req.params.id,
   },
  });
  if (tagData[0]) {
    res.status(404).json({ message: 'No user with this id!'});
    return;
  }
  res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
    const tagData = await Tag.destroy({
      where: {
        tag_id: req.params.id,
        // id :req.params.id, ?? which one do i need category_id or id?
      },
    });
      if (!tagCategory) {
        res.status(404).json({ message: 'No reader found with that id!' });
        return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  });


module.exports = router;
