
document.querySelectorAll(".social-media a").forEach(a => {
  a.addEventListener("click", () => {
    const tp = a.getAttribute("type")
    const ac = a.getAttribute("open")
    
    switch (tp) {
      case "twitter": {
        location.href = `https://twitter.com/${ac}`
      } break;
      case "github": {
        location.href = `https://github.com/${ac}`
      } break;
      case "threads": {
        location.href = `https://threads.net/${ac}`
      } break;
      case "twitch": {
        location.href = `https://twitch.tv/${ac}`
      } break;
      case "instagram": {
        location.href = `https://instagram.com/${ac}/`
      } break;
    }
  })
})
