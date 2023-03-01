var express = require('express');
const { getAllUsers, findUserById, insertData, deleteData, updateData, updateOneField } = require('../database/users');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await getAllUsers()
  res.send(users);
});

router.post('/', async function (req, res) {
  const newUser = await insertData(req.body)
  res.send(newUser)
});

router.get('/:id', async function (req, res) {
  const user = await findUserById(req.params.id)
  res.send(user)
});

router.put('/:id', async function (req, res) {
  const user = await updateData(req.body, req.params.id)
  res.send(user);
});

router.patch('/:id', async function (req, res) {
  const user = await updateOneField(req.body, req.params.id)
  res.send(user);
});

router.delete('/:id', async function (req, res) {
  const user = await deleteData(req.params.id);
  res.send(user);
});

module.exports = router;
