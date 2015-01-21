var starCanvas = function(){ 
  var my = {ready: false};
  var canvas, ctx, W, H;

  var spaceBackground = '#222';
  var activeColors = ['#FFFFFF', '#FFDFDC', '#C0D9DF', '#F2F1E6'];
  var dimColors = ['#555', '#444', '#333']; 

  //for star spacing on a grid
  var xSpacing, xSpacing, starXCount, starYCount;

  var stars = [];
  var activated = [];

  //initialize the drawing canvas and the stars
  my.init = function(){
    canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');
    W = canvas.width = document.body.clientWidth;
    H = canvas.height = document.body.offsetHeight+300;

    xSpacing = 5;
    ySpacing = xSpacing;
    starXCount = Math.floor(W/xSpacing);
    starYCount = Math.floor(H/ySpacing);

    ctx.fillStyle = spaceBackground;
    ctx.fillRect(0, 0, W, H);

    for(var i=0; i <= starXCount; i++){
      stars.push([]);
      for(var j=0; j <= starYCount; j++){
        stars[i].push({
          x: randInt(W), 
          y: randInt(H), 
          //x: i*xSpacing, //for grid spacin, nice for debugging
          //y: j*ySpacing,
          active: false,
          size: randInt(2)+1
        });
      }
    }
    drawAllStars();
  }

  //this gets called everytime a variable slider is updated
  my.update = function(newValue){
    if (newValue > stars.length * stars[0].length){
      return;
    }
    else if (newValue > activated.length){
      for (var i=activated.length; i < newValue; i++){
        activateSingle();
      }
    }
    else{
      for (var i=activated.length; i > newValue; i--){
        deactivate();
      }
    }
  }

  //activate an initial set of stars.
  my.activate = function(count){
    for (var i=0; i < count; i++){
      activateSingle();
    }
    my.ready = true;
  }

  //draw all the stars dimmed, this should only be called once from 'init()'
  function drawAllStars(){
    for(var i=0; i < stars.length; i++){
      for(var j=0; j < stars[i].length; j++){
        drawSingle(i, j);
      }
    }
  }

  //draw a single star, dimmed or activated
  function drawSingle(i, j){
    var size = stars[i][j].size;
    if(stars[i][j].active){
      ctx.fillStyle = randomColor(activeColors);
    }
    else{
      ctx.fillStyle = randomColor(dimColors);
    }
    ctx.fillRect(stars[i][j].x, stars[i][j].y, size, size);
  }

  //turn off a star, pop it from activated cache
  function deactivate(){
    var x = activated[activated.length-1].x;
    var y = activated[activated.length-1].y;
    stars[x][y].active = false;
    drawSingle(x,y);
    activated.pop();
  }

  //turn on a random star, add it to activated cache
  function activateSingle(){
    var x,y;
    do {
      x = randInt(stars.length);
      y = randInt(stars[0].length);
    } while(stars[x][y].active == true);
    
    stars[x][y].active = true;
    drawSingle(x,y);
    activated.push({x:x, y:y});
  }

  function randInt(upper){
    return Math.floor(Math.random() * upper);
  }

  function randomColor(arr){
    var index = randInt(arr.length);
    return arr[index];
  }

  return my;
}