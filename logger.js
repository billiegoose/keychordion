import JZZ from 'jzz';
import { DecodeStream } from '@lachenmayer/midi-messages';

const decode = new DecodeStream()

decode.on('data', message => {
  console.log(message)
})

export const Logger = () => JZZ.Widget({
  _receive (msg) {
    console.log([...msg]);
    decode.write(Buffer.from(msg))
    this.emit(msg);
  }
});

export const logger = Logger();
