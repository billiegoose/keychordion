import JZZ from 'jzz';

export const Passthrough = () => JZZ.Widget({
  _receive (msg) {
    this.emit(msg);
  }
});
