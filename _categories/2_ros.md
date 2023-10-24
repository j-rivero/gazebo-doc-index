---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md 

title: Gazebo and ROS
desc: Links related to the use of Gazebo together with ROS (Robot Operative System)
subcategories: 

  - title: Installation & Basics
    items:
      - title: Installing Gazebo with ROS
        url: https://gazebosim.org/docs/all/ros_installation
        desc: Main page documenting all the options of installing Gazebo and ROS together
        star: true

      - title: ROS 2 and Gazebo Integration Best Practices
        url: https://vimeo.com/showcase/9954564/video/767127300
        desc: The talk serves to define best practices of integrating simulation with ROS 2
        star: true

      - title: Project layout templates for Gazebo + ROS projects
        url: https://github.com/gazebosim/ros_gz_project_template
        desc: Directory layout and minimal code to serve as the base for new Gazebo + ROS projects
        star: true

  - title: "Description formats: URDF, SDF and others"
    items:
      - title: URDF to SDFormat - The use of URDF in Gazebo Sim
        url: http://sdformat.org/tutorials?tut=sdformat_urdf_extensions&cat=specification&
        desc: Convert and complete an URDF file for its use in Gazebo
        star: true
      - title: SDFormat XML Robot Descriptions in ROS
        url: https://github.com/ros/sdformat_urdf
        desc: Using SDFormat XML as a robot description format instead of URDF XML
        star: false
      - title: Description templates repository
        url: https://github.com/chapulina/desplate
        desc: The repository contains various examples for how to template description files in ROS 2
        star: false
      - title: Bidirectional SDF <-> Universal Scene Description (USD) converter
        url: https://github.com/gazebosim/gz-usd/blob/main/README.md
        desc: gz-usd - Repository containing tools to convert USD and SDFormat
        star: false
      - title: Biderectional SDF <-> MJCF (Mujoco)
        url: http://sdformat.org/tutorials?tut=interoperability_formats&cat=developers&#mjcf
        desc: Tutorials for converting between SDF and MJCF formats
        star: false

  - title: Gazebo with Moveit2/ros2_controls 
    items:
      - title: Ign Moveit2 Examples repositories
        url: https://github.com/AndrejOrsula/ign_moveit2_examples
        desc: C++ and Python examples of using MoveIt 2 for planning motions that are executed inside Gazebo simulation environment
        star: true

---
