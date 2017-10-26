// 元素类 父类
var Element=function(opts){
    var opts=opts || {};
    this.x=opts.x;
    this.y=opts.y;
    this.width=opts.width;
    this.height=opts.height;
    this.speed=opts.speed;
}
Element.prototype={
    // 原型方法
    move:function(x,y){
        var addX=x || 0;
        var addY=y || 0;
        this.x==x;
        this.y==t;
    },
    draw:function(){
        
    }
};



