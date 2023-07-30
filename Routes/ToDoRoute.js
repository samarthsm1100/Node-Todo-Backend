const {Router} = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../Controllers/ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/save',saveToDo);
router.put('/update',updateToDo);
router.delete('/delete', deleteToDo);

module.exports = router;