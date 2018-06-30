import React, { Component } from "react";
import axios from "axios";
// import FavBtn from "../FavBtn/FavBtn";
import "./SearchTitle.css";

export default class SearchTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [],
      favoriteShow: []
    };
  }

  componentDidMount() {
    this.newSearch();
  }

  newSearch() {
    axios.get("/api/firstController").then(res => {
      this.setState({ title: res.data });
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <input 
          value={}
          placeholder="Type in me" type="text"
          onChange={(e)=> this.handleChange}/>
        <button
        // onClick={}
        >
          Search your title!
        </button>
      </div>
    );
  }
}

//
//
//
//
//
//
//
//

// export default class SearchTitle extends Component {
//   constructor() {
//     super();

//     this.state = {
//       userInput: [],
//       favoriteShow: []
//     };

//     //binding not needed with use of arrow functions
//   }

//   componentDidMount() {
//     this.newSearch();
//   }

//   // handleChange(val){
//   //   this.setState({})
//   // }

//   newSearch = () => {
//     axios
//       .get(`/api/firstController`)
//       .then(res => {
//         this.setState({ userInput: res.data });
//       })
//       .catch(() => this.newSearch());
//   };

//   addFav = () => {
//     let { userInput, favoriteShow } = this.state;
//     axios
//       .post("/api/firstController", { userInput })
//       .then(res => this.setState({ favoriteShow: res.data }));
//   };

//   render() {
//     const { useInput, favoriteShow } = this.state;
//     return (
//       <div>
//         <div className="show-title">Search Tv Shows!!</div>
//         <input className="show-search" onChange={this.handleChange}/>
//         <button className="search-btn" onClick={() => this.newSearch()}>
//           Search for your show!
//         </button>
//         <FavBtn add={this.addFavorite} />
//       </div>
//     );
//   }
// }
