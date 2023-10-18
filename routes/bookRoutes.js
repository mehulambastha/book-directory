const express = require("express")
const router = express.Router()
const {addBook, deleteBook, updateBook, viewBook} = require("../controllers/bookController")

router.route("/").post(addBook).get(viewBook)
router.route("/:id/").delete(deleteBook).put(updateBook)

module.exports = router