 int lexicalConvert(string str)
        {
    int result = 0;
    for(int i = 0; i < 3; ++i)
            {
        result = result * 26 + str[i] - 'A';
            }  
        return result;
        }
    
    
    
int lexicalConvert2(string str){
       int res = 0;
       for(int i = 2; i >= 0; --i){
           res  = res * 26 +  (int)(str[i] - 'A');
       }  
        return res;
   }

     string lexicalRevert(int res){
        string str ="";
     str.resize(3);
        for (int i = 2; i >= 0; --i)
        {
            char c = res % 26 + 'A';
            res /= 26 ;
            str+= c;
            
        }
        return str;
    }   
 string lexicalRevert(int res){
        string str ="";
     str.resize(3);
        for (int i = 2; i >= 0; --i)
        {
            char c = res % 26 + 'A';
            res /= 26 ;
            str[i] = c;
            
        }
        return str;
    }   