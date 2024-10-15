let profileData = {
    name: '',
    url: '',
    about: '',
    location: '',
    followerCount: '',
    connectionCount: ''
};

// Logic to extract profile data from the current LinkedIn page
// ...

console.log("content.js files is working!");

// document.addEventListener('load', () => {

//   console.log('Page is fully loaded!');
// });

setTimeout(delayData,20000);

// document.addEventListener('DOMContentLoaded',function(){

//     console.log("Page is loaded!");

    const headingElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
    // For getting the name of the user
    const innerText = headingElement.textContent;
    profileData.name = innerText;
    
    console.log("The value of the name is: ",innerText);

    
    
    // To get the about data of the linkedIn
    // const hiddenTextElement = document.querySelector('.QPriypoPxOFvmnjsoqRxkXeeNBXMwoasTM span[aria-hidden="true"]');
    // const about = hiddenTextElement.textContent;
    // console.log("The value of the hiddenTextElement : ",hiddenTextElement);
    // console.log("the value of about is : ",about);



    // To get the follower count
    // const followerSpan = document.querySelector('.text-body-small.t-black--light.inline-block .t-bold');
    // const followerCount = followerSpan.textContent;
    // console.log("followerspa: ",followerSpan);
    // console.log("Total followers of the user is : ",followerCount); 
    
// })

function delayData(){
  console.log("Delayed data executed!")
  
  const followerSpan = document.querySelector('.text-body-small.t-black--light.inline-block .t-bold');
  if(followerSpan){
    
  const followerCount = followerSpan.textContent;
  console.log("followerspa: ",followerSpan);
  console.log("Total followers of the user is : ",followerCount); 
  profileData.followerCount = followerCount;
  profileData.connectionCount = '500+';
  }else{
    profileData.followerCount = "User don't have any followers";
    profileData.connectionCount = "500+";
  }

  console.log("the data for the about is executed!!")
  // To get the about data of the linkedIn
    const hiddenTextElement = document.querySelector('.QPriypoPxOFvmnjsoqRxkXeeNBXMwoasTM span[aria-hidden="true"]');
    if(hiddenTextElement){
    const about = hiddenTextElement.textContent;
    profileData.about = about;
    console.log("The value of the hiddenTextElement : ",hiddenTextElement);
    console.log("the value of about is : ",about);
    
    }else{
      profileData.about = "No about section available"
    }


  //  for the location
  const locationSpan = document.querySelector("span.text-body-small.inline.t-black--light.break-words");
    if(locationSpan){
      profileData.location = locationSpan.textContent.trim();
    }else{
      profileData.location = "No location is available for the specified user!"
    }


    // for the url
    const currentUrl = window.location.href;
    profileData.url = currentUrl.toString();
    

    console.log("the final data is : ",profileData);
    chrome.runtime.sendMessage(profileData);

//   const element = document.querySelector(".CJcpJShEPtvFSCHsalxWzNixdIdoEAqbWA mt2");

// if (element) {
//   console.log("Element found:", element);
// } else {
//   console.log("Element not found");
// }
   
}
  
   
// const headingElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
//     // For getting the name of the user
//     const innerText = headingElement.textContent;
    
//     console.log("Thee value of the name is: ",innerText);
    
    // To get the about data of the linkedIn
    // const hiddenTextElement = document.querySelector('span[aria-hidden="true"]');
    // const about = hiddenTextElement.textContent;
    
    // console.log(about);

//     const hiddenTextElement = document.querySelector('.QPriypoPxOFvmnjsoqRxkXeeNBXMwoasTM span[aria-hidden="true"]');
//     console.log("hidden text element",hiddenTextElement );

// if (hiddenTextElement.offsetWidth > 0 && hiddenTextElement.offsetHeight > 0) {
//   // Element is visible, consider if accessing is appropriate
//   const innerText1 = hiddenTextElement.textContent;
//   console.log(innerText1);
// } else {
//   console.log("Content might be hidden from assistive technologies.");
// }


// chrome.runtime.sendMessage(profileData);