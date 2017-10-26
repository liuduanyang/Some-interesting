// 敌人类
var Enemy=function(opts){
    var opts=opts||{};

    //调用父类 设置speed等基础属性 
    Element.call(this,opts);

    // 特有属性状态和图标
    this.status='normal';
    this.icon=opts.icon;
    this.live=opts.live;
    this.type=opts.type;
};

// 继承父类的方法
Element.prototype=new Element();

Element.prototype.down=function(){
    this.msRegionOverflow(0,this.speed);
};

// draw 绘制方法
Enemy.prototype.draw=function(){
    // 暂时用矩形的代替 应该换为图像
    context.fillRect(this.x,this.y,this.width,this.height);
}