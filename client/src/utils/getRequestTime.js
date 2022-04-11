function requestTime(d) {
  this.beginTime = d.getTime();

  this.onFinish = function (max, cb) {
    const d = new Date();
    const totalTime = d.getTime() - this.beginTime;
    const timeout = totalTime >= max ? 0 : max - totalTime;

    const timer = setTimeout(async () => {
      await cb();
    }, timeout);
    return () => clearTimeout(timer);
  };
}

export default requestTime;
