let myWindow =null;
function createDiv(event)
{

    if(myWindow === null)
    {
        myWindow =window.open("./realSite(Login).html","_top");
        //가져올 창의 html파일 이름, 그냥 윈도우,사이즈,lefr, right,width등등

        event.preventDefault();//이게 있어야 원도우 안 없어짐
    }
}
function createDiv2(event)
{

    if(myWindow === null)
    {
        myWindow =window.open("./realSite(Home).html","_top");
        //가져올 창의 html파일 이름, 그냥 윈도우,사이즈,lefr, right,width등등

        event.preventDefault();//이게 있어야 원도우 안 없어짐
    }
}
function createDiv3(event)
{

    if(myWindow === null)
    {
        myWindow =window.open("./realSite(JoinMemberShip).html","_top");
        //가져올 창의 html파일 이름, 그냥 윈도우,사이즈,lefr, right,width등등

        event.preventDefault();//이게 있어야 원도우 안 없어짐
    }
}
function createDiv4(event)
{

    if(myWindow === null)
    {
        myWindow =window.open("./realSite(List).html","_top");
        //가져올 창의 html파일 이름, 그냥 윈도우,사이즈,lefr, right,width등등

        event.preventDefault();//이게 있어야 원도우 안 없어짐
    }
}