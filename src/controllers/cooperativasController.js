const CooperativasModel = require("../models/cooperativasModel");

const getAllCooperativas = async (req, res) => {
  try {
    const allCooperativas = await CooperativasModel.find({}, null);
    res.status(200).json(allCooperativas);
  } catch {
    res.status(500).json({ message: error.message });
  };
};


const getCooperativaById = async (req, res) => {
  try {   
    const findCooperativa = await CooperativasModel.findById(req.params.id);
    res.status(200).json(findCooperativa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewCooperativa = async (req, res) => {
  try {
    const {
      name,
      city,
      state,
      fone,
      email
    } = req.body;

    const newCooperativa = new CooperativasModel({
      name,
      city,
      state,
      fone,
      email
    });
    const savedCooperativa = await newCooperativa.save();
    res
   
      .status(200)
      .json({ message: "New cooperativa  added successfully!", savedCooperativa });
      
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateCooperativa = async (req, res) => {
  try {
    const {
      name,
      city,
      state,
      fone,
      email
    } = req.body;
    const updateCooperativa = await CooperativasModel.findByIdAndUpdate(req.params.id, {
      name,
      city,
      state,
      fone,
      email

    });
    res.status(200).json({message: "Cooperativa successfully update"})
  } catch (error) {
    console.error(error);
    res.status(500).json({message:error.message})
  }
}

const deleteCooperativa = async (req, res) =>{
  try {
    const {id} = req.params;
    const deleteCooperativa = await CooperativasModel. findByIdAndDelete(id);
    const message = ` Cooperativa with name ${deleteCooperativa.name} was successfully delete`;
    res.status(200).json({message});
  } catch (error) {
    console.error(error);
    res.status(500).json({message:error.message})
  }
}

module.exports = {
  addNewCooperativa,
  getAllCooperativas,
  getCooperativaById,
  updateCooperativa,
  deleteCooperativa,

  
}