//获取常用元素
var body=document.querySelector('body');

//获取画布
var canvas=document.querySelector('#game');
var context=canvas.getContext('2d');

//设置画布宽高
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//获取画布相关信息
var canvasWidth=canvas.clientWidth; //获取内容区域+内边距的宽度
var canvasHeight=canvas.clientHeight;//xxxxxxx          的高度

//判断是否有 requestAnimationFrame 方法 如果有则模拟实现
window.requestAniFrame =
window.requestAnimationFrame || 
window.webkitRequestAnimationFrame ||
window.oRequestAnimationFrame || 
window.msRequestAnimationFrame ||
function(callback){
    window.setTimeout(callback,1000/30);
};

// 页面交互
function bindEvent(){

var ui_index=document.querySelector(".ui-index");
var ui_panel=document.querySelector(".ui-panel");
var ui_rule=document.querySelector(".ui-rule");

var start=document.querySelector('.js-start');
start.addEventListener("click",function(){
    ui_index.style.display="none";
    ui_panel.style.display="none";
    ui_rule.style.display="none";
    //开始游戏
    Game.Gstart();
});

var setting=document.querySelector('.js-setting');
setting.addEventListener("click",function(){
    ui_index.style.display="none";
    ui_rule.style.display="none";
    ui_panel.style.display="block";
    //设置游戏
    //GAME.init();
});

var rule=document.querySelector('.js-rule');
rule.addEventListener("click",function(){
    ui_index.style.display="none";
    ui_panel.style.display="none";
    ui_rule.style.display="block";
});

// var start=document.querySelector('');
// start.addEventListener("click",function(){
//     ui_index.style.display="block";
//     ui_panel.style.display="none";
//     ui_rule.style.display="none";
// },false);

var iknow=document.querySelector('.iknow');
iknow.addEventListener('click',function(){
    ui_index.style.display="block";
    ui_panel.style.display="none";
    ui_rule.style.display="none";
});

var iconfirm=document.querySelector('.iconfirm');
iconfirm.addEventListener('click',function(){
    ui_index.style.display="block";
    ui_panel.style.display="none";
    ui_rule.style.display="none";
});
};

// 基本事件绑定
function bindEvent(){
    var self=this;


}

// 游戏对象

var Game={
    init:function(opts){
        var opts=Object.assign({},opts,CONFIG);
        this.opts=opts;

        // 计算飞机初始的坐标
        this.planePosX=canvasWidth/2-opts.planeSize.width/2;
        this.planePosY=canvasHeight-opts.planeSize.height-50;
    },
    Gstart:function(){
        var self=this; //保存函数调用对象
        var opts=this.opts;
        var images=this.images;

        //清空射击目标对象数组和分数设置为0
        this.enemies=[];
        this.score=0;

        //创建敌人战机
        this.createSmallEnemyInterval=setInterval(function(){
            self.createEnemy('normal');    
        },500);
        this.createBigEnemyInterval=setInterval(function(){
            self.createEnemy('big');
        },1500);

        // 开始更新游戏
        this.update();
    },
    update:function(){
        var self=this;
        var opts=this.opts;

        // 先清除画布
        context.clearRect(0,0,canvasWidth,canvasHeight);
        
        // 更新飞机、敌人
        // this.updateElement();

        // 绘制画布
        this.draw();

        // 不断循环 update
        requestAniFrame(function(){
            self.update();
        });
    },
    
    // 生成敌人
    createEnemy:function(enemyType){
        var enemies=this.enemies;
        var opts=this.opts;
        var images=this.images || {};
        var enemySize=opts.enemySmallSize;
        var enemySpeed=opts.enemySpeed;

        var enemyLive=1;

        // 大型敌机参数
        if(enemyType==='big'){
            enemySize=opts.enemeyBigSize;

            enemySpeed=opts.enemySpeed=0.6;
            enemyLive=10;
        }

        //综合元素的参数
        var initOpt={
            x:Math.floor(Math.random()*(canvasWidth-enemySize.width)),
            y:-enemySize.height,
            enemyType:enemyType,
            live:enemyLive,
            width:enemySize.width,
            height:enemySize.height,
            speed:enemySpeed,
        }

        //怪兽的数量不大于最大值则新增
        if(enemies.length<opts.enemyMaxNum){
            enemies.push(new Enemy(initOpt));
        }

        console.log(enemies);//测试下
    },

    end:function(){

    },
    draw:function(){

    }
};


// 页面入口
function init(){
        Game.init();
        bindEvent();
    };

init();