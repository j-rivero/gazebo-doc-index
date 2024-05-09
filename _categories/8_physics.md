---
# Contribution guidelines:
# https://github.com/j-rivero/gazebo-doc-index/blob/master/CONTRIBUTING.md

title: Physics in Gazebo
desc: "Physic simulation in Gazebo: engines, joint types, etc."
subcategories:
  - title: General Phsyics concepts
    items:
    - title: Understanding Gazebo Physics
      url: https://gazebosim.org/api/physics/6/physicsplugin.html
      desc: Main introduction to how Gazebo Physics is designed and implemented
      star: true
    - title: The Gazebo TPE (Trivial Physics Engine)
      url: https://robotics.stackexchange.com/questions/104091/documentation-on-gazebo-trivial-physics-engine/105856#105856
      desc: Details and information on Gazebo TPE
      star: false

  - title: Joints
    items:
    - title: Joint mimic constraint
      url: https://www.linkedin.com/posts/ahcorde_gazebo-simulation-ros-activity-7125851561464872960-aA0X
      desc: Enforces a linear relationship between the output position of two joint axes (previosly known in Gazebo Classic as gearbox joint)
      star: false

  - title: Tools
    items:
    - title: Automatically Computing Moments of Inertia for SDFormat Links
      url: https://community.gazebosim.org/t/gsoc-2023-automatically-computing-moments-of-inertia-for-sdformat-links/2267
      desc: Automatic computation of Moments of Inertia for SDFormat Links in simulation
      start: true
---
