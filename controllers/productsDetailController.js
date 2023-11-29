const {menu} = require("./indexController")

const productsDetailController = {
    detail: (req,res)=>{
        const id = req.params.id
        const product = menu.find(element => element.id == id )
        res.render("productsDetail",{product})
    }
}

module.exports = productsDetailController;
