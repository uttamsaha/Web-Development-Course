const mongoose = require("mongoose");
//Schema Design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String, // product er name string type.
      required: [true, "Place provide a name for this product."], // prottek ta prduct name thaktei hobe.. // error msg
      trim: true, // string er age and pore extra joto space thakbe sob remove kore dibe.
      unique: true, // name ta unique tahkbe
      minLength: [3, "Name must be at least three character"], // min  3 character hote hobe name
      maxLength: [100, "Name is too large."],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"], // number type er khetree min use korte hoi. min 0 hote hobe price negative hote parbe na
    },
    unit: {
      type: String,
      required: true,
      enum: ["kg", "litre", "pcs"], // enum variable e rakte hoi j ei 3 ta kg litre ba pcs er baire kono kichu accept korbo na.
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't be negative"],
      //custom validation
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be integer",
    },
    status: {
      type: String,
      required: true,
      enum: ["in-stock", "out-of-stock", "discontinued"], // ei 3 ta value chara onno value allow krbe na seta enum e dite hoi
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Cant rcv this {VALUE}",
      },
    },
    /*createdAt: {
          type: Date,
          default: Date.now, // default value set kore dicchi current time k.
      },
      updated: {
          type: Date,
          default: Date.now;
      },
      supplier: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Supplier", //supplier model theke object id ta asbe. //supplier model k refference hisebe use kortesi
      },
      categories: [{
          name: {
              type: String,
              required: true,
          },
          _id: mongoose.Schema.Types.ObjectId, // categoreis ekta onno model sei model k embed hisebe use kortesi
      }]*/
  },
  {
    timestamps: true, // eta option e timestamps true dile time auto capture korbe
  }
);

//mongoose Midlewares
//pre midleware data save howar age kaj kore
productSchema.pre("save", function (next) {
  console.log("Before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

//post middleware data save howar pore kaj kore
productSchema.post("save", function (doc, next) {
  console.log("After saving the data");
  next();
});

/// Creating MODEL
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
