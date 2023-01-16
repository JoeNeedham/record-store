const formidable = require("formidable");
const connection = require("../db");

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Image could not be uploaded'
            });
        }
        // check for all fields
        const { name, description, price, quantity } = fields;

        console.log(fields)

        if (!name || !description || !price || !quantity) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
        }

        const query = "INSERT INTO books SET ?"

        const post = {name: req.body.name, description: req.body.description, price: req.body.price, quantity: req.body.quantity, photo: req.body.photo};

        connection.query(query, post, function(err, result){
            if(err){
                console.log("Product create failed")
            }
            res.json(result)
        });
    })

    // algo today 22
};
