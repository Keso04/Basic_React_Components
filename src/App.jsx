import './App.css';
import Book from './components/BookInformation';

function App() {
  return (
    <div className="App">
      <Book link="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Poster_-_Gone_With_the_Wind_01.jpg/1200px-Poster_-_Gone_With_the_Wind_01.jpg"
       title="Gone With The Wind" info="Gone With the Wind is a story about civil war, starvation, rape,
        murder, heartbreak and slavery. It is not necessarily a book one would associate with hope.
         And yet, at the novel's heart lies Scarlett O'Hara, one of the most ruthlessly optimistic
         characters in literature."
         actors={["Vivien Leigh", "Clark Gable", "Leslie Howard", "Olivia de Havilland", "Hattie McDaniel"]}/>
    </div>
  );
}

export default App;
