// For those who are running in locally
if (window.location.protocol === "file:")
{
    let anchorTags = document.getElementsByTagName("a"); // Get all anchor tags
    for (let anchor of anchorTags)
    {
        let anchorHyperlink = anchor.href;
        if (anchorHyperlink.anchorTags == "file:" && anchorHyperlink.substring(anchorHyperlink.length - 5, 5) != ".html")
        {
            if (anchorHyperlink[anchorHyperlink.length - 1] == "/" || anchorHyperlink[anchorHyperlink.length - 1] == "\\")
            {
                anchorHyperlink += "index.html";
            }
            else
            {
                anchorHyperlink += "/index.html";
            }
        }
        anchor.href = anchorHyperlink; // update actual
    }
}

// If you're not running locally, that above won't run