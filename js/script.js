$(document).ready(function(){
    $(".button-container").hover(function(){
        $("#cursor").addClass("active");
   }, function(){
    $("#cursor").removeClass("active");
   });
   
   

   $(".button-container button").click(function(){
       $("html, body").stop().animate({scrollTop : $(".show").offset().top}, 1000);       
       return false;

   });

   var cir_arr = [
    ["90", "HTML"],
    ["95", "CSS"],
    ["60", "PHP"],
    ["100", "COMMUNICATION"],
    ["80", "JAVASCRIPT"],
    ["60", "PHOTOSHOP"]
    ];

    var cir_cont = `
    <div class="box">
        <div class="cont">
            <div class="top">
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70"/>
                </svg>
                <div class="num">
                    <h2>
                        <span class="count">95</span>
                        <span>%</span>
                    </h2>
                </div>
            </div>
            <div class="bottom">
                <h2 class="cont_text">HTML5</h2>
            </div>
        </div>
    </div>
    `

    for(i=0; i<cir_arr.length; i++){
        $("#skill .frame").append(cir_cont);
    }

    $(".frame .box").each(function(i){
        $(this).find(".count").text(cir_arr[i][0]);
        $(this).find(".cont_text").text(cir_arr[i][1]);
    });

    let sec_height = $(window).height();
    console.log(sec_height);
    let sec_height_half = sec_height / 2;
    console.log(sec_height_half);

    let target_svgBox_top = $("#skill").offset().top;
    console.log(target_svgBox_top);
    $(window).scroll(function(){
        let $scrollTop = $(window).scrollTop();
        if($scrollTop > $(".about").offset().top - 100){
            $("header").addClass("sticky");
            $(".about").css("margin-top", "100px");
        }else{
            $("header").removeClass("sticky");
            $(".about").css("margin-top", "0");
        }

        if($scrollTop > target_svgBox_top - sec_height_half){
            $(".box").each(function(){
                let sel_count = $(this).find(".count").text();
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "calc(440 - (440 * " + sel_count + ") / 100)");

            });
        }else{
            $(".box").each(function(){
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "440");
            });
        }
    });

    var slip_arr = [
        ["img1.jpg", "인도", "사회 봉사 활동", "인도에서의 경험", "인도에서의 3주간 학교 교육봉사 및 집 건축"],
        ["img2.jpg", "축구", "용인대학교", "체육학과 졸업 및 컴퓨터 부전공", "체육학을 전공하면서 컴퓨터 쪽에 관심이 많았습니다. 체육학으로 단련된 체력도 가지고 있습니다."],
        ["img3.jpg", "스튜디오", "스튜디오 로베", "직접 참여", "부모님이 운영하는 스튜디오 내부 인테리어를 처음부터 끝까지 혼자서 직접 참여하고 운영할 때에는 옆에서 어머니를 도와드렸습니다. ※직접 촬영한 사진입니다."],
        ["me2.jpg", "호텔", "엠버서더 이비스 강남점", "Front office", "프론트에서 1년간 다양한 외국인 및 내국인을 응대하며 직무했던 경험이 있습니다."],
        ["img5.jpg", "독일", "어릴 적 독일에서의 경험", "초등학교의 4년", "독일에서의 4년 거주로 외국인과의 소통을 즐겨하며 영어에 대한 두려움이 없습니다."],
        ["img6.jpeg", "자격증", "자격증", "여러가지 자격증 보유", "웹디자인 기능사, 생활체육지도자 2급, 바리스타, 토익 및 중국어 ..."]
    ];

    var slip_cont = `
    <div class="card">
        <div class="front"></div>
        <div class="back">
            <div class="details">
                <h2>사회 봉사 활동</h2>
                <h4>인도에서의 경험</h4>
                <div class="cont">
                    <p>인도에서의 3주간 학교 교육봉사및 집 건축</p>
                </div>
            </div>
        </div>
    </div>
    `

    for(i=0; i<slip_arr.length; i++){
        $(".cont_frame .cont_box").append(slip_cont);
    };

    $(".cont_box .card").each(function(i){
        $(this).find(".front").css("background-image", "url(./img/"+ slip_arr[i][0] +" )");
        $(this).find(".details h2").text(slip_arr[i][2]);
        $(this).find(".details h4").text(slip_arr[i][3]);
        $(this).find(".details .cont p").text(slip_arr[i][4]);
    });

    var typed = new Typed('.typed',{
    strings : ["This Page is about My Portfolio!","Please click all my results!","Thank you :)"], //브라주어 화면에 띄워줄 문구
    stringsElement : null, //초기 상태에서 공간을 비운다.
    typeSpeed : 80, //타이핑 속도
    backSpeed : 50, //backspace의 속도
    smartBackspace : true, //동일한 값 또는 문구가 존재할 때 backspace로 제거하지 못하도록 구성 후, 다음 문장을 표현
    startDelay : 1000, //1초 후 타이핑을 통해서 글자가 작성되도록 시간을 지연시키는 것.
    backdelay :1000, //천번째 문장을 모두 작성되게 한 후 , 1초 후에 backspace가 진행되도록 만듬.
    loop: true,  //타이핑 문장 반복 (true 또는 false)
    showCursor: true, 
    cursorChar : '|',
    autoInsertCss : true
    });

    $("#portfolio .main .mac").click(function(){
        $("#portfolio .backgroud").addClass("active");
        $("#portfolio .popup").addClass("active");
        $("#portfolio .main .mac").hide();

        return false;
    });

    $("#portfolio .backgroud").click(function(){
        $("#portfolio .backgroud").removeClass("active");
        $("#portfolio .popup").removeClass("active");
        $("#portfolio .main .mac").show();
    });



    var port_arr = [
        ["port0.png", "Seven", "PHP(로그인, 회원가입, 좋아요)를 이용하여 만든 홈페이지", "http://xgermanyx.dothome.co.kr/website/"],
        ["port1.png", "Kuliner", "레스토랑 페이지를 주제로 한 적응형 프로젝트", "https://xgermanyx.github.io/kuliner/"],
        ["port2.png", "Cashmere", "쇼핑몰 페이지를 주제로 한 적응형 프로젝트", "https://xgermanyx.github.io/cashmere/"],
        ["port3.png", "Hospital", "병원 페이지를 따라한 프로젝트", "https://xgermanyx.github.io/hospital/"],
        ["port4.png", "weather", "현재 전 세계의 날씨를 나타내는 페이지", "https://xgermanyx.github.io/weather/"],
        ["port5.png", "fullpage", "마우스 휠, 키보드로 슬라이 넘기는 페이지", "https://xgermanyx.github.io/fullpage_vh/"],
        ["port6.png", "wedding", "웨딩 페이지를 따라 만든 클론 사이트", "https://xgermanyx.github.io/wedding/"],
        ["port7.png", "B-OPlay", "홈페이지 내부에 영상을 넣어 만든 사이트", "https://xgermanyx.github.io/B-OPlay/"],
        ["port8.png", "ajax", "장사리 전투 영화 홍보 목적의 사이트", "https://xgermanyx.github.io/ajax_website/"],
        ["port9.png", "InvestPlan", "메인 페이지의 생동감을 주는 투자회사의 사이트", "https://xgermanyx.github.io/InvestPlan---Main/index.html"],
    ];

    var port_cont = `
        <li>
            <div class="wrap">
                <div class="port_img">
                    <div class="site_img"></div>
                    <div class="frame_img">
                        <div class="link">    
                            <a href="" target="_blank">Visit Site <br><span>Click Here</span></a>
                        </div>
                        <div class="memo">
                            <h2 class="tit"></h2>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `

    for(i=0; i<port_arr.length; i++){
        $("#portfolio .act .popup ul").append(port_cont);
    };

    $("#portfolio .wrap .port_img").each(function(i){
        $(this).find(".site_img").css("background-image", "url(./img/"+ port_arr[i][0] +")");
        $(this).find(".memo h2").text(port_arr[i][1]);
        $(this).find(".memo p").text(port_arr[i][2]);
        $(this).find(".link a").prop("href", port_arr[i][3]);
       
    });


    $('#portfolio .popup > ul').slick({
        dots: true,
        infinite: true,
        slidesToShow:1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000, 
        slidesToScroll: 1,
       
        responsive:[
            {
                breakpoint : 1200, //반응현 시점(1200px미만부터 적용해라)
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint : 768,
                settins : {
                    fade : true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false,
                }
            },
        ]
    });

    /****full page**** */
    var elm = ".box";  //클래스명을 지목할 문자형 데이터
    $(elm).each(function(index){  //index = 0,1,2,3,4,5,6
        //개별적으로 각 섹션마다 마우스 휠 이벤트를 적용시키기 위함
        $(this).on("mousewheel DOMMouseScroll", function(e){
            e.preventDefault();  //휠 이벤트에 의해서 초기화되는 것을 막는다.
            console.log(e);  //이벤트 발생에 의한 모든 것을 가져옴

            var delta = 0;  //마우스 휠을 돌리지 않은 상태를 초기값으로 설정
            console.log(event.wheelDelta);
            //크롬 브라우저 기준으로 마우스 휠을 내렸을 때 -120 <-> 휠을 올렸을 때 120
            //오페라 브라우저에서는 마우스 휠을 내렸을 때 120 <-> 휠을 올렸을 때 -120
            console.log(e.detail);
            //파이어 폭스 기준으로 휠의 움직임을 받게 되는 값 / 휠을 내렸을 때 3 <-> 휠을 올렸을 때 -3


            if(event.wheelDelta){
                //크롬, 익스플로러, 사파리, 오페라 값을 받아왔다면
                delta = event.wheelDelta / 120;
                //(크롬 기준)휠을 내렸을 때 -120 / 120 = -1  // 휠을 올렸을 때 120 / 120 = 1
                //(오페라 기준)휠을 내렸을 때 120 / 120 = 1  // 휠을 올렸을 때 -120 / 120 = -1
                if(window.opera){  //오페라 브라우저의 경우는 크롬에서 나온 결과 delta 값을 일치시키기 위함
                    delta = -delta;
                }

            }else if(e.detail){
                //파이어 폭스에서 값을 받아왔다면
                delta = -e.detail / 3;  //(파이어폭스 기준) 휠을 내렸을 때 -(3/3) = -1  // 휠을 올렸을 때 -(-3/3) = 1
            }

            var moveTo = $(window).scrollTop();  //각 섹션별 상단의 위치값을 파악하여 저장
            var elmIndex = $(elm).eq(index);  //각 섹션별로 순차적으로 접근
            console.log(elmIndex);  //이벤트가 발생한 곳을 지칭
            if(delta < 0){
                //휠을 내린상태
                try{  //시도해라
                    //마우스 휠을 내리는 시점에서 다음 섹션이 존재한다면
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).next().offset().top;
                        console.log(moveTo);

                        $(".box").removeClass("active");
                        $(elmIndex).next().addClass("active");
                        var $cur_index = $(".box.active").index();
                        console.log($cur_index);
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");


                        $("header").removeClass("show");
                    }
                    
                }catch(e){  //시도하는 과정에서 문제점(에러)이 발생한 곳은 이곳에서 잡는다.
                    console.log("예외처리");
                }
            }else{
                //휠을 올린상태
                try{  //시도해라
                    //마우스 휠을 올리는 시점에서 이전 섹션이 존재한다면
                    if($(elmIndex).prev() != undefined){
                        moveTo = $(elmIndex).prev().offset().top;
                        console.log(moveTo);

                        $(".box").removeClass("active");
                        $(elmIndex).prev().addClass("active");
                        var $cur_index = $(".box.active").index();
                        console.log($cur_index);
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");


                        $("header").addClass("show");
                    }
                }catch(e){  //시도하는 과정에서 문제점(에러)이 발생한 곳은 이곳에서 잡는다.
                    console.log("예외처리");
                }
            }
            $("html, body").stop().animate({scrollTop : moveTo + "px"}, 800);
        });
    });

    /*
    [예외처리]
    try{
        시도하는 실행문
    }catch(e)){

    }
    : 먼저 시도를 하게하고 처리가 더 이상 안되는 예외파트를 catch라는 스코프 내부에서 잡아서 종료
    */

    //상단 메뉴 클릭시 해당하는 페이지로 찾아간다.
    $("header li").click(function(){
        var $index = $(this).index();
        $("header li").removeClass("active");
        $(this).addClass("active");
        $("main .box").removeClass("active");
        $("main .box").eq($index).addClass("active");
        $("html, body").stop().animate({scrollTop : $("main section").eq($index).offset().top}, 1000);
        return false;
    });

    //키보드 이벤트를 통해서 제어
    var key_num = 0;
    $(document).on("keydown", function(event){
        //console.log(event);
        console.log(event.keyCode);
        console.log(typeof event.keyCode);
        key_num = event.keyCode;

        var $target = $(".box.active").index();
        if(key_num == 40 || key_num == 34){  //"아래 방향키(40)" 또는 "Page Down(34)" 키보드를 눌렀을 때
            try{
                $("html, body").stop().animate({scrollTop : $(".box").eq($target + 1).offset().top}, 800, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target + 1).addClass("active"); 
                    $("header li").removeClass("active");
                    $("header li").eq($target + 1).addClass("active");
                });
            }catch(event){

            }
        }else if(key_num == 38 || key_num == 33){  //"윗 방향키(38)" 또는 "Page Up(33)" 키보드를 눌렀을 때
            try{
                $("html, body").stop().animate({scrollTop : $(".box").eq($target - 1).offset().top}, 800, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target - 1).addClass("active"); 
                    $("header li").removeClass("active");
                    $("header li").eq($target - 1).addClass("active");
                });
            }catch(event){

            }
        }else if(key_num == 36){  //"Home(36)" 키보드를 눌렀을 때, 맨 처음으로 이동
            try{
                $("html, body").stop().animate({scrollTop : $(".box").first().offset().top}, 800, function(){
                    $(".box").removeClass("active");
                    $(".box").first().addClass("active");
                    $("header li").removeClass("active");
                    $("header li").first().addClass("active");
                });
            }catch(event){

            }
        }else if(key_num == 35){  //"End(35)" 키보드를 눌렀을 때, 맨 마지막으로 이동
            try{
                $("html, body").stop().animate({scrollTop : $(".box").last().offset().top}, 800, function(){
                    $(".box").removeClass("active");
                    $(".box").last().addClass("active");
                    $("header li").removeClass("active");
                    $("header li").last().addClass("active");
                });
            }catch(event){

            }
        }
    });

    //모바일 환경에서는 터치 기반 - touchstart(최초로 화면을 누른 시점에서 발생하는 이벤트), touchend(드래그 이후의 손가락을 화면에서 떼는 시점에서 발생하는 이벤트)

    var $t_start; //최초로 터치한 Y축의 위치값
    var $_end;
    var $t_move;

    function next(evt){
        console.log(evt);
        try{
            var $target = $(".box.active").index(); //터치가 종료된 시점에서 현재 보여지는 화면의 인덱스 번호를 추출
            if($target != $(".box").length - 1){ //현재 위치가 마지막 인덱스 번호를 가져오지 않았다면
                $("html, body").stop().animate({scrollTop : $(".box").eq($target + 1).offset().top}, 500, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target + 1).addClass("active");
                    $("header li").removeClass("active");
                    $("header li").eq($target + 1).addClass("active");
                })
            }
        }catch(evt){

        }

    };
    function prev(evt){
        console.log(evt);
        try{
            var $target = $(".box.active").index(); //터치가 종료된 시점에서 현재 보여지는 화면의 인덱스 번호를 추출
            if($target != 0){ //현재 위치가 마지막 인덱스 번호를 가져오지 않았다면
                $("html, body").stop().animate({scrollTop : $(".box").eq($target - 1).offset().top}, 500, function(){
                    $(".box").removeClass("active");
                    $(".box").eq($target - 1).addClass("active");
                    $("header li").removeClass("active");
                    $("header li").eq($target - 1).addClass("active");
                })
            }
        }catch(evt){

        }

    };

  /*

    function touchMove(e){
        console.log(e);
        $t_move = $t_start - $t_end;
        if($t_move > 0){ //터치 이동방향이 윗쪽 방향
            //하부 내용이 화면으로 들어와야함
            next(e);
        }else if($t_move < 0){ //터치의 이동 방향이 아래 방향
            //상부 내용이 화면으로 들어와야함
            prev(e);
        }

    };

    $(".box").on("touchstart", function(event){
        console.log("터치 시작", event);
        console.log(event.changedTouches[0].pageY);
        $t_start = event.changedTouches[0].pageY;        
    });

    $(".box").on("touchend", function(event){
        console.log("터치 종료", event);
        console.log(event.changedTouches[0].pageY);
        $t_end = event.changedTouches[0].pageY;  

        touchMove(event);
    });

   */ 

    function resizeEvt(){
        const $pic_h = $(".picture img").height();
        $(".outerline").css("height", $pic_h);
        const $framePC_width = $(".frame_img").width();
        $("#portfolio .popup ul li .wrap").css("height", $framePC_width);
        $(".port_img").css("height", 0.67 * $framePC_width);
        $(".frame_img").css("height", 0.70 * $framePC_width);

        $(".site_img").css("height", 0.47 * $framePC_width);
    }

    resizeEvt();
    $(window).resize(function(){
        resizeEvt();
    });

});