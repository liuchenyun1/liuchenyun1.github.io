function Tile(position, value) {
  this.name_change = ["夏", "商", "周", "春秋战国", "秦汉", "三国", "魏晋南北朝", "隋唐", "宋", "元明", "清"]
  this.x = position.x;
  this.y = position.y;
  this.true_value = value || 2;
  this.value = this.name_change[Math.log(this.true_value) / Math.log(2) - 1];

  this.previousPosition = null;
  this.mergedFrom = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = {
    x: this.x,
    y: this.y
  };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    true_value: this.true_value
  };
};