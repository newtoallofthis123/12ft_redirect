chrome.action.onClicked.addListener((tab) => {
    let url = tab.url;
    // Doesn't work for chrome:// urls and nytimes and wsj
    const donot = [
        "chrome://", "chrome-extension://",
        "https://12ft.io/", "https://nytimes.com",
        "https://www.nytimes.com", "https://theatlantic.com",
        "https://www.theatlantic.com", "https://wsj.com",
    ]
    let newUrl = `https://12ft.io/${url}`;
    if (donot.some((d) => url.startsWith(d))) {
        newUrl = url;
    }
    chrome.tabs.create({ url: newUrl });
});