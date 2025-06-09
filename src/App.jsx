import React from "react"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  handleCounterInc = () => {
    this.setState({ count: this.state.count + 1 })
  };
  handleCounterDec = () => {
    this.setState({ count: this.state.count - 1 })
  };
  render() {
    return (
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span style={{ color: "white", backgroundColor: "rgb(10, 10, 56)", fontSize: "25px", padding: "10px", borderRadius: "20px" }}>Counter App</span>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center", backgroundColor: "rgb(104, 104, 192)", width: "300px", height: "200px", borderRadius: "10px", padding: "5px", marginTop: "30px", boxShadow: " 10px 10px 10px rgba(1, 8, 40, 0.3)" }}>
          <button onClick={this.handleCounterDec} disabled={this.state.count === 0} style={{ backgroundColor: " rgb(10, 10, 56)", color: "white", fontSize: "20px", padding: "10px 15px", borderRadius: "50%" }}>-</button>
          <h1 style={{ color: "rgb(10, 10, 56)", }}>{this.state.count}</h1>
          <button onClick={this.handleCounterInc} disabled={this.state.count === 10} style={{ backgroundColor: "rgb(10, 10, 56)", color: "white", fontSize: "20px", padding: "10px 15px", borderRadius: "50%" }}>+</button>
        </div>
      </div>
    )
  }
}

export default App