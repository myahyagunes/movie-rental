import React, { Component } from "react";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Joi from "joi";
class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("NumberInStock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();

    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    // var movie =
    this.props.history.push("/movies");
  };

  getHeaderText() {
    return this.props.match.params.id === "new"
      ? ""
      : this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <h4>Movie Form {this.getHeaderText()}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            {this.renderInput("title", "Title")}
            {this.renderDropdown("genreId", "Genre", this.state.genres)}
            {this.renderInput("numberInStock", "Number In Stock", "number")}
            {this.renderInput("dailyRentalRate", "Rate")}
            {this.renderButton("Save")}
          </div>
        </form>
      </div>
    );
  }
}

export default MovieForm;
