
const url = "https://api.github.com/users";

const getdata = async () => {
    let inp_field = document.querySelector("#inp_field").value;
    let heading = document.querySelector("#login");
    let name = document.querySelector("#name");
    let bio = document.querySelector("#bio");
    let follower = document.querySelector("#follower");
    let following = document.querySelector("#following");
    let repo = document.querySelector("#repo");
    let location = document.querySelector("#location");
    let img = document.querySelector("#img");
    let area=document.querySelector(".profile_area");
    let load=document.querySelector("#load");

    try {
        load.innerHTML="LOADING....";
        let resp = await fetch(`${url}/${inp_field}`);
        let data = await resp.json();
        load.style.display="none";
        
       

        if (resp.status === 200) {
            heading.textContent = data.login;
            name.textContent = data.name;
            bio.textContent = data.bio;
            follower.textContent = `Followers: ${data.followers}`;
            following.textContent = `Following: ${data.following}`;
            repo.textContent = `Resporsitories: ${data.public_repos}`;
            location.textContent = data.location;
            img.innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture" style="width:50px;height:50px;border-radius:50%;">`;
        } else {
            area.innerHTML="NOT MATCH FOUND!";
        }
    } catch (error) {
       
    }
};