$(function () {
    $('.nav10').find('a').css({"color":"#BDD600"});
    $('.nav10').siblings('li').css({"display":"block"});
    $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })


    $('#add_btn').on('click', function () {
        let text = "";
        let title = $('#title').val();
        let discount = $('#discount').val();
        let startDate = $('#startDate').val();
        let endDate = $('#endDate').val();
        let startCode = $('#startCode').val();
        let endCode = $('#endCode').val();
        let type = $('#type').val();

        text += '<p>' + '????????? : ' + title + ' / ' + '<br> ????????? : ' + discount + "%<br> ?????? : " + startDate + " ~ " + endDate +
            " <br> ?????? ?????? : " + startCode + "<br> ?????? ?????? : " + endCode + "??? ????????? ?????????????????????." + '</p>'
        //
            document.getElementById("modal_isfind_title").innerHTML = text;
        //
        // let arr = new Array();
            $('.complete').on('click', function (){
                // saveAll ???
                // for(let i = 0; i < totalcoupon; i++){
                //     // register();
                //     let arrData = new Object();
                //     arrData.crType = type;
                //     arrData.crPrice = crprice;
                //     arrData.crDesc = title;
                //     arrData.crDiscount = discount;
                //     arrData.crIssuanceDay = startDate;
                //     arrData.crEndDay = endDate;
                //     arrData.crTotCoupon = totalcoupon;
                //     arrData.crStockCoupon = totalcoupon;
                //     arrData.crStatus = "Addcoupon";
                //     arrData.crCode = 0;
                //     arr.push(arrData);
                // }
                // console.dir(arr);

                register()
            });
        // }
    });

    let airPort = new Vue({
        el : '#airPortList',
        data : {
            airPort : {}
        }
    })

    airPortList();

    // ?????? ?????? ?????????
    function airPortList() {
        $.get("/api/airport/list", function (response) {
            console.dir(response);

            airPort.airPort = response.data;
        });
    }

    // ?????? ??????
    function register(){

        let type = $('#type').val();
        let title = $('#title').val();
        let discount = $('#discount').val();
        let startDate = $('#startDate').val() + "T00:00:00";
        let endDate = $('#endDate').val() + "T00:00:00";
        let startCode = $('#startCode').val();
        let endCode = $('#endCode').val();

        let coupon = {
            data : {
                crType: type,
                crDesc: title,
                crDiscount: discount,
                crIssuanceDay: startDate,
                crEndDay: endDate,
                crStartCode: startCode,
                crLastCode : endCode,
                crStatus : "AddCoupon"
            }
        }
        $.ajax({
            url : '/api/coupon',
            type : 'POST',
            dataType : 'json',
            data : JSON.stringify(coupon),
            dataType:"text",
            contentType : "application/json",
            success(coupon){
                alert("????????? ?????????????????????.");
                location.href = `/pages/admin/usecouponlist`;
            },
            error(error){
                alert("????????? ??????????????????.")
            }
        });
    }

});

$(()=> {
    $(".complete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
    $(".coupon_btn").on('click', () => {
        let str = $('#startDate').val().split('-');
        let strrr = str[0] + str[1] + str[2];
        let str1 = $('#endDate').val().split('-');
        let strrr1 = str1[0] + str1[1] + str1[2];
        let sC = $('#startCode').val();
        let eC = $('#endCode').val();


        if($('#title').val().length <= 0) {
            alert("???????????? ???????????????");
        }else if($('#discount').val().length <=0) {
            alert("???????????? ?????? ?????? ???????????????");
        }else if(strrr > strrr1) {
            alert('????????? ???????????? ???????????? ?????? ??? ????????????.');
        }else if(strrr == 'undefinedundefined' || strrr1 == 'undefinedundefined'){
            alert('????????? ?????? ?????? ?????? ????????? ??????????????????');
        }else if($('#startCode').val().length <=0 || $('#endCode').val().length <=0){
            alert('?????? ?????? ?????? ????????? ???????????????');
        }else{
            $("#modal_isfind").css('display', 'flex');
            $("#modal_isfind").fadeIn();
        }
    })
    $(".uncomplete").on('click', () => {
        $("#modal_isfind").css('display', 'none');
        $("#modal_isfind").fadeOut();
    })
})