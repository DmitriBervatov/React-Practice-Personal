import CommentsList from "./components/CommentsList";
import TodoList from "./components/TodoList";
import ResourceLoader from "./shared/ResourceLoader";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/todos/2" resourceName="todo">
        <TodoList />
      </ResourceLoader>

      <hr />
      <br />

      <ResourceLoader resourceName="/comments/1" resourceUrl="comments">
        <CommentsList />
      </ResourceLoader>
    </>
  );
}

export default App;
