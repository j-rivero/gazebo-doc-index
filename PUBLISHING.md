# Publishing Release Notes

This document provides guidelines for creating release announcement posts for the Gazebo Documentation Index.

## Release Post Checklist

When creating release posts (LinkedIn and Discourse), ensure:

### Content Requirements

1. **Include emojis from commit messages** - Maintain the visual consistency with commit history
2. **Summarize commits between version tags** - Use `git log [previous-tag]..[current-tag] --oneline`
3. **Organize by category** - Group new content by the index categories (AI/ML, ROS, Models, etc.)
4. **Highlight major changes** - Call out significant features like UI redesigns
5. **Include direct links** - Link to specific category pages for each mentioned resource

### Format Guidelines

#### LinkedIn Post Format
- Keep it concise (social media optimized)
- Use emojis strategically for visual appeal
- Include relevant hashtags (#Gazebo #Robotics #ROS2 #Simulation #OpenSource)
- Add a redesign note if UI changes were made
- Keep description brief but informative
- Link to the main index page
- **No markdown bold formatting (\*\*)** - Use bold text that can be copy/pasted

#### Discourse Post Format
- More comprehensive and detailed
- Organize with clear markdown headers
- **No spaces between bullet points** (clean formatting)
- Use proper category page URLs, not anchors
- Include:
  - Introduction paragraph
  - UI/Feature changes section (if applicable)
  - New resources organized by category
  - Link to visit the index
  - Contributing section
  - Stats section (optional but valuable)

### Link Format

**Critical**: Always use category page URLs with subcategory anchors for precise linking.

✅ **Correct** (subcategory anchor):
```markdown
[Resource Name](https://j-rivero.github.io/gazebo-doc-index/categories/3_ros.html#the-ros-2-gazebo-bridge-ros_gz)
```

✅ **Acceptable** (whole category page):
```markdown
[Resource Name](https://j-rivero.github.io/gazebo-doc-index/categories/3_ros.html)
```

❌ **Incorrect** (old anchor format):
```markdown
[Resource Name](https://j-rivero.github.io/gazebo-doc-index/#ros)
```

**Finding subcategory anchors**: Subcategory anchors are generated from the subcategory title in lowercase with spaces replaced by hyphens. They appear in the HTML as:
```html
<h3 class="subcat-title" id="installing-on-linux-macosx-and-windows">Installing on Linux, MacOSX and Windows</h3>
```

The anchor would be: `#installing-on-linux-macosx-and-windows`

### Category to File Mapping

The file mapping can be check in the _categories/ subdirectory of this repository.

## Release Post Workflow

1. **Generate commit summary**:
   ```bash
   git log [previous-tag]..[current-tag] --oneline
   ```
3. **Draft content**:
   - Extract emojis and titles from commit messages
   - Group by category/subcategory
   - Write brief descriptions explaining the value of each resource
   - Add context for major changes (UI redesigns, structural changes)

4. **Format and validate**:
   - Remove extra spaces between bullet points (Discourse)
   - Fix all links to use category page URLs with subcategory anchors
   - Add appropriate hashtags (LinkedIn)
   - Proofread for clarity and consistency

5. **Review checklist**:
   - [ ] All emojis from commits are included
   - [ ] Links use category page with subcategory anchor format
   - [ ] No spaces between bullet points (Discourse)
   - [ ] LinkedIn post includes redesign note (if applicable)
   - [ ] Contributing section is present (Discourse)

## Example Structure

### LinkedIn Post Structure
```markdown
# [Project Name] v[Version] Released! 🎉

Brief introduction paragraph

🆕 **New Content Highlights:**

🧠 **Category Name:**
- Brief item description

[Additional categories...]

🚀 **Major Feature (if applicable):**
Description of major changes

💡 **Note:** Context about the release focus

📖 Link to index

#HashTags
```

### Discourse Post Structure
```markdown
# [Project Name] v[Version] Released!

Hi all:

Found some time to update my pet project, the unofficial g[gazebo-doc-index](https://github.com/j-rivero/gazebo-doc-index/). It tries to serve as a collection of Gazebo related resources categorized and presented in a way that would be easy to control+F in the browser.

Summarize the changes

## 🎨 Major Feature (if applicable)

Description with bullet points:
- Feature detail 1
- Feature detail 2

## 🆕 New Documentation Resources

### 🧠 Category Name
- [Resource Title](link-to-category-page) - Description

[Additional categories with resources...]

## Contributing

How to contribute section

```

## Publishing Targets

- **LinkedIn**: Personal/organizational LinkedIn profile
- **Discourse**: https://community.gazebosim.org/ (Announcements category)
- **GitHub**: Release notes on the repository

## Tips

- Keep descriptions concise but informative (explain the value, not just what it is)
- Mention the source when relevant (ROSCon, Community meetings, Official GitHub)
- Star important/foundational resources in the index itself
- Test all links before publishing
- Consider the audience for each platform (professional vs. community)
