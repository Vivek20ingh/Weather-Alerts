const form = document.getElementById('search-button');






// form.addEventListener('click', (e) => {
//     e.preventDefault()
//     const search = document.getElementById("form1").value

//     var key = search.split(' ').join('')
//     alert(key);
//     fetch("https://api.github.com/users/"+key)
//     .then((result)=> result.json())
//     .then((data) =>
//     {
//         var r=data.avatar_url
//         var img = document.createElement("img");
 
//        img.src =r;
//        var src = document.getElementById("ankit");
//         src.appendChild(img)
//         console.log(r);
//     })
// })


class Fetch {
    async getCurrent(input) {
        const myKey = 'd11be43a96a731cce3bb9835dfb17aa4'
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }

const rock=new Fetch();
rock.getCurrent('india');
rock.getCurrent('Delhi');
  

