    // 1 * * * *
    // * 2 * * *
    // * * 3 * *
    // * * * 4 *
    // * * * * 5





    rows = 5
    for(i=1;i<=rows;i++){
        res = ""
        for(j=1;j<=rows;j++){
            if(i==j){
                res += i + " "
            }
            else{
                res += "* "
            }
        }
        console.log(res)
    }





            //        1
            //      2 2
            //    3   3
            //  4     4
            //    3   3
            //      2 2
            //        1



            rows = 5
            for(i=1;i<=2*rows-1;i++){
                res = ""
                value = (i<=rows)? i : 2*rows-i
                gap = (i<=rows)? rows-i+1 : i-rows+1;
                for(j=1;j<gap;j++){
                    res += "  "
                }
                for(k=1;k<=value;k++){
                    if( k==1 ||i == k || i+k == 2*rows  ){
                        res+=i+" ";
                    }
                    // else if(i>=rows ){
                    //     res+=i--+" "
                    // }
                    else {
                        res+="  ";
                    }
                }
                console.log(res)
            }