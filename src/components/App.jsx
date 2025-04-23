import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojicon) {
  return (
    <Entry
      key={emojicon.id}
      emoji={emojicon.emoji}
      name={emojicon.name}
      meaning={emojicon.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
