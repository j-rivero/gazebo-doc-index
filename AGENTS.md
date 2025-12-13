# AGENTS.md - AI Agent Guidelines for Gazebo Documentation Index

## Project Overview

This repository maintains the Gazebo Documentation Index, a centralized resource that organizes all Gazebo learning materials. The index is built with Jekyll and served as a static site at https://j-rivero.github.io/gazebo-doc-index/.

**Status**: Alpha version released

## Two Main Use Cases

AI agents working with this repository will typically handle one of two distinct roles:

### Use Case 1: Content Curator (Most Frequent)
**Goal**: Add new documentation entries to the index

### Use Case 2: Web Developer
**Goal**: Modify the Jekyll application structure, layouts, styles, or testing infrastructure

## Repository Structure

```
.
├── _categories/          # Category markdown files (main content area)
├── _includes/           # Reusable HTML components (navbar, footer)
├── _layouts/            # Jekyll page layouts (home, category, wrapper)
├── assets/
│   └── css/
│       └── style.css
├── spec/                # RSpec tests for index integrity
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── index.md             # Homepage
└── 404.html
```

## Key Content Files

### `_categories/` Directory

This is the primary content area. Each `.md` file represents a **category** containing:

- **Frontmatter structure**:
  ```yaml
  title: "Category Title"
  desc: "Category description"
  subcategories:
    - title: "Subcategory Title"
      items:
        - title: 'Item title'
          url: 'https://...'
          desc: 'Item description'
          star: true/false  # Marks important resources
  ```

- **Hierarchy**: Category → Subcategory → Item
- **Item properties**: title, url, desc, star (boolean for importance)

### Example Files

Refer to existing category files like:
- `0_all_links.md`
- `1_installing_gazebo.md`
- `2_programming.md`
- `3_ros.md`
- `4_models.md`
- `5_gui.md`
- `6_thematic.md`
- `7_sensors.md`
- `8_physics.md`

## Development Workflow

### Prerequisites
- Jekyll
- Ruby with Bundler

### Local Development
```bash
cd gazebo-doc-index
bundle install              # First time only
bundle exec jekyll serve    # Starts local server
```

### Testing

**Index integrity tests**:
```bash
bundle exec rspec --format doc
```

**HTML and link validation**:
```bash
jekyll build
htmlproofer ./_site --url-ignore "/gazebo-doc-index/*/"
```

**Note**: All tests must pass before merging pull requests.

---

## USE CASE 1: Content Curator (Adding Index Entries)

### Overview
This is the **most frequent task**. When a user provides a URL or documentation resource to add to the index, follow this workflow.

### Critical Rules

1. **DO NOT remove or modify any existing entries**
2. **ONLY add new items** to the appropriate category file
3. **ONE commit per addition** following the emoji format
4. **Research the link** to understand its content before categorizing
5. **Find the best category** by examining ALL files in `_categories/`

### Step-by-Step Workflow

#### Step 1: Research the Link
- Fetch the webpage content to understand what it provides
- Identify the main topic, technology, and target audience
- Determine if it's a tutorial, tool, library, or reference

#### Step 2: Find the Best Category
Examine all category files in `_categories/` to find the most appropriate placement:

- `0_all_links.md` - Comprehensive list (special category)
- `1_installing_gazebo.md` - Installation and setup topics
- `2_programming.md` - Programming, plugins, APIs
- `3_ros.md` - ROS integration topics
- `4_models.md` - Worlds, models, 3D assets, modeling tools
- `5_gui.md` - GUI tools, visualization, command line
- `6_thematic.md` - Specific robotics domains (drones, manipulation, etc.)
- `7_sensors.md` - Sensor-related content
- `8_physics.md` - Physics engines and concepts

Within each category, choose the most relevant **subcategory**.

#### Step 3: Create the Item Entry

Generate item metadata:
```yaml
- title: 'Concise but descriptive title'
  url: 'https://exact-url-provided'
  desc: 'Clear description of value to users (what it does, why it matters)'
  star: true/false  # true for important/essential resources
```

**Guidelines for metadata**:
- **title**: Should be clear and searchable (50 chars max recommended)
- **url**: Use the exact URL provided by the user
- **desc**: Explain what users will learn or achieve (1-2 sentences). Mention the source specially if it is ROSCon, Community meetings, open robotics discourse or official github in gazebosim. No more than 130 characters.
- **star**: Set to `true` if it's:
  - Widely-used tool/resource
  - Comprehensive/authoritative content
  - Recommended starting point

#### Step 4: Add to Category File

Insert the new item in the appropriate subcategory's `items` array. Maintain proper YAML indentation (2 spaces).

#### Step 5: Commit with Emoji Format

**Commit message format**:
```
$Emoji/s $Title ($Subcategory)
```

Emojis can be more than one if the link is in two subcagories

**Emoji Reference by Category**:

- 📥 **Installing and Setup Gazebo**
  - 💿 Gazebo, Gazebo-Classic and Ignition
  - 💻 Installing on Linux, MacOSX and Windows
  - ☁️ Gazebo on virtualized environments
  - 🐧 Gazebo + ROS installation on Ubuntu Linux
  - 🏙️ Large environments resources
  - 🧪 Headless simulations and CI

