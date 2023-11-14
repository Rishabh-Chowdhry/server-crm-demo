const Forms = require("../model/Form");
const userController = require("../controller/user-controller");

const createForms = async (req, res, next) => {
  // Form creation backend

  //   const receivedData = req.body; // Log the received data here
  //   const parsedFormData = JSON.parse(receivedData);
  //   console.log("Request data:", parsedFormData);

  const { title, fields } = req.body;

  if (!title || !fields) {
    return res.status(400).json({ error: "Missing required information" });
  }

  // Validate the 'fields' array
  if (
    !Array.isArray(fields) ||
    !fields.every((field) => typeof field === "object")
  ) {
    return res
      .status(400)
      .json({ error: "'Fields' must be an array of objects." });
  }

  // Process each field in the 'fields' array
  for (const field of fields) {
    console.log("Field label:", field.label);
    console.log("Field type:", field.type);
    // Handle each field object as needed
  }

  try {
    // Create a new form using the provided data
    const newForm = new Forms({ title, fields });

    // Save the new form to the database
    const savedForm = await newForm.save();

    // Send the saved form back as a response
    return res.json(savedForm);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
};

exports.createForms = createForms;
