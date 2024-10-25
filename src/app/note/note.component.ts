import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  noteContent: string = '';
  loadedNote: string | null = null;

  saveNote() {
    if (this.noteContent) {
      localStorage.setItem('note', this.noteContent);
      this.noteContent = ''; // Clear textarea after saving
      alert('Note saved!');
    } else {
      alert('Please enter some content before saving.');
    }
  }

  loadNote() {
    this.loadedNote = localStorage.getItem('note');
    if (!this.loadedNote) {
      alert('No note found.');
    }
  }
}
