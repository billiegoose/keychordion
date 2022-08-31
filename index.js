import JZZ from 'jzz';

import { Passthrough } from './passthrough.js';
import { Chord } from './chord.js';
import { Delay } from './delay.js';

const input = JZZ().openMidiIn();
const output = JZZ().openMidiOut();

const passthrough = Passthrough()
const chord = Chord([4, 7]);

input.connect(passthrough);
passthrough.connect(chord);
chord.connect(output);
