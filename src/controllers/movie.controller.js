import Movie from "../models/movie.model.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.json({ message: "Erreur serveur", error: err.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    // Methode 1
    // const movie = new Movie(req.body);
    // await movie.save();

    // Methode 2
    const newMovie = await Movie.create(req.body);
    res.json(newMovie);
  } catch (err) {
    res.json({ message: "Erreur serveur", error: err.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.json(updatedMovie);
  } catch (err) {
    res.json({ message: "Erreur serveur", error: err.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
    res.json(deletedMovie);
  } catch (err) {
    res.json({ message: "Erreur serveur", error: err.message });
  }
};
