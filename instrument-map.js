import JZZ from 'jzz';

/**
 * @param {number[25]} map Map instruments 1-25 on the keytar to 0-127 of General MIDI
 */
export const InstrumentMap = (map) => JZZ.Widget({
  _receive (msg) {
    // Detect Program Change events
    let [comm, arg1, _arg2] = msg;
    if (comm === 192 && arg1 < 25) {
      const newProgram = map[arg1];
      this.emit(JZZ.MIDI.program(1, newProgram))
    } else {
      this.emit(msg);
    }
  }
});
