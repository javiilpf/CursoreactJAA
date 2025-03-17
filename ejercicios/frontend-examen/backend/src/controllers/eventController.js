import Event from "../models/Event.js";

// Obtener todos los eventos
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving events", error: error.message });
  }
};

// Obtener un evento por ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving event", error: error.message });
  }
};

// Crear un nuevo evento
export const createEvent = async (req, res) => {
  const { name, date, type } = req.body;

  if (!name || !date || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const event = new Event(req.body);
  try {
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating event", error: error.message });
  }
};

// Actualizar un evento por ID
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating event", error: error.message });
  }
};

// Eliminar un evento por ID
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndRemove(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: error.message });
  }
};
