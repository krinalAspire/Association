const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Post = sq.define("tag", {
    // id:{
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // timestamps:false
  
    // number: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    
    // gender: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },

  });

//   User.sync({alter:true}).then(() => {
//     console.log("User Model synced");
//   });

  module.exports = Post;