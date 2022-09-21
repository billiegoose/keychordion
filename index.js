import JZZ from 'jzz';

import { Passthrough } from './passthrough.js';
import { logger } from './Logger.js';
import { Chord } from './chord.js';
import { Delay } from './delay.js';
import { Arpeggiator } from './arpeggiator.js';
import { InstrumentMap } from './instrument-map.js';
import { GuitarChord } from './guitar-chord.js';

const input = JZZ().openMidiIn();
const output = JZZ().openMidiOut();

const passthrough = Passthrough()
const chord = Chord([4, 7]);
const arp = Arpeggiator([4, 7, 12, 7, 4, 0])
const im = InstrumentMap([0, 25, 56, 123])
const gc = GuitarChord();

input.connect(logger);
logger.connect(im);
im.connect(gc);
gc.connect(output);
