async function getStackExchangeUsers() {
    const apiUrl = "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow";

    // Make the API call
    const response = await fetch(apiUrl);

    // Parse the response into JavaScript objects
    const data = await response.json();
    const usersResponse = data.items.map(item => ({
        accountId: item.account_id,
        displayName: item.display_name,
        profileImage: item.profile_image,
        reputation: item.reputation
    }));

    // Output the user's display name and reputation
    let i=0;
    
    const nxtBtn=document.getElementById('next');
    nxtBtn.addEventListener('click',()=>{
        const User = usersResponse[i];
        document.getElementById('userName').textContent = User.displayName;
        document.getElementById('userRep').textContent = User.reputation;
        i++;
    })
    const prvBtn=document.getElementById('previous');
    prvBtn.addEventListener('click',()=>{
        if(i==0){window.alert("There is no previous user!!");}
        else{
            const User = usersResponse[i];
            document.getElementById('userName').textContent = User.displayName;
            document.getElementById('userRep').textContent = User.reputation;
            i--;
        }
    })
    console.log(`User: ${User.displayName}, Reputation: ${User.reputation}`);
}

getStackExchangeUsers();