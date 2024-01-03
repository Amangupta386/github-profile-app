import axios from 'axios';
import { useEffect, useState } from 'react';

function useProfileName(userName){
    
    const[profileName, setProfileName] = useState({});

    async function downloadUseName(){
        try{
            let response;
            
            if(userName){
                
                response = await axios.get(`https://api.github.com/users/${userName}`)
            }
    
            
            setProfileName(response.data);
              

        }catch(e){
            console.log(`ERROR: ${e}`);
          }
    }

    useEffect(() => {
        downloadUseName();
      }, [userName]);

    return [profileName];
}

export default useProfileName;