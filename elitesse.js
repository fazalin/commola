function timeout() {
  // log the time of this call
  logline(new Date().getMilliseconds());
  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}
// start timer
setTimeout(timeout, 0);
