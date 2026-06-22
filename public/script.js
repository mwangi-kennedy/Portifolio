document.oncontextmenu = () => {
    alert("Right-click is disabled on this page.");
    return false;
}

document.onkeydown = (e) => {
    if (e.key === "F12") {
        alert("OOps! You can't inspect this page.");  
        return false;
    }

    if (e.ctrlKey && e.key === "u") {
        alert("Sorry you can't view the source code of this page.");
        return false;
    }

    if (e.ctrlKey && e.key === "c") {
        alert("Kindly refrain from copying content from this page.");  
        return false;
    }

    if(e.ctrlKey && e.key === "v") {
        alert("Kindly refrain from pasting content here.");
        return false;
    }


}
