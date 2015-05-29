var square = d3.select('.container').selectAll('div')
            .data([0]).enter().append('div').attr('class', 'square')
            .style({
              // top:    0 + 'px',
              // left:   0 + 'px',
              'background-color': 'blue',
              top: 15 + 'px',
              left: 15 + 'px',
              width:  100 + 'px',
              height: 100 + 'px'
            });

var turnSquareGreen = function() {
  square.transition()
    .duration(1000)
    .style({
      'background-color': 'green'
    })
    .each('end', function() {
      turnSquareBlue();
    });
}

var turnSquareBlue = function () {
  square.transition()
    .duration(1000)
    .style({
      'background-color': 'blue'
    })
    .each('end', function() {
      turnSquareGreen();
    });
}

turnSquareGreen();