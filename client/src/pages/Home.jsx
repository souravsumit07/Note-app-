import React from "react";
import Card from "../components/Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/notes/get", {
          withCredentials: true, // ✅ must be true
        });
        setnotes(res.data.notes || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 justify-center p-10">
      {notes.length === 0 ? (
        <p>No note found</p>
      ) : (
        notes.map((note, idx) => (
          <Card
            key={idx}
            title={note.title}
            content={note.content}
            color={note.color}
          />
        ))
      )}
    </div>
  );
};

export default Home;
