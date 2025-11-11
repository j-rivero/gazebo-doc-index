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

  - title: DART physics engine (default in Gazebo)
    items:
    - title: Contact coefficients and parameters
      url: https://github.com/gazebosim/gz-physics/issues/636#issuecomment-2115807874
      desc: Issue with pointers for the support of mu, mu2, slip1, slip2, fdir, restitution, collide_bitmask in SDFormat.
      star: true
    - title: Error Reduction Parameter (ERP) and Constraint Force Mixing (CFM) in DART
      url: https://github.com/gazebosim/gz-physics/issues/636#issuecomment-2117628547
      desc: Issue with information about ERP and CFM in DART and gz-physics
      false: true

  - title: Joints
    items:
    - title: Joint mimic constraint
      url: https://www.linkedin.com/posts/ahcorde_gazebo-simulation-ros-activity-7125851561464872960-aA0X
      desc: Enforces a linear relationship between the output position of two joint axes (previosly known in Gazebo Classic as gearbox joint)
      star: false

  - title: Tools
    items:
    - title: Automatically Computing Moments of Inertia for SDFormat Links
      url: https://discourse.openrobotics.org/t/gsoc-2023-automatically-computing-moments-of-inertia-for-sdformat-links/49133
      desc: Automatic computation of Moments of Inertia for SDFormat Links in simulation
      start: true
---
