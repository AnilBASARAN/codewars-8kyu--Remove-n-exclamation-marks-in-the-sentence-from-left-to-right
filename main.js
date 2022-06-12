function remove(s,n){
    s = s.split("")
  for(let i = 0; i < s.length; i++){
       if(s[i] == "!"){
        s[i] = "deleted"
        n = n-1
      if (n < 1) {
      break;
    }
      }
    }
   return s.filter(x=> x != "deleted").join("")
  }

  /*

  8kyu- Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

  Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

BEST SOLUTİONS

function remove(s,n){
  while(n) {
    s = s.replace("!", "");
    n--;
  }
  return s;
}


------------------------------------------------------------------------------

function remove(s,n){
  for (var i=0;i<n;i++) s=s.replace("!","");
  return s;
}

------------------------------------------------------------------------------
