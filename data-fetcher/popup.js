const messageDiv = document.getElementById('messageDiv');
document.getElementById('scrapeButton').addEventListener('click', async () => {
    const profileLinks = document.getElementById('profileLinks').value.split(',');
    for (const link of profileLinks) {
        await scrapeProfile(link);
    }
});

chrome.runtime.onMessage.addListener((profileData) => {
    console.log('Received profile data:', profileData);
    // Process the profile data here, e.g., send it to your API
    // http://localhost:3000/api/profiles/
    fetch('http://localhost:3000/api/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.innerText = data;
        console.log("from the popup.js",data)})
    .catch(error => {
        messageDiv.innerText = error;
        console.error('from the popup.js',error)});
  });

async function scrapeProfile(link) {
    chrome.tabs.create({ url: link, active: false }, async (tab) => {
        // await new Promise(resolve => {
        //     chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
        //         if (tabId === tab.id && changeInfo.status === 'complete') {
        //             chrome.scripting.executeScript({
        //                 target: { tabId: tab.id },
        //                 files: ['content.js']
        //             }, (results) => {
        //                 if (chrome.runtime.lastError) {
        //                     console.log('popup.js file: if is executed');
        //                     console.error(chrome.runtime.lastError);
        //                 } else {
        //                     console.log('popup.js file: else is executed');
        //                     const profileData = results[0].result;
        //                     fetch('http://localhost:3000/api/profiles/', {
        //                         method: 'POST',
        //                         headers: {
        //                             'Content-Type': 'application/json'
        //                         },
        //                         body: JSON.stringify(profileData)
        //                     })
        //                     .then(response => response.json())
        //                     .then(data => console.log(data))
        //                     .catch(error => console.error(error));
        //                 }
        //                 resolve();
        //             });
        //         }
        //     });
        // });
    });




}