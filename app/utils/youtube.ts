export const getYoutubeEmbedUrl = (url: string): string => {
    try {
      if (!url) return ""
  
      const parsedUrl = new URL(url)
  
      // Handles youtu.be links like https://youtu.be/abc123
      if (parsedUrl.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`
      }
  
      // Handles standard YouTube links
      if (parsedUrl.hostname.includes("youtube.com")) {
        // Regular video link like https://www.youtube.com/watch?v=abc123
        const videoId = parsedUrl.searchParams.get("v")
        if (videoId) return `https://www.youtube.com/embed/${videoId}`
  
        // Shorts link like https://www.youtube.com/shorts/abc123
        const pathSegments = parsedUrl.pathname.split("/")
        const shortsIndex = pathSegments.indexOf("shorts")
        if (shortsIndex !== -1 && pathSegments[shortsIndex + 1]) {
          return `https://www.youtube.com/embed/${pathSegments[shortsIndex + 1]}`
        }
      }
  
      return ""
    } catch {
      return ""
    }
  }
  