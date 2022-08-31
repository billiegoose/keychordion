import JZZ from 'jzz';

/**
 * @param {number[]} notes
 * @param {number} delay - in milliseconds
 */
export const Arpeggiator = (notes, delay = 100) => JZZ.Widget({
  _receive (msg) {
    this.emit(msg);
    const root = msg.getNote();
    let _delay = 0;
    for (const note of notes) {
      const _msg = JZZ.MIDI(msg);
      _delay += delay;
      this.wait(_delay).emit(_msg.setNote(root + note));
    }
  }
});
