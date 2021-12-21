let Room = require("../models/model");


exports.home = function(req, res) {
    res.render('home.ejs'); 
}

 exports.save = function(req, res) {
     res.render('list.ejs'); 
 }

pieces = [];
exports.getInfo = function(req, res) {
    let piece = req.body.piece;
    let largeur = req.body.largeur;
    let longeur = req.body.longeur;
    let surface = req.body.surface;

    let choix = new Room(piece, largeur, longeur, surface); 

    pieces.push(choix);
    console.log(pieces);
    
    res.render('list.ejs', {pieces : pieces}); 
}
