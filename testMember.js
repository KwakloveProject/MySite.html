function joinSend() {
    const joinform = document.joinform;
    if (joinform.userid.value == "" || joinform.userid.value == null) {
    alert("아이디를 입력하세요");
    joinform.userid.focus();
    return false;
    }
    if (joinform.userpw.value == "" || joinform.userpw.value == null) {
    alert("비밀번호를 입력하세요");
    joinform.userpw.focus();
    return false;
    }
    if (joinform.username.value == "" || joinform.username.value == null) {
    alert("이름을 입력하세요");
    joinform.username.focus();
    return false;
    }
    if (joinform.userphone.value == "" || joinform.userphone.value == null)
    {
    alert("핸드폰 번호를 입력하세요");
    joinform.userphone.focus();
    return false;
    }
    joinform.submit();
    }