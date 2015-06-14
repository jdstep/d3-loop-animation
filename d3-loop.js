// creates a square for us to play with
var square = d3.select('.container').selectAll('div')
  .data([0]).enter().append('div').attr('class', 'square')
  .style({ // sets CSS styles
    'background-color': 'blue',
    top: 15 + 'px',
    left: 15 + 'px',
    width:  100 + 'px',
    height: 100 + 'px'
});

// turns our square green by using an animation on css properties
var turnSquareGreen = function() {
  square.transition()
    .duration(1000)
    .style({
      'background-color': 'green'
    })
    .each('end', function() {
      turnSquareBlue();
    });
};

// turns our square blue by using an animation on css properties
var turnSquareBlue = function () {
  square.transition()
    .duration(1000)
    .style({
      'background-color': 'blue'
    })
    .each('end', function() {
      turnSquareGreen();
    });
};

// starts our infinite loop of chaniging the square colors
turnSquareGreen();
