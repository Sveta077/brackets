module.exports = function check(str, bracketsConfig)
{ let arr = [];
  let result = true; 
  for (let s of str.split('')) 
  {
    for (let e of bracketsConfig)
    {
        if (e[1]==s ) 
        {   r=arr.slice(-1); 
            if ( r != e[0] && e[0] !=s )  
                    { 
                      result= false; break;
                    }  
            if (r == e[0]) {arr.pop();break;} 
         }   
        if (e[0]==s) {arr.push(s); break} 
    }  
    if (!result) break;
  }; 
  return result && arr.length==0; 
}

