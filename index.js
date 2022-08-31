import JZZ from 'jzz';

import { Passthrough } from './passthrough.js';
import { Chord } from './chord.js';
import { Delay } from './delay.js';
import { Arpeggiator } from './arpeggiator.js';

const input = JZZ().openMidiIn();
const output = JZZ().openMidiOut();

const passthrough = Passthrough()
const chord = Chord([4, 7]);
const arp = Arpeggiator([4, 7, 12, 7, 4, 0])

input.connect(passthrough);
passthrough.connect(arp);
arp.connect(output);
