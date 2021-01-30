import React, { Component } from "react";
import Quotes from "./Quotes";
export class Book extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://www.breakingbadapi.com/api/characters";

    const response = await fetch(url);

    const data = await response.json();

    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    const elements = this.state.person;

    return (
      <div className="booklist">
        {elements.map((value, index) => {
          return (
            <div className="book">
              <img
                src={value.img}
                height="400px"
                width="300px"
                alt=""
              />
              <h5>{value.name}</h5>
              <h1>BirthDate:</h1>
              <h2> {value.birthday}</h2>
              <h1>Occupation :</h1>
              {value.occupation.map((v, i) => {
                return <h3>{v}</h3>;
              })}
              <h1>Nickname</h1>
              <h3>{value.nickname}</h3>
              <h1>Actor name</h1>
              <h3>{value.portrayed}</h3>
              <h1>Season Appearance </h1>
              <h3>{value.appearance + " "}</h3>
              <h1>Quotes</h1>
              <Quotes name={value.name}/>
              <h4>Status : {value.status}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Book;
