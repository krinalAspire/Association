const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const User = sq.define("box", {
    // id:{
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    //   set(value){
    //     this.setDataValue("name", value+" aspire");
    //   },
    //   get(){
    //     return this.getDataValue("name")+" aspire";
    //   }
    },
  
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    //   set(value){
    //     this.setDataValue("email",value+"@gmail.com");
    //   },
    //   get(){
    //     return this.getDataValue("email")+"@gmail.com";
    //   }
    },
    
    // gender: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
  
    // employed: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    //   allowNull: false,
    // },
  });

//   User.sync({alter:true}).then(() => {
//     console.log("User Model synced");
//   });

  module.exports = User;