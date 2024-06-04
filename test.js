// 아이디 입력폼에서 커서 다른데로 이동했을때 콜함수(onkeyup)
// 아이디 정규식
function userIdCheck(){
  const userId = document.querySelector("#userId"); 
  const userIdInfo = document.querySelector("#userIdInfo"); 
  // 영문 숫자 조합 8자리 이상
  let nameExp =  /^[a-z0-9]{4,12}$/;
  if(!userId.value.match(nameExp))
    {
      userIdInfo.innerHTML=` a~z,0~9로 시작하는 4~12자리`;
        return false;
    }
  else if(userId.value ==="")
    {
      userIdInfo.innerHTML =`필수입력항목입니다.`; 
      return false; 
    }
    else
    {
      userIdInfo.innerHTML =``;
      return true;  
    }
}
// 패스워드 입력폼에서 커서 다른데로 이동했을때 콜함수
// 패스워드 정규식
function userPWCheck(){
  const userPW = document.querySelector("#userPW"); 
  const userPWInfo = document.querySelector("#userPWInfo"); 
  // 영문 숫자 조합 8자리 이상
  let nameExp =  /^[a-z0-9]{4,12}$/;
  if(!userPW.value.match(nameExp))
    {
        userPWInfo.innerHTML=` a~z,0~9로 시작하는 4~12자리`;
        return false;
    }
 
  
  else if(userPW.value ==="")
    {
      userPWInfo.innerHTML = `필수입력항목입니다.`; 
      return false; 
    }
    else
    {
      userPWInfo.innerHTML =``;
      return true;  
    }
  
  
}
// 이름 정규식
function userNameCheck()
{
    const userName=document.querySelector(`#userName`);
    const userNameInfo=document.querySelector(`#userNameInfo`);
    //한글2~4문자
    let nameExp =  /^[가-힣]{2,4}$/;
    if(!userName.value.match(nameExp))
    {
        userNameInfo.innerHTML=`한글 2~4문자 입력바람`;
        return false;
    }
    else if(userName.value==="")
    {
        userNameInfo.innerHTML=`이름을 빈칸으로 등록하시면 안됩니다.`
        return false;
    }
    else
    {
        userNameInfo.innerHTML=``
        return true;
    }

}
// 이메일 정규식
function userEmailCheck()
{
    const userEmail=document.querySelector(`#userEmail`);
    const userEmailInfo=document.querySelector(`#userEmailInfo`);
    //이메일 정규식 . 이후 세글자 필수 (com)
    let nameExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3,})$/i;
    if(!userEmail.value.match(nameExp))
    {
        userEmailInfo.innerHTML=`유효하지 않은 이메일 주소입니다.`;
        return false;
    }
    else if(userEmail.value==="")
    {
        userEmailInfo.innerHTML=`이메일을 빈칸으로 등록하시면 안됩니다.`
        return false;
    }
    else
    {
        userEmailInfo.innerHTML=``
        return true;
    }

}


// 생일 정규식
function userBirthCheck()
{
    const userBirth=document.querySelector(`#userBirth`);
    const userBirthInfo=document.querySelector(`#userBirthInfo`);
    //숫자6자리
    let nameExp =/^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;
    if(!userBirth.value.match(nameExp))
    {
        userBirthInfo.innerHTML=`정확한 생년월일 6자리를 입력해주세요`;
        return false;
    }
    else if(userBirth.value==="")
    {
        userBirthInfo.innerHTML=`생년월일을 빈칸으로 등록하시면 안됩니다.`
        return false;
    }
    else
    {
        userBirthInfo.innerHTML=``
        return true;
    }
}
// 핸드폰번호 정규식
function userPhoneNumCheck()
{
    const userPhoneNum=document.querySelector(`#userPhoneNum`);
    const userPhoneNumInfo=document.querySelector(`#userPhoneNumInfo`);
    //010-0000-0000 형식으로 쓰시오(-)포함
    let nameExp = /^010-[0-9]{4}-[0-9]{4}$/;
    if(!userPhoneNum.value.match(nameExp))
    {
        userPhoneNumInfo.innerHTML=` 010-0000-0000 형식으로(-포함하여) 쓰시오 `;
        return false;
    }
    else if(userPhoneNum.value==="")
    {
        userPhoneNumInfo.innerHTML=`핸드폰번호를 빈칸으로 등록하시면 안됩니다.`
        return false;
    }
    else
    {
        userPhoneNumInfo.innerHTML=``
        return true;
    }
}

//모든내용확인하고 이상이 없으면 서버로 전송한다.
//이상이 있으면 경고창을 주고 전송버튼의 이벤트 기능을 막는다(전송: 서버로 전송하는 기능)
function allCheck(){ 

  if(userIdCheck() && userPWCheck() && userBirthCheck() && userEmailCheck() &&  userNameCheck()&&  userPhoneNumCheck()){
    alert(`${userId.value}\n${userPW.value}\n${userEmail.value}\n${userName.value}\n${userPhoneNum.value}`);
   document.regForm.submit();
   return true;
  }else{
    alert("가입내용이 문제가 있습니다. 점검해보세요.");
    event.preventDefault(); 
  }
}
function allCheck2(event){ 
    alert("들어왔어요")

  if(userPWCheck() && userEmailCheck() && userNameCheck()&& userPhoneNumCheck()){
		alert("들어왔어요")
    alert(`${userPW.value}\n${userEmail.value}\n${userName.value}\n${userPhoneNum.value}`);
   document.modifyForm.submit();
   return true;
  }else{
    alert("가입내용이 문제가 있습니다. 점검해보세요.");
    event.preventDefault(); 
  }
}

 function idCheck(userid){
 if(userid == ""){
 alert("아이디를 입력해 주세요.");
 document.regForm.userid.focus();
 }else{
	 url="idCheck.jsp?userid=" + userid;
 window.open(url,"post","width=300,height=150");
 }
 }