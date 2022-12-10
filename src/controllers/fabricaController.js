
const FabricasModel = require("../models/fabricasModel");

const getAllFabricas = async (req, res) => {
  try {
    const allFabricas = await FabricasModel.find({}, null);
    res.status(200).json(allFabricas);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getFabricaById = async (req, res) => {
  try {   
    const findFabrica = await FabricasModel.findById(req.params.id);
    res.status(200).json(findFabrica);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewFabrica = async (req, res) => {
  try {
    const {
      name,
      city,
      state,
      fone,
      email
    } = req.body;

    const newFabrica = new FabricasModel({
      name,
      city,
      state,
      fone,
      email
    });
    const savedFabrica = await newFabrica.save();
    res
   
      .status(200)
      .json({ message: "New cooperativa  added successfully!", savedFabrica });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateFabrica = async (req, res) => {
  try {  console.log("00")
    const {
      name,
      city,
      state,
      fone,
      email
    } = req.body;
  
    const updateFabrica = await FabricasModel.findByIdAndUpdate(req.params.id, 
      {
      name,
      city,
      state,
      fone,
      email

    });
    res.status(200).json({message: "Fabrica successfully update"})
  } catch (error) {
    console.error(error);
    res.status(500).json({message:error.message})
  };
};

const deleteFabrica = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteFabrica = await FabricasModel. findByIdAndDelete(id);
    const message = ` Fabrica with name ${deleteFabrica.name} was successfully delete`;
    res.status(200).json({message});
  } catch (error) {
    console.error(error);
    res.status(500).json({message:error.message})
  };
};






module.exports = {
  addNewFabrica,
  getAllFabricas,
  getFabricaById,
  updateFabrica,
  deleteFabrica
  
};