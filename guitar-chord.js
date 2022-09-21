import JZZ from 'jzz';

/** @type {[number, number, number, number, number, number]} */
const Strings = ['E1', 'A1', 'D2', 'G2', 'B2', 'E3'].map(x => JZZ.MIDI.noteValue(x))
// 28,33,38,43,47,52



/**
 * @param {[number, number, number, number, number, number]} frets
 * @return {[number, number, number, number, number, number]}  
 */
const tab = (frets) => {
  return Strings.map((v, i) => v + frets[i])
}

const Major = tab([0, 2, 2, 1, 0, 0])
const MajorReverse = tab([0, 2, 2, 1, 0, 0]).reverse()

/**
 * @param {number} delay - in milliseconds
 */
 export const GuitarChord = (delay = 20) => JZZ.Widget({
  _receive (msg) {
    // this.emit(msg);
    const root = msg.getNote();
    let _delay = 0;
    const notes = msg.isNoteOn() ? Major : msg.isNoteOff() ? MajorReverse : [];
    console.log(notes);
    for (const note of notes) {
      const nn = root + JZZ.MIDI.noteValue(note) - JZZ.MIDI.noteValue('E2');
      const _msg = JZZ.MIDI.noteOn(msg.getChannel(), nn);
      console.log(_msg.getNote())
      _delay += delay;
      this.wait(_delay).emit(_msg);
    }
  }
});
