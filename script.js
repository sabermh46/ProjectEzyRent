
    
    var pic1 = document.getElementById('pic1');
    var nav = document.getElementById('navigation');
    var section2 = document.getElementById('section2');
    var sec2sec2 = document.querySelector('.section2.sec2');
    var brand = document.querySelector('.brand');
    var imgBox1 = document.querySelector('.image-box');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');
    var section7 = document.getElementById('section7');
    var section8 = document.getElementById('section8');
    var item1 = document.getElementById('item1');
    var item2 = document.getElementById('item2');
    var item3 = document.getElementById('item3');
    var item4 = document.getElementById('item4');
    var img1 = document.getElementById('image1');
    var img2 = document.getElementById('image2');
    var img3 = document.getElementById('image11');
    var img4 = document.getElementById('image12');
    var ss1 = document.getElementById('ss1');
    var ss2 = document.getElementById('ss2');
    var img71 = document.getElementById('image71');
    var img72 = document.getElementById('image72');
    var part51 = document.getElementById('sec51');
    var part52 = document.getElementById('sec52');
    var scrollArea = window.innerHeight;
    var up = document.getElementById('up');
    var vid = document.getElementById('video');
    var icon = document.getElementById('icon');
    var ctrl = document.getElementById('ctrl');
    var sec2h2 = document.querySelector('.section2 h2');
    var sec3h2 = document.querySelector('.section3 h2');
    var con2h1 = document.querySelector('.content2 h1');
    var con7h1 = document.querySelector('.content7 h1');
    var con2p = document.querySelector('.content2 p');
    var con7p = document.querySelector('.content7 p');

    var pc = window.matchMedia("(min-width: 801px)");
    var tb = window.matchMedia("(max-width: 800px)");
    var mb = window.matchMedia("(max-width: 500px)");

    function playpause() {
        if(icon.innerHTML == 'play_arrow')
        {
            icon.innerHTML = 'pause'
            vid.play();
        }
        else {
            icon.innerHTML = 'play_arrow'
            vid.pause();
        }
    }
    document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        icon.innerHTML = 'play_arrow'
    }

    function triggerModal() {
        const trigger = document.getElementById('modal');
        trigger.classList.toggle('open');
    }



