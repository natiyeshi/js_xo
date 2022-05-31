  
function clear(){
    document.getElementById("m11").innerHTML = "";
    document.getElementById("m12").innerHTML = "";
    document.getElementById("m13").innerHTML = "";
    document.getElementById("m21").innerHTML = "";
    document.getElementById("m22").innerHTML = "";
    document.getElementById("m23").innerHTML = "";
    document.getElementById("m31").innerHTML = "";
    document.getElementById("m32").innerHTML = "";
    document.getElementById("m33").innerHTML = "";
}
fill_user = (val) =>{
    var m11 = document.getElementById("m11");
    var m12 = document.getElementById("m12");
    var m13 = document.getElementById("m13");
    var m21 = document.getElementById("m21");
    var m22 = document.getElementById("m22");
    var m23 = document.getElementById("m23");
    var m31 = document.getElementById("m31");
    var m32 = document.getElementById("m32");
    var m33 = document.getElementById("m33");

        switch(val){
            case 11: if(m11.innerHTML != "") {return false;}
                    m11.innerHTML = "X";
                    return true;
          
            case 12: if(m12.innerHTML != "") {return false}
                    m12.innerHTML = "X";
                    return true;
        
            case 13: if(m13.innerHTML != "") {return false}
                    m13.innerHTML = "X";
                    return true; 
            case 21: if(m21.innerHTML != "") {return false}
                    m21.innerHTML = "X";
                    return true
            case 22: if(m22.innerHTML != "") {return false}
                    m22.innerHTML = "X";
                    return true
                
            case 23: if(m23.innerHTML != "") {return false}
                    m23.innerHTML = "X";
                    return true 
                    
            case 31: if(m31.innerHTML != "") {return false}
                    m31.innerHTML = "X";
                    return true 
                    
            case 32: if(m32.innerHTML != "") {return false}
                    m32.innerHTML = "X";
                    return true 
                    
            case 33: if(m33.innerHTML != "") {return false}
                    m33.innerHTML = "X";
                    return true 
             default : return false       
            }
    
        }



fill_rand = () =>{
    var m11 = document.getElementById("m11");
    var m12 = document.getElementById("m12");
    var m13 = document.getElementById("m13");
    var m21 = document.getElementById("m21");
    var m22 = document.getElementById("m22");
    var m23 = document.getElementById("m23");
    var m31 = document.getElementById("m31");
    var m32 = document.getElementById("m32");
    var m33 = document.getElementById("m33");
    bool = true;
    while(bool){
        let rand =Math.floor(Math.random() * 20) + 1;
        switch(rand){
            case 1: if(m22.innerHTML != "") {break;}
                    m22.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 2: if(m11.innerHTML != "") {break;}
                    m11.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 3: if(m33.innerHTML != "") {break;}
                    m33.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 4: if(m12.innerHTML != "") {break;}
                    m12.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 5: if(m12.innerHTML != "") {break;}
                    m12.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 6: if(m13.innerHTML != "") {break;}
                    m13.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 7: if(m32.innerHTML != "") {break;}
                    m32.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 8: if(m23.innerHTML != "") {break;}
                    m23.innerHTML = "O";
                    bool = false;
                    break; 
                    
            case 9: if(m31.innerHTML != "") {break;}
                    m31.innerHTML = "O";
                    bool = false;
                    break; 
             default : break;       
            }
    
        }
     
}

score = (send) =>{
        document.getElementById(send).innerHTML = ++document.getElementById(send).innerHTML;
}

win = () =>{
    alert("you win")
    clear()
    score("you")

}
lose = () =>{
    alert("you lose")
    clear()
    score("computer")
}

game_over = () =>{
    var m11 = document.getElementById("m11");
    var m12 = document.getElementById("m12");
    var m13 = document.getElementById("m13");
    var m21 = document.getElementById("m21");
    var m22 = document.getElementById("m22");
    var m23 = document.getElementById("m23");
    var m31 = document.getElementById("m31");
    var m32 = document.getElementById("m32");
    var m33 = document.getElementById("m33");
    if(m11.innerHTML==m12.innerHTML && m11.innerHTML == m13.innerHTML || m11.innerHTML == m21.innerHTML && m11.innerHTML == m31.innerHTML || m11.innerHTML == m22.innerHTML && m11.innerHTML == m33.innerHTML){
        if(m11.innerHTML == "O")
           setTimeout(lose,250);
        else if(m11.innerHTML =="X")
            setTimeout(win,250)
        
        return true;    
    }
    if(m22.innerHTML==m12.innerHTML && m22.innerHTML == m32.innerHTML || m22.innerHTML == m21.innerHTML && m22.innerHTML == m23.innerHTML){
        if(m22.innerHTML == "X")
             setTimeout(win,250);
        else if(m22.innerHTML =="O")
            setTimeout(lose,250);
        
            return true;    
    }
    if(m33.innerHTML==m13.innerHTML && m33.innerHTML == m23.innerHTML || m33.innerHTML == m32.innerHTML && m33.innerHTML == m31.innerHTML){
        if(m33.innerHTML == "X")
        setTimeout(win,250);
        else if(m33.innerHTML =="O")
        setTimeout(lose,250);
        
        return true;    
    }
    if(m31.innerHTML == m22.innerHTML && m31.innerHTML == m13.innerHTML){
        if(m31.innerHTML == "X"){
            setTimeout(win,250);
        } else if(m31.innerHTML == "O"){
            setTimeout(lose,250);
        }
        
        return true;
    }
     return false;
}


var counter = 0;

d = (val) =>{
    counter ++;
    bool =false
    if(fill_user(val)){
        fill_rand();
        game_over()
       } 
       


    }
    
       
    






