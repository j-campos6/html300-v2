//File containing data and logic for business card template assignment

//Fetching data from json file directly to avoid hard-coding here
var folksJSON;
fetch("../data/data.json").then(
    function(u){ return u.json();}
  ).then(
    function(json){
      folksJSON = json;
      //Test to verify data was passing
      //console.log(folksJSON);

      //Data was already parsed from above, declaring folks variable below w/o need for addl parsing
      var folks = folksJSON;

      //console log to check parsed data is output of array of objects
      //console.log(folks);

      //defining section container where bizcard will be appended
      var container = document.querySelector('.template-hook')
      //testing to verify selector worked
      //console.log(container);

      //Looping through each element of array
      folks.forEach(function(el) {
        //console.log(el)

      //defining first inner HTML div and its corresponding class
      let bizcard = document.createElement('div');
      bizcard.className = 'dogCard';

      //definning the remaining of the innerHTML
      bizcard.innerHTML =`

        <div class="image-innercard">
          <img src="img/headshot.jpg" alt="small dog">
          <h2>${el.name}</h2>
          <h3>${el.jobTitle}</h3>
        </div>

        <div class="info-innercard">
          <p><b>Company:</b> ${el.company}</p>
          <p><b>Experience:</b> ${el.experience}</small></p>
          <p><b>School:</b> ${el.school}</small></p>
          <p><b>Major:</b> ${el.major}</small></li>
          <p><b>Email:</b> ${el.email}</small></p>

          <div class="logo">
            <p>${el.linkedInUrl}</small></p>
          </div>
        </div>

      `;


      //document.main.innerHTML = bizcard;

      //console log to test if html is outputting correctly
       console.log(bizcard);

       //Appending bizcard to html
        container.append(bizcard);
       });
    }
  )
