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

      - title: ROS 2 and Gazebo Examples
        url: https://github.com/gazebosim/ros_gz/tree/ros2/ros_gz_sim_demos
        desc: Code demos showing the Gazebo and ROS 2 integration
        star: true

      - title: Project layout templates for Gazebo + ROS 2 projects
        url: https://github.com/gazebosim/ros_gz_project_template
        desc: Directory layout and minimal code to serve as the base for new Gazebo + ROS projects
        star: true

      - title: ROS 2 and Gazebo Integration Best Practices
        url: https://vimeo.com/showcase/9954564/video/767127300
        desc: The talk serves to define best practices of integrating simulation with ROS 2
        star: false


  - title: "Description formats: URDF, SDF and others"
    items:
      - title: URDF to SDFormat - The use of URDF in Gazebo Sim
        url: http://sdformat.org/tutorials?tut=sdformat_urdf_extensions&cat=specification&
        desc: Convert and complete an URDF file for its use in Gazebo
        star: true
      - title: Use SDF files for robot_description in ROS instead of URDF
        url: https://github.com/ros/sdformat_urdf
        desc: Avoid having URDF files in ROS and use SDFormat XML as a robot_description (with limitations)
        star: true
      - title: View SDF files on RVIZ
        url: https://github.com/Yadunund/view_sdf_rviz
        desc: ROS 2 packages to view SDF models on RViz
        star: true
      - title: Description templates repository
        url: https://github.com/chapulina/desplate
        desc: The repository contains various examples for how to template description files in ROS 2
        star: false
      - title: Automated Conversion of Description Conventions Fusion360 Add-In.
        url: https://github.com/bionicdl-sustech/ACDC4Robot
        desc: Fusion360 extension exporting models to URDF, SDFormat, and MJCF
        star: true
      - title: Bidirectional SDF <-> Universal Scene Description (USD) converter
        url: https://github.com/gazebosim/gz-usd/blob/main/README.md
        desc: gz-usd - Repository containing tools to convert USD and SDFormat
        star: false
      - title: Biderectional SDF <-> MJCF (Mujoco)
        url: http://sdformat.org/tutorials?tut=interoperability_formats&cat=developers&#mjcf
        desc: Tutorials for converting between SDF and MJCF formats
        star: false

  - title: Gazebo sensors and plugins in ROS
    items:
      - title: Examples and tutorials for Gazebo sensors on ROS 2
        url: https://github.com/gazebosim/ros_gz/blob/ros2/ros_gz_sim_demos/README.md
        desc: Examples and images about the use Gazebo sensors in ROS 2 with the ros_gz bridge
        star: true
      - title: Examples and tutorials for Gazebo sensors on ROS 1 Noetic
        url: https://github.com/gazebosim/ros_gz/tree/noetic/ros_ign_gazebo_demos
        desc: Examples and images about the use Gazebo sensors in ROS 1 with the ros_gz/ros_ign bridge
        star: true

  - title: Gazebo with Moveit2/ros2_controls
    items:
      - title: Ign Moveit2 Examples repositories
        url: https://github.com/AndrejOrsula/ign_moveit2_examples
        desc: C++ and Python examples of using MoveIt 2 for planning motions that are executed inside Gazebo simulation environment
        star: true
      - title: OpenMANIPULATOR-X (Robotis) on Harmonic and ROS 2 Jazzy
        url: https://discourse.ros.org/t/openmanipulator-x-now-supporting-ros-2-jazzy-gazebo-harmonic/42783
        desc: OpenMANIPULATOR-X repositories with Gazebo, MoveIt2 and task planner
        star: false

  - title: Gazebo with Nav2
    items:
      - title: Gazebo Fortress/Garden Nav2 examples on ROS 2 Humble
        url: https://discourse.ros.org/t/nav2-example-with-ignition-gazebo-fortress/31174
        desc: Community examples of Nav2 using Gazebo Fortress and Garden on ROS 2 Humble
        star: true

      - title: Turtlebot3 support for the new Gazebo
        url: https://github.com/ROBOTIS-GIT/turtlebot3_simulations/issues/196
        desc: Issue with information about the support of Gazebo in the Turtlebot3
        star: false

---
