---
date created: Saturday, 1. June 2024, 03:57
date modified: Tuesday, 11. June 2024, 21:37
---

# Comment Policy for MyUniNotes

## 1. Purpose

The primary goal of MyUniNotes is to provide a supportive and inclusive environment for all users, regardless of their background. We are committed to creating a friendly, safe, and welcoming space for everyone, including students and enthusiasts of computer science. This comment policy outlines our expectations for user behavior and the consequences of unacceptable actions.

## 2. Our Community

We aim to foster a community where everyone feels encouraged to participate, share knowledge, and learn from each other. Positive and respectful interactions are essential to building a collaborative and productive learning environment.

## 3. Expected Behavior

The following behaviors are expected and requested of all community members:

- **Respectful Communication**: Always interact with respect and kindness. Offensive, abusive, or discriminatory language will not be tolerated.
- **Relevance**: Keep comments relevant to the topic at hand. Off-topic comments may be removed to maintain the focus of discussions.
- **Constructive Feedback**: Provide helpful and constructive feedback. Aim to contribute positively to the discussion by offering insights, suggestions, and support.
- **Privacy**: Protect your privacy and the privacy of others. Do not share personal information such as addresses, phone numbers, or email addresses in the comments.
- **Participation**: Engage authentically and actively. Your contributions help maintain the health and longevity of our community.

## 4. Unacceptable Behavior

The following behaviors are considered unacceptable and will not be tolerated:

- **Harassment**: Personal attacks, harassment, and bullying are strictly prohibited.
- **Discrimination**: Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes and language are not allowed.
- **Spam**: Avoid posting spam, advertisements, or self-promotional content.
- **Inappropriate Content**: Posting or displaying sexually explicit or violent material is forbidden.
- **Privacy Violations**: Posting or threatening to post other people's personally identifying information ("doxing") is prohibited.

## 5. Consequences of Unacceptable Behavior

Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated. Actions may include:

- Immediate removal of comments that violate this policy.
- Temporary or permanent banning from commenting on the site.

## 6. Reporting Guidelines

If you are subject to or witness unacceptable behavior, or have any other concerns, please notify the site administrator as soon as possible. We are here to help and ensure the safety and well-being of all community members.

## 7. Addressing Grievances

If you feel you have been falsely or unfairly accused of violating this comment policy, you should notify the site administrator with a concise description of your grievance. Your grievance will be handled in accordance with our existing governing policies.

## 8. Scope

We expect all participants to abide by this comment policy in all community interactions, both online and offline. This includes but is not limited to comments on the website, emails, and other forms of communication.

## 9. Contact Information

For any concerns or questions regarding this comment policy, please contact the site administrator

Thank you for helping us create a vibrant, supportive, and respectful learning community. Your contributions are invaluable and help us continuously improve the quality of our content and discussions.

---

[Return to Home](https://myuninotes.com)

<!-- DISQUS SCRIPT COMMENT START -->

<hr style="border: none; height: 2px; background: linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0); margin-top: 4rem; margin-bottom: 5rem;">
<div id="disqus_thread"></div>
<script>
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://myuninotes.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<!-- DISQUS SCRIPT COMMENT END -->

<!-- Sliding Banner START -->

<div id="slidingBanner" class="banner">
  <p class="banner-text">
    Explore MyUniNotes for comprehensive study guides and academic resources tailored for Computer Science students!
  </p>
  <svg id="closeBanner" class="arrows">
    <path d="M0 20 L20 42 L40 20"></path>
    <path d="M0 40 L20 62 L40 40"></path>
  </svg>
</div>

<script>
  // JavaScript to slide down the banner on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    if (randomNumber === 1) {
      setTimeout(function() {
        const banner = document.getElementById('slidingBanner');
        if (banner) {
          banner.classList.add('show');
        }
      }, 1000); // Adjust the delay as needed

      const closeBanner = document.getElementById('closeBanner');
      if (closeBanner) {
        closeBanner.addEventListener('click', function() {
          const banner = document.getElementById('slidingBanner');
          if (banner) {
            banner.classList.remove('show');
            banner.style.visibility = 'hidden';
          }
        });
      }
    } else {
      // Remove the banner from the DOM if the random number is not 1
      const banner = document.getElementById('slidingBanner');
      if (banner) {
        banner.remove();
      }
    }
  });
</script>

<!-- Sliding Banner END -->
