import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

console.log(notes)




function App() {
  return (
    <div >
    <Header />
      {notes.map((noteItem) => (
      <Note 
      title={noteItem.title}
      content={noteItem.content} 
      />
      ))}
     <Footer />
   </div>
  );
}

export default App;
