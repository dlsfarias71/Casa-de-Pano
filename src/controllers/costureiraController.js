const costureirasModel = require("../models/costureirasModel");
const cooperativasModel = require("../models/cooperativasModel");


const getAllcostureiras = async (req, res) => {
  try {
    const allCostureiras = await costureirasModel.find().populate("cooperativa");
    res.status(200).json(allCostureiras);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getCostureiraById = async (req, res) => {
  try {
    const findCostureira = await costureirasModel.findById(req.params.id).populate(
      "cooperativa"
    );
    if (findCostureira == null) {
      res.status(404).json({ message: "Costureira not found" });
    }
    res.status(200).json(findCostureira);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const postNewCostureira = async (req, res) => {
  console.log("00")
  try {
    const {
      cooperativaId,
      name,
      city,
      state,
      fone,
      email
    } = req.body;

    if (!cooperativaId) {
      return res

        .status(400)
        .json({ message: "Required: Enter the Cooperativa Id." });

    };

    const findCooperativa = await cooperativasModel.findById(cooperativaId);

    if (!findCooperativa) {
      return res.status(404).json({ message: "Cooperativa not found" });
    };

    const addNewCostureira = new costureirasModel({
      cooperativa: cooperativaId,
      name,
      city,
      state,
      fone,
      email
    });
    const savedCostureira = await addNewCostureira.save();
    res
      .status(200)
      .json({ message: "New costumer added successfully!", savedCostureira });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateCostureira = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cooperativaId,
      name,
      city,
      state,
      fone,
      email,
    } = req.body;
    const findCostureira = await costureirasModel.findById(id);
    if (findCostureira == null) {
      res.status(404).json({ message: "Costureira not found" });
    };

    if (cooperativaId) {
      const findCooperativa = await ConsolesModel.findById(cooperativaId);

      if (findCooperativa == null) {
        return res.status(404).json({ message: "Cooperativa not found" });
      };
    };
    findCostureira.name = name || findCostureira.name;
    findCostureira.city = city || findCostureira.city;
    findCostureira.state = state || findCostureira.state;
    findCostureira.fone = fone || findCostureira.fone;
    findCostureira.email = email || findCostureira.email;
    findCostureira.cooperativa = cooperativaId || findCostureira.cooperativa;

    const savedCostureira = await findCostureira.save();
    res.status(200).json({ message: "Costureira successfully updated", savedCostureira });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

const deleteCostureira = async (req, res) => {
  try {
    const { id } = req.params;
    const findCostureira = await costureirasModel.findById(id);

    if (findCostureira == null) {
      return res.status(404).json({ message: `Costureira with id ${id} not found` })
    };
    await findCostureira.remove();
    res.status(200).json({ message: `Costureira with id ${id} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllcostureiras,
  getCostureiraById,
  postNewCostureira,
  updateCostureira,
  deleteCostureira,

};