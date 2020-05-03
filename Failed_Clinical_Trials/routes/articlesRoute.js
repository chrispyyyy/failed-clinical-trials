const express = require('express');
const Article = require('../models/articlesModel.js');
const vm = require("v-response");

let router = express.Router();

router.get('/failed-clinical-trials', (req, res) => {
    Article.find()
        .then(found => {
            if (!found) {
                return res
                    .status(400)
                    .json(
                        vm.ApiResponse(
                            false,
                            400,
                            "unable to find articles"
                        )
                    );
            } else if (found) {
                console.log(found);
                return res
                    .status(200)
                    .json(
                        vm.ApiResponse(true, 200, "articles successfully found", found)
                    );
            }
        })
        .catch(error => {
            return res
                .status(500)
                .json(
                    vm.ApiResponse(
                        false,
                        500,
                        "hoop internal server error",
                        undefined,
                        error
                    )
                );
        });
});
//
// router.get('/:id', (req, res) => {
//     Article.findById(req.params.id, (err, article) => {
//         if (err) throw err;
//         res.json({ article });
//     })
// });

module.exports = router;

