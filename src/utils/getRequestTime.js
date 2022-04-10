function requestTime(d) {
  this.beginTime = d.getTime();

  this.onFinish = function (d, max) {
    const finishTime = d.getTime();
    const totalTime = finishTime - this.beginTime;
    return totalTime >= max ? max : totalTime;
  };
}

export default requestTime;
