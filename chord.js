import JZZ from 'jzz';

/**
 * @param {number[]} chord
 */
export const Chord = (chord) => JZZ.Widget({
  _receive (msg) {
    this.emit(msg);
    const root = msg.getNote();
    for (const note of chord) {
      this.emit(msg.setNote(root + note));
    }
  }
});
