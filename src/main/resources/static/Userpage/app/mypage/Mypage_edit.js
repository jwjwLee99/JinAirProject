'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $('.edit').click(function(){
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
            e.stopPropagation();
        });
    });
    $('.btnTypeA').click(function(){
        $('.confirm_modal1').css('display', 'flex');
        $('.confirm_modal1').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.xbox').click(function(){
            $('.confirm_modal1').fadeOut(200);
            $('body').css('overflow', '');
        })
    });

});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

(function ($) {

    let countryList = [
        '????????????', '??????', '??????', '?????????', '?????????'
        , '??????', '???????????????', '???????????????', '??????'
        ,'??????', '???????????????', '????????????', '?????????', '??????'
        , '?????????', '????????????', '?????????', '????????????'
        ,'??????', '?????????', '?????????', '?????????', '???????????????'
        , '??????', '????????????', '??????', '????????????',
        '?????????', '?????????', '?????????', '?????????', '??????', '?????????', '?????????'
    ]

    let hpNationList = [
        '????????????82', '??????886', '??????81', '?????????84',
        '??????86', '??????852', '??????1'
    ]

    let selPass = $('#ntnltyCd');
    let selNation = $('#residenceIataCountryCode');
    let selHpNation = $('#mblFonCtrCd');

    for (let i = 0; i < countryList.length; i++){
        let option = document.createElement('option');
        option.innerText = countryList[i];
        option.value = countryList[i];
        selPass.append(option);
    }

    for (let i = 0; i < countryList.length; i++){
        let option = document.createElement('option');
        option.innerText = countryList[i];
        option.value = countryList[i];
        selNation.append(option);
    }

    for (let i = 0; i < hpNationList.length; i++){
        let option = document.createElement('option');
        option.innerText = hpNationList[i];
        option.value = hpNationList[i];
        selHpNation.append(option);
    }

    let idx = $('#memid').val();

    // ????????? ??????
    let gender;

    // ????????? ????????? ?????? ??????
    let isEmail;

    // ????????? sns ?????? ??????
    let isSns;

    // ????????? ??????
    let nation;

    // ????????? ????????? ?????? ??????
    let hpNation;

    let oldPw;

    let userid;


    let memberDetail = new Vue({
        el : '#joinForm',
        data : {
            memberDetail : {}
        }
    })

    search(idx);

    function search(index){
        $.get("/api/user/"+index, function (response){
            userid = response.data.memUserid;

            gender = response.data.memGender;

            isEmail = response.data.memEmailIsagree;

            isSns = response.data.memSnsIsagree;

            nation = response.data.memNation;

            hpNation = response.data.memHpNation;

            oldPw = response.data.memUserpw;


            $(".idField").text(response.data.memUserid);
            $('#pwField').val(response.data.memUserpw);
            $("#pstNo").val(response.data.memZipcode);
            $("#adr1").val(response.data.memAddress1);
            $("#adr2").val(response.data.memAddress2);
            $("#adr3").val(response.data.memAddress3);
            $("#mbrLnm").val(response.data.memKorFirstName);
            $("#mbrFnm").val(response.data.memKorLastName);
            $("#engLnm").val(response.data.memEngFirstName);
            $("#engFnm").val(response.data.memEngLastName);
            $("#emAdr").val(response.data.memEmail);
            $("#birth").text(response.data.memBirth);
            $("#mblFonNo").val(response.data.memHp);

            if(gender === $("#male").val()){
                $("#male").prop('checked', true);
                $("#female").prop('checked', false);
            }else if(gender === $("#female").val()){
                $("#male").prop('checked', false);
                $("#female").prop('checked', true);
            }

            if(isEmail === $("#emailAgree").val()){
                $("#emailAgree").prop('checked', true);
                $("#emailDisagree").prop('checked', false);
            }else if(isEmail === $("#emailDisagree").val()){
                $("#emailAgree").prop('checked', false);
                $("#emailDisagree").prop('checked', true);
            }

            if(isSns === $("#snsAgree").val()){
                $("#snsAgree").prop('checked', true);
                $("#snsDisagree").prop('checked', false);
            }else if(isSns === $("#snsDisagree").val()){
                $("#snsAgree").prop('checked', false);
                $("#snsDisagree").prop('checked', true);
            }

            for(let i = 0; i < countryList.length; i++){
                if (nation === countryList[i]){
                    $('#ntnltyCd').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < countryList.length; i++){
                if (nation === countryList[i]){
                    $('#residenceIataCountryCode').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < hpNationList.length; i++){
                if (hpNation === hpNationList[i]){
                    $('#mblFonCtrCd').find(`option[value=${hpNation}]`).attr('selected', true);
                }
            }

            $('#pwChange').on('click', function (){
                if(sendPw()){
                    // ???????????? ?????? ??????
                    $('#pwField').val($('#newPw').val());
                    $('.confirm_modal1').fadeOut();
                    $('body').css('overflow', '');
                }
            })

            function sendPw(){
                let pw = $("#newPw").val();
                let checkNumber = pw.search(/[0-9]/g);
                let checkEnglish = pw.search(/[a-z]/ig);
                if($('#oldPw').val() == '' || $('#newPw').val() == '' || $('#newPwCheck').val() ==''){
                    alert('????????? ??????????????????');
                    return false;
                }else{
                    if($('#oldPw').val() != oldPw){
                        alert('?????? ???????????? ????????? \n ????????? ??????????????????');
                        return false;
                    }
                    else{
                        if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)){
                            alert('??????+?????????+???????????? ???????????? 8?????? ?????? ???????????? ?????????.');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(checkNumber <0 || checkEnglish <0){
                            alert("????????? ???????????? ??????????????? ?????????.");
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(/(\w)\1\1\1/.test(pw)){
                            alert('?????? ????????? 4??? ?????? ???????????? ??? ????????????.');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(pw.search(userid) > -1){
                            alert("??????????????? ???????????? ?????????????????????.");
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }
                        if($('#newPw').val() != $('#newPwCheck').val()){
                            alert('??????????????? ???????????? ????????? ?????? ????????????');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }
                    }
                }
                return true;
            }
        })
    }

    let jsonData

    function updating(){
        jsonData = {
            data : {
                memIndex : idx,
                memUserpw : $('#pwField').val(),
                memZipcode : $("#pstNo").val(),
                memAddress1 : $("#adr1").val(),
                memAddress2 : $("#adr2").val(),
                memAddress3 : $("#adr3").val(),
                memEmail : $("#emAdr").val(),
                memGender : $("input[name=gndrCd]:checked").val(),
                memEmailIsagree : $("input[name=emRcvYn]:checked").val(),
                memBirth : $("#birth").val(),
                memSnsIsagree : $("input[name=smsRcvYn]:checked").val(),
                memPassport : $("#ntnltyCd").find("option:selected").val(),
                memNation : $("#residenceIataCountryCode").find("option:selected").val(),
                memHp : $("#mblFonNo").val(),
                memHpNation : $("#mblFonCtrCd").find("option:selected").val()
            }
        }
        $.ajax({
            url : "/api/user",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json",
            success : function (){
                alert('?????? ??????');
                location.href = `/pages/index`;
            }
        });
    }

    $("#update").click( () => {
        updating();
    })

    // ????????????
    $('.btnTypeB').click( ()=> {
        if(!confirm('?????? ???????????????????\n????????? ?????????, ??????, ?????? ????????? ???????????????.')){
            console.log('?????? ??????');
        }else {
            // let arrQnA = [];
            $.ajax({
                url : "/api/user/"+idx,
                type : "DELETE",
                success : function (){
                    location.href = '/pages/jinair/index';
                }
            })
            // ?????? ????????? ??????
            $.ajax({
                url : "/api/point/user/" + idx,
                type : "DELETE"
            })
            // // ?????? QnA ??????
            // $.get('/api/qna/userQna/'+idx, function (response){
            //     let arrQnAIndex = {};
            //     console.dir(response)
            //     for(let i = 0; response.data.length; i++){
            //         console.log(response.data[i].qnaIndex);
            //         arrQnAIndex.qaQnaindex = response.data[i].qnaIndex;
            //         arrQnA.push(arrQnAIndex);
            //     }
            //     console.dir(arrQnA)
            //     $.post({
            //         url: '/api/qnaAns/QnAofAns/delete',
            //         data: JSON.stringify(arrQnA),
            //         dataType: 'text',
            //         contentType: 'application/json'
            //     })
            // })
            // ?????? ?????? ??????
            $.ajax({
                url: "/api/userCoupon/deleteForUser/"+idx,
                type : "DELETE",
            })
            // ?????? ?????? ????????? ??????
            // $.ajax({
            //     url: "/api/reservation/deleteForUser/"+idx,
            //     type : "DELETE",
            // })
        }
    })

})(jQuery)