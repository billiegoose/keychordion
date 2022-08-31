import JZZ from 'jzz';

/**
 * @param {number} delay
 */
export const Delay = (delay) => JZZ.Widget({
  _receive (msg) {
    this.wait(delay).emit(msg);
  }
});
