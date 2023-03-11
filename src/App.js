import React from "react";
import Header from './components/Header'
import classes from './components/style.module.css'
function App() {
  return (
    <div className="App">
        <body className={classes.body}>
      <Header></Header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat explicabo adipisci? Perferendis sapiente praesentium eaque corrupti, repellat explicabo sint fugit quod molestiae eveniet saepe voluptates ab dolorem incidunt dolorum?</p>
      </body>
    </div>
  );
}

export default App;
