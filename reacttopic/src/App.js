import Counter from "./Counter";
import { Fetching } from "./Fetching";
import Form from "./Form";
import Tasks from "./Todo";
import Tasking from "./TodoParctice";
import TodoPractice from "./TodoPractice2";
import { WeatherApp } from "./WeatherAPI";

const App = function () {
  return (
    <>
      <Form />
      <Counter />
      <Tasks/>
      <Tasking/>
      <TodoPractice/>
      <Fetching/>
      <WeatherApp />
    </>
  );
};

export default App;
