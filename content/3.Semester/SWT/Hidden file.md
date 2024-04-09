---
tags: 
fach: 
---

# password protected markdown

<div id="protectedContent" style="display:none;">
This is my hidden content in the Markdown file.
</div>

<script>
var password = prompt("Please enter the password to view the content:");
if (password === "buneamk") {
    document.getElementById("protectedContent").style.display = "block";
} else {
    alert("Incorrect password. Access denied.");
    document.getElementById("protectedContent").style.display = "none";
}
</script>
