// For those who are running in locally
if (window.location.protocol === "file:")
{
    let anchorTags = document.getElementsByTagName("a"); // Get all anchor tags
    for (let anchor of anchorTags)
    {
        if (anchor.href.anchorTags != "http:" || anchor.href.anchorTags != "https:")
        {
            if (anchor.href[anchor.href.length - 1] == "/" || anchor.href[anchor.href.length - 1] == "\\")
            {
                anchor.href += "index.html";
            }
            else
            {
                anchor.href += "/index.html";
            }
        }
    }
}

// If you're not running locally, that above won't run