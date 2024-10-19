var initialPath = "M 10 100 Q 500 100 990 100";

var finalPath = "M 10 100 Q 500 100 990 100";

var string =  document.querySelector("svg");

string.addEventListener('mousemove', function(dets){
    
    newPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to('svg path', {
        attr: {d:newPath},
        duration: 0.2,
        ease: 'power3.out'
    })
    
})

string.addEventListener('mouseleave', function(event){
    
    gsap.to('svg path',{
        attr: {d:finalPath},
        duration: 1.5,
        ease: 'elastic'
    })
})