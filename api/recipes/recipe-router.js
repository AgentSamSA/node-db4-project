const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get recipes" });
        });
});

router.get("/:id/shoppinglist", (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(list => {
            if (!list) {
                res.status(404).json({ message: "Could not find recipe with given id" });
            } else {
                res.status(200).json(list);
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get recipes" });
        });
});

router.get(":id/instructions", (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(instructions => {
            if (!instructions) {
                res.status(404).json({ message: "Could not find recipe with given id" });
            } else {
                res.status(200).json(instructions);
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get recipes" });
        });
});

module.exports = router;