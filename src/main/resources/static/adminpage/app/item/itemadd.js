$(function () {
    $('.nav5').find('a').css({"color":"#BDD600"});
    $('.nav5').siblings('li').css({"display":"block"});
    $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
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
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

});

$(() => {
    document.getElementById('arrival_date').valueAsDate = new Date();

    $("#item_img").on('change',function(){
        let fileName = $("#item_img").val();
        $(".item_img_upload").val(fileName);
    });
})

$(() => {

    let typeList = [
        '?????? ??????', '??????', '????????????', '?????????/?????????', '??????', '??????', '??????'
        , '??????/??????', '??????', '??????', '??????', '??????/????????????', '????????????', '??????'
        , '?????????/?????????', '??????', '??????', '?????????', '??????'
    ]


    let itemList = $("#item_list");
    let arrAirport = $("#arrival_airport_list");
    let airplane = $("#airplane_list");

    for (let i = 0; i < typeList.length; i++){
        let option = document.createElement('option');
        option.innerText = typeList[i];
        option.value = typeList[i];
        itemList.append(option);
    }

    airplaneType();
    areaList();

    // ????????? ?????? ????????? ??????
    function airplaneType(){
        $.get("/api/airplane/list", function (response){
            console.dir(response)
            let arr = response.data.map(function (val, index){
                return val['apType']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            console.log(arr);

            for (let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                airplane.append(option);
            }

        })
    }

    // ????????? ????????? ????????? ??????
    function areaList(){
        $.get("/api/airport/list", function (response){
            // ????????? ?????????
            for (let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                arrAirport.append(option);
            }
        })
    }

    $("option[value='?????? ??????']").attr('selected', true);

    // let jsonData;
    //
    // function insert(){
    //     jsonData = {
    //         data : {
    //             losAirplane : $("#airplane_list").find('option:selected').val(),
    //             losType : $("#item_list").find('option:selected').val(),
    //             losArrivedate : $("#arrival_date").val() + "T00:00:00",
    //             losAirportArea : $("#arrival_airport_list").find('option:selected').val(),
    //             losImg : $("#item_img").val()
    //         }
    //     }
    //     $.ajax({
    //         url : "/api/lost",
    //         type : "POST",
    //         enctype: 'multipart/form-data',
    //         data : jsonData.data
    //     });
    // }
    $("#createBtn").click(() => {
        alert('????????????');
        location.href = "/pages/admin/item"
    })


});
