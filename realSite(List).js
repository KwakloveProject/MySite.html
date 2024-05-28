function write()
{
    
  let number=document.querySelectorAll(`#number`);
  for(let i=0;i<number.length;i++)
  {
     number[i].innerHTML=`${i+1}`
  }
  let parkName=document.querySelectorAll(`#parkName`);
  for(let i=0;i<parkName.length;i++)
  {
      parkName[i].innerHTML=`불암산`
  }
  let title=document.querySelectorAll(`#title`);
  for(let i=0;i<parkName.length;i++)
  {
      title[i].innerHTML=`아직 어린 태백산국립공원을 응원합니다.`
  }
  let user=document.querySelectorAll(`#user`);
  for(let i=0;i<parkName.length;i++)
  {
      user[i].innerHTML=`안준모`
  }
  let count=document.querySelectorAll(`#count`);
  for(let i=0;i<parkName.length;i++)
  {
      count[i].innerHTML=`52`
  }
  for(let i=0;i<parkName.length;i++)
  {
  let createDate=document.querySelectorAll(`#createDate`);
  createDate[i].innerHTML=`2022.12.20`
  }
 }
