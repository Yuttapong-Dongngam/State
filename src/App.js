import { useState } from "react";
import './App.css';

function App() {
  //states
  const [note, setNote] = useState({
    content: '', author: ''
  });

  const [allNotes, setAllNotes] = useState([]);
 
  // Function
  function onNoteValueChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onNoteSubmit(event) {
    event.preventDefault();
    setAllNotes((prevAllNotes) => {
      return [note, ...prevAllNotes];
    });
  }

  // Elements
  const noteElements = allNotes.map((theNote, index) => {
    return (
      <div key={index} className="app-note">
        <p>{theNote.content}</p>
        <h5>{theNote.author}</h5>
      </div>
    );
  });

  return (
    <section className="app-section">
      <div className="app-container">
        <h3>สักหน่อยมั้ยล่ะ</h3>
        <from onSubmit={onNoteSubmit}>
          <p>
            <textarea
              rows="3"
              type="text"
              placeholder="บันทึกความในใจ"
              name="content"
              value={note.content}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="ลงชื่อ"
              name="author"
              value={note.author}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <button type="submit">เพื่มไปเลย</button>
          </p>
        </from>
        <div className="app-notes"> 
        {noteElements} 
        </div>
      </div>
    </section>
  );
}

export default App;
