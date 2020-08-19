import React from 'react';
import Button from '@material-ui/core/Button';

function payment(props) {
    function onClickPayment(){
        //1. 가맹점 식별하기
     const {IMP} = window; //생략 가능
     IMP.init('imp86426575'); //IMP 객체의 init 함수
      // 2. 결제 데이터 정의하기
      const data = { //IMP.request_pay 함수 호출시 첫 번째 인자로 전달
        pg: 'inicis', // version 1.1.0부터 지원.
        pay_method: 'card', //결제수단
        merchant_uid: `mid_${new Date().getTime()}`, //주문 번호 
        name: '주문명:결제테스트',//주문명 
        amount: 100, //판매 가격
        buyer_email: 'iamport@siot.do',
        buyer_name: '김영은',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456'
      };

      //4. 결제 창 호출하기
      IMP.request_pay(data, callback); //IMP.request_pay 함수 호출시, 두 번째 인자로 전달

    }

    //3. 콜백 함수 정의하기 
    function callback(response){
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        if(success){
            alert("결제 성공")
        }else{
            alert('결제 실패: ${error_msg}')
        }

    }

    return (
      <div>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
        <Button
          onClick={onClickPayment}
          variant="contained"
          color="primary"
          disableElevation
        >
          결제하기
        </Button>
      </div>
    );
}

export default payment;

//Identifier expected - 식별자가 필요합니다
