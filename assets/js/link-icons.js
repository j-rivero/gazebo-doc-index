document.addEventListener('DOMContentLoaded', function() {
  // Get all item title links
  const links = document.querySelectorAll('a.item-title');
  
  links.forEach(function(link) {
    const href = link.getAttribute('href');
    if (!href) return;
    
    let iconClass = '';
    
    // Determine icon based on URL patterns
    if (href.includes('github.com')) {
      iconClass = 'fa-github';
    } else if (href.includes('youtube.com') || href.includes('youtu.be')) {
      iconClass = 'fa-youtube-play';
    } else if (href.includes('vimeo.com')) {
      iconClass = 'fa-vimeo-square';
    } else if (href.includes('discourse.openrobotics.org')) {
      iconClass = 'openrobotics-logo';
    } else if (href.includes('discourse.org') || href.includes('community.gazebosim.org')) {
      iconClass = 'fa-comments';
    } else if (href.includes('answers.gazebosim.org') || href.includes('answers.ros.org')) {
      iconClass = 'fa-question-circle';
    } else if (href.includes('docs.google.com')) {
      iconClass = 'fa-google';
    } else if (href.includes('drive.google.com')) {
      iconClass = 'fa-google-drive';
    } else if (href.includes('.pdf')) {
      iconClass = 'fa-file-pdf-o';
    } else if (href.includes('gazebosim.org') || href.includes('classic.gazebosim.org')) {
      iconClass = 'fa-book';
    } else if (href.includes('wiki.ros.org')) {
      iconClass = 'fa-file-text-o';
    }
    
    // Add icon if a match was found
    if (iconClass) {
      link.appendChild(document.createTextNode(' '));
      
      if (iconClass === 'openrobotics-logo') {
        // Custom Open Robotics logo as SVG
        const logoSpan = document.createElement('span');
        logoSpan.className = 'link-icon openrobotics-icon';
        logoSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" style="vertical-align: middle;"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="12" y1="2" x2="12" y2="9" stroke="currentColor" stroke-width="2"/><line x1="12" y1="15" x2="12" y2="22" stroke="currentColor" stroke-width="2"/><line x1="2" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2"/><line x1="15" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/></svg>';
        link.appendChild(logoSpan);
      } else {
        const icon = document.createElement('i');
        icon.className = 'fa ' + iconClass + ' link-icon';
        icon.setAttribute('aria-hidden', 'true');
        link.appendChild(icon);
      }
    }
  });
});
