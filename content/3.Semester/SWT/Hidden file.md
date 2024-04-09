---
tags: 
fach: 
date created: Tuesday, 9. April 2024, 19:00
date modified: Tuesday, 9. April 2024, 19:05
---

# Password Protected Markdown

<!-- Hidden content div -->
<div id="protectedContent" style="display:none;">
This is my hidden content in the Markdown file that will be revealed only with the correct password.
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var password = prompt("Please enter the password to view the content:");
    if (password === "buneamk") {
        document.getElementById('protectedContent').style.display = 'block';
    } else {
        alert("Incorrect password. Access denied.");
        document.getElementById('protectedContent').style.display = 'none';
    }
});
</script>