- ⌨️ **Programming with Gazebo**
  - 🛠️ Development environment
  - 🔌 Developing Plugins
  - 🐍 Python bindings
  - ✉️ Transport and messages
  - 📷 Working with Camera Images

- 🐢 **Gazebo and ROS**
  - 📖 Installation & Basics
  - 📄 Description formats: URDF, SDF and others
  - 🌉 The ROS 2 Gazebo Bridge (ros_gz)
  - 📡 Gazebo sensors and plugins in ROS
  - 🤖 Gazebo with Moveit2/ros2_controls
  - 🧭 Gazebo with Nav2

- 📦 **Worlds and 3D Models**
  - ⛽ Fuel: the big collection of simulation assets
  - 🌎 World and examples ready to use
  - 🚧 Developing new Worlds and Robots for Gazebo
  - 🎨 Developing new 3D models for Gazebo
  - 📐 Formats and modelling tools

- 🎨 **Tooling, graphic interface and command line tools**
  - 🖥️ Gazebo Sim GUI
  - 🎮 Interacting with the simulation
  - 📈 Visualizing data

- 👋 **Thematic robotics areas**
  - 🚁 Drones
  - ✋ Manipulation
  - 🚢 Maritime robotics
  - 🚗 Mobile Robotics
  - 🧠 IA, Datasets and Machine Learning.

- 📷 **Sensors in Gazebo**
  - 🔍 Finding Gazebo Sensors
  - 📸 Camera sensors
  - 🔦 Laser sensors
  - 🔋 Other sensors
  - 🐢 Gazebo sensors and ROS
  - 🔧 Developing sensors

- 🍎 **Physics in Gazebo**
  - 📚 General Physics concepts
  - 🎯 DART physics engine (default in Gazebo)
  - 🔗 Joints
  - 🔨 Tools

**Example commit**:
```bash
git add _categories/4_models.md
git commit -m "🎨 RobotCAD - FreeCAD workbench for robot design (Formats and modelling tools)"
```

### Quality Checklist

Before committing:
- [ ] URL is valid and accessible
- [ ] Item is added to the most appropriate category/subcategory
- [ ] YAML syntax is correct (2-space indentation)
- [ ] Description is clear and helpful
- [ ] Star rating is appropriate
- [ ] No existing entries were modified
- [ ] Commit message follows emoji format
- [ ] Only ONE item added per commit

---

## USE CASE 2: Web Developer (Application Development)

### Overview
This use case covers changes to the Jekyll application structure, NOT content additions. This includes layouts, styles, testing, configuration, and documentation.

### Scope

**Files typically involved**:
- `_layouts/` - HTML page templates
- `_includes/` - Reusable HTML components
- `assets/css/` - Stylesheets
- `spec/` - RSpec tests
- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `README.md`, `CONTRIBUTING.md`, `design_spec.md` - Documentation
- `404.html`, `index.md` - Special pages

**DO NOT use emoji format** for these commits. Use standard conventional commit messages.

### Common Tasks

#### Modifying Layouts
- **Layouts**: Edit files in `_layouts/` (home.html, category.html, wrapper.html)
- **Components**: Edit files in `_includes/` (navbar.html, footer.html)
- Test changes with `jekyll serve`

#### Updating Styles
- Modify `assets/css/style.css`
- Ensure responsive design is maintained
- Test across different viewport sizes

#### Adding/Modifying Tests
- Index integrity tests: `spec/index_integrity_spec.rb`
- Run tests: `bundle exec rspec --format doc`
- HTML validation: `jekyll build && htmlproofer ./_site --url-ignore "/gazebo-doc-index/*/"`

#### Configuration Changes
- Edit `_config.yml` for Jekyll settings
- Update `Gemfile` for dependency changes
- Run `bundle install` after Gemfile changes

### Commit Guidelines

Use standard commit message format (NO emojis):
```
type: brief description

Optional longer explanation
```

**Types**:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - CSS/styling changes
- `refactor:` - Code restructuring
- `test:` - Test additions/modifications
- `chore:` - Maintenance tasks

**Examples**:
```
feat: add dark mode toggle to navigation
fix: correct responsive layout on mobile devices
docs: update README with new setup instructions
test: add validation for subcategory structure
style: improve category card hover effects
```

### Quality Checklist

Before committing:
- [ ] Local preview works (`jekyll serve`)
- [ ] Tests pass (`bundle exec rspec`)
- [ ] HTML validation passes (htmlproofer)
- [ ] Changes don't break existing functionality
- [ ] Documentation updated if needed
- [ ] Commit message is descriptive

---

## General Guidelines for Both Use Cases

### When Refactoring
- **Preserve existing URLs** unless fixing broken links
- **Keep categories focused** on specific topics
- **Avoid duplication** across categories
- **Update related documentation** if structure changes

## Project Purpose

The documentation index serves to:
- Consolidate scattered Gazebo learning resources
- Help beginners find starting points
- Provide professionals quick access to references
- Enable browser quick-search functionality
- Organize content by topic and use case

## Important Notes

- **Pull requests require passing automated tests**
- **Questions about structure**: Use GitHub issues
- **Content changes**: Submit pull requests to `_categories/` files
- **Design spec**: See `design_spec.md` for project architecture details