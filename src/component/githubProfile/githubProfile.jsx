import { useState } from 'react';
import Search from '../search/search';
import ProfileName from '../profileName/profileName';

function GitProfile(){
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='username-name'>
            <Search updateSearchTerm={setSearchTerm}/>
            <ProfileName userName= {searchTerm}/>
        </div>
    )

}

export default GitProfile;