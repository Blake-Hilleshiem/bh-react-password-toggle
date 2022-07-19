import { Component } from "react";

import PasswordInput from "./PasswordInput";
import ToggleShowBtn from "./ToggleShowBtn";

export default class App extends Component {
  constructor() {
    super();
    this.state = { input: "[ Super Secret Password ]", view: "display" };
  }

  ToggleBtnText = () => {
    console.log(this.view);
    if (this.view === "display") {
      this.setState(() => ({ view: "hide" }));
    } else {
      this.setState(() => ({ view: "display" }));
    }
  };

  render() {
    // console.log(this.state.view);
    return (
      <div className="App">
        <div className="input-wrapper">
          <PasswordInput input={this.state.input} />
          <ToggleShowBtn view={this.state.view} />
          {/* <div>[ password input]</div> */}
          {/* <div>[ toggle: hide/show]</div> */}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="input-wrapper">
//         <div>[ password input]</div>
//         <div>[ toggle: hide/show]</div>
//       </div>
//     </div>
//   );
// }

// export default App;
