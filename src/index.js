// For those who are running in locally
if (window.location.protocol === "file:")
{
    let anchorTags = document.getElementsByTagName("a"); // Get all anchor tags
    anchorTags.array.forEach(anchor => 
    {
        if (anchor.href[-1] == "/" || anchor.href[-1] == "\\")
        {
            anchor.href += "index.html";
        }
        else
        {
            anchor.href += "/index.html";
        }
    });
}

// If you're not running locally, that above won't run