window.addEventListener('scroll', function() {
    var sec2 = section2.getBoundingClientRect().top;
    var sec3 = section3.getBoundingClientRect().top;
    var sec4 = section4.getBoundingClientRect().top;
    var sec5 = section5.getBoundingClientRect().top;
    var sec6 = section6.getBoundingClientRect().top;
    var sec7 = section7.getBoundingClientRect().top;
    var sec8 = section8.getBoundingClientRect().top;
    var subSec2h2 = sec2h2.getBoundingClientRect().top;
    var subSec3h2 = sec3h2.getBoundingClientRect().top;
    var subcon2h1 = con2h1.getBoundingClientRect().top;
    var subcon7h1 = con7h1.getBoundingClientRect().top;

    var scY = window.scrollY;
    var ev = (1000 - sec2)*0.1;
    var scrollNav = scY * 0.1;

        

        if(sec8 - 100 < scrollArea)
        {
            up.style.visibility = 'visible';
        }
        else
        {
            up.style.visibility = 'hidden';
        }
        if(subSec2h2 < scrollArea * 0.8)
        {
            sec2h2.classList.add('sec2h2');
        }
        else {
            sec2h2.classList.remove('sec2h2');
        }
        if(subSec3h2 < scrollArea * 0.8)
        {
            sec3h2.classList.add('sec2h2');
        }
        else {
            sec3h2.classList.remove('sec2h2');
        }
        if(subcon2h1 < scrollArea * 0.8)
        {
            con2h1.classList.add('conh1');
            con2p.classList.add('conP');
        }
        else {
            con2h1.classList.remove('conh1');
            con2p.classList.remove('conP');
        }
        if(subcon7h1 < scrollArea * 0.8)
        {
            con7h1.classList.add('conh1');
            con7p.classList.add('conP');
        }
        else {
            con7h1.classList.remove('conh1');
            con7p.classList.remove('conP');
        }
        
        
    if(pc.matches){
        if(scrollNav <= 17.66)
        {
            nav.style.padding = 60 - scrollNav*3 + 'px 10%';
            brand.style.fontSize = 37 - scrollNav*0.369 +'px';
        }
        else if(scrollNav > 17.66)
        {
            nav.style.padding = '7px 10%';
            brand.style.fontSize = '30px';
        }
        if(sec2 < 800)
        {
            var ev1 = ev*1.2;
            section2.style.opacity = 1;
            img2.style.transform = 'translateY(-' + ev1 + 'px)';
        }
        else
        {
            section2.style.opacity = 1;
        }

        var ev3 = (2000 - sec3)*0.1;

        if(sec3 < 800)
        {
            var ev13 = ev3*1.2;
            section2.style.opacity = 1;
            img3.style.transform = 'translateY(-' + ev13 + 'px)';
        }
        else
        {
            section3.style.opacity = 1;
        }
        var sec4ev = (3000 - sec4)*0.1;
        if(sec4 < scrollArea)
        {
            section4.style.transform = 'translateY(0px)';
            section4.style.opacity = 1;
            item1.classList.add('ttip-anim');
        }
        else
        {
            section4.style.transform = 'translateY(100px)';
            section4.style.opacity = 0;
            item1.classList.remove('ttip-anim');
        }
        if(sec4 < 500)
        {
            item2.classList.add('ttip-anim');
        }
        else
        {
            item2.classList.remove('ttip-anim');
        }
        if(sec4 < 400)
        {
            item3.classList.add('ttip-anim');
        }
        else
        {
            item3.classList.remove('ttip-anim');
        }
        if(sec4 < 300)
        {
            item4.classList.add('ttip-anim');
        }
        else
        {
            item4.classList.remove('ttip-anim');
        }

        if(sec5 + 200 < scrollArea)
        {
            sec51.style.transform = 'translateX(0%)';
            sec52.style.transform = 'translateX(0%)';
            sec51.style.opacity = 1;
            sec52.style.opacity = 1;
        }
        else
        {
            sec51.style.transform = 'translateX(-100%)';
            sec52.style.transform = 'translateX(100%)';
            sec51.style.opacity = 0;
            sec52.style.opacity = 0;
        }


        if(sec6 + 100 < scrollArea)
        {
            var s6ev = (scrollArea - sec6 + 100)*0.1;
            var s6e1 = s6ev*2 - 100;
            var s6e2 = s6ev*4 - 100;
            ss1.style.transform = 'translateY(-' + s6e1 + 'px)';
            ss2.style.transform = 'translateY(-' + s6e2 + 'px)';
        }
        else
        {
            ss1.style.transform = 'translateY()';
            ss2.style.transform = 'translateY()';
        }
        
        if(sec7 - 100 < scrollArea)
        {
            var s7ev = (scrollArea - sec7 + 100)*0.1;
            img71.style.transform = 'translateY(-' + s7ev*1.5 + 'px)';
            img72.style.transform = 'translateY(-' + s7ev*4 + 'px)';
        }
        else
        {
            img71.style.transform = 'translateY()';
            img72.style.transform = 'translateY()';
        }


    }
    else if(mb.matches){
        if(scrollNav <= 6.3333)
        {
            nav.style.padding = 40 - scrollNav*3 + 'px 15px';
        }
        else if(scrollNav > 6.333)
        {
            nav.style.padding = '10px 15px';
            nav.style.background = 'black';
        }
        if(sec2 < scrollArea * 0.8)
        {
            img1.classList.add('image1Add');
            img2.classList.add('image1Add');
            imgBox1.classList.add('ib-anim');
        }
        else
        {
            img1.classList.remove('image1Add');
            img2.classList.remove('image1Add');
            imgBox1.classList.remove('ib-anim');
        }
        if(sec3 < scrollArea * 0.8)
        {
            img3.classList.add('image1Add');
            img4.classList.add('image1Add');
        }
        else
        {
            img3.classList.remove('image1Add');
            img4.classList.remove('image1Add');
        }
        if(sec6 < scrollArea * 0.8)
        {
            ss1.classList.add('image1Add');
            ss2.classList.add('image1Add');
        }
        else
        {
            ss1.classList.remove('image1Add');
            ss2.classList.remove('image1Add');
        }
        if(sec7 < scrollArea * 0.8)
        {
            img71.classList.add('image1Add');
            img72.classList.add('image1Add');
        }
        else
        {
            img71.classList.remove('image1Add');
            img72.classList.remove('image1Add');
        }
        

        if(sec5 + 200 < scrollArea)
        {
            sec51.style.transform = 'translateX(0%)';
            sec52.style.transform = 'translateX(0%)';
            sec51.style.opacity = 1;
            sec52.style.opacity = 1;
        }
        else
        {
            sec51.style.transform = 'translateX(-100%)';
            sec52.style.transform = 'translateX(100%)';
            sec51.style.opacity = 0;
            sec52.style.opacity = 0;
        }
        var sec4ev = (3000 - sec4)*0.1;
        if(sec4 < 600)
        {
            section4.style.transform = 'translateY(0px)';
            section4.style.opacity = 1;
            item1.classList.add('ttip-anim');
        }
        else
        {
            section4.style.transform = 'translateY(100px)';
            section4.style.opacity = 0;
            item1.classList.remove('ttip-anim');
        }
        if(sec4 < 500)
        {
            item2.classList.add('ttip-anim');
        }
        else
        {
            item2.classList.remove('ttip-anim');
        }
        if(sec4 < 400)
        {
            item3.classList.add('ttip-anim');
        }
        else
        {
            item3.classList.remove('ttip-anim');
        }
        if(sec4 < 300)
        {
            item4.classList.add('ttip-anim');
        }
        else
        {
            item4.classList.remove('ttip-anim');
        }

    }
    else if(tb.matches)
    {

        if(scrollNav <= 13.3333)
        {
            nav.style.padding = 60 - scrollNav*3 + 'px 40px';
        }
        else if(scrollNav > 13.333)
        {
            nav.style.padding = '10px 40px';
            nav.style.background = 'black';
        }
        if(sec2 < scrollArea)
        {
            var ev1 = ev*1.2;
            section2.style.opacity = 1;
            img2.style.transform = 'translateY(-' + ev1 + 'px)';
        }
        else
        {
            section2.style.opacity = 1;
        }

        var ev3 = (1900 - sec3)*0.1;

        if(sec3 < scrollArea)
        {
            var ev13 = ev3 - 50;
            section2.style.opacity = 1;
            img3.style.transform = 'translateY(-' + ev13 + 'px)';
        }
        else
        {
            section3.style.opacity = 1;
        }
        var sec4ev = (3000 - sec4)*0.1;
        if(sec4 < 600)
        {
            section4.style.transform = 'translateY(0px)';
            section4.style.opacity = 1;
            item1.classList.add('ttip-anim');
        }
        else
        {
            section4.style.transform = 'translateY(100px)';
            section4.style.opacity = 0;
            item1.classList.remove('ttip-anim');
        }
        if(sec4 < 500)
        {
            item2.classList.add('ttip-anim');
        }
        else
        {
            item2.classList.remove('ttip-anim');
        }
        if(sec4 < 400)
        {
            item3.classList.add('ttip-anim');
        }
        else
        {
            item3.classList.remove('ttip-anim');
        }
        if(sec4 < 300)
        {
            item4.classList.add('ttip-anim');
        }
        else
        {
            item4.classList.remove('ttip-anim');
        }
        if(sec5 + 200 < scrollArea)
        {
            sec51.style.transform = 'translateX(0%)';
            sec52.style.transform = 'translateX(0%)';
            sec51.style.opacity = 1;
            sec52.style.opacity = 1;
        }
        else
        {
            sec51.style.transform = 'translateX(-100%)';
            sec52.style.transform = 'translateX(100%)';
            sec51.style.opacity = 0;
            sec52.style.opacity = 0;
        }


        if(sec6 - 100 < scrollArea)
        {
            var s6ev = (scrollArea - sec6 + 100)*0.1;
            var s6e1 = s6ev - 100;
            var s6e2 = s6ev*1.3 - 100;
            ss1.style.transform = 'translateY(-' + s6e1 + 'px)';
            ss2.style.transform = 'translateY(-' + s6e2 + 'px)';
        }
        else
        {
            ss1.style.transform = 'translateY()';
            ss2.style.transform = 'translateY()';
        }
        
        if(sec7 - 100 < scrollArea)
        {
            var s7ev = (scrollArea - sec7 + 100)*0.1;
            console.log("s7: " + s7ev);
            img71.style.transform = 'translateY(-' + s7ev*1.5 + 'px)';
            img72.style.transform = 'translateY(-' + s7ev*4 + 'px)';
        }
        else
        {
            img71.style.transform = 'translateY()';
            img72.style.transform = 'translateY()';
        }
    }
    
    
    

});