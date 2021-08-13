const mongoose = require('mongoose');
const Product = require('./models/product');




const productArray = [
    {
        name: "Iphone 12",
        price: 85000,
        image: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf-1200-80.jpg.webp",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro quis eligendi maxime iste suscipit vero sunt ad quia, officia saepe accusamus distinctio exercitationem, amet dolores facilis rem cumque veniam officiis soluta cupiditate tenetur esse dicta illo? Voluptas, expedita! Porro quibusdam quod recusandae tenetur eveniet sint reprehenderit corporis deleniti culpa."

    },
    {
        name: "Macbook Pro",
        price: 176000,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro quis eligendi maxime iste suscipit vero sunt ad quia, officia saepe accusamus distinctio exercitationem, amet dolores facilis rem cumque veniam officiis soluta cupiditate tenetur esse dicta illo? Voluptas, expedita! Porro quibusdam quod recusandae tenetur eveniet sint reprehenderit corporis deleniti culpa."

    },
    {
        name: "Canon 80D",
        price: 100000,
        image: "https://d25tv1xepz39hi.cloudfront.net/2016-03-11/files/eos-80d_1205.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro quis eligendi maxime iste suscipit vero sunt ad quia, officia saepe accusamus distinctio exercitationem, amet dolores facilis rem cumque veniam officiis soluta cupiditate tenetur esse dicta illo? Voluptas, expedita! Porro quibusdam quod recusandae tenetur eveniet sint reprehenderit corporis deleniti culpa."

    },
    {
        name: "DJI Mavic Pro",
        price: 65000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHlu2uysE01QGDg4PZvQmfs20TYRIbjBSlg&usqp=CAU",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus.Lipsum dolor sit amet consectetur adipisicing elit. Labore porro quis eligendi maxime iste suscipit vero sunt ad quia, officia saepe accusamus distinctio exercitationem, amet dolores facilis rem cumque veniam officiis soluta cupiditate tenetur esse dicta illo? Voluptas, expedita! Porro quibusdam quod recusandae tenetur eveniet sint reprehenderit corporis deleniti culpa."

    },
    {
        name: "Marvel Polo Tshirt ",
        price: 1000,
        image: "http://cdn.shopify.com/s/files/1/1002/7150/products/Polo---MARVEL-Collection---Mockups-aven-a_1024x1024.jpg?v=1616413087",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus."

    },
    {
        name: "Leather Laptop Bag",
        price: 3000,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-9-1561062883.jpg?crop=0.495xw:0.990xh;0,0&resize=640:*",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nisi ipsa ipsum perferendis id quae! Quia distinctio quas voluptatibus perferendis ad illum at laboriosam! Aliquid ipsum et quae iste consequuntur molestias, ad quod, porro consequatur facilis cum ipsa aperiam temporibus."

    },
]


const seedDB = () => {

    Product.insertMany(productArray);
    console.log(" Data seeded successfully");
}


// exporting the above function: 
module.exports = seedDB